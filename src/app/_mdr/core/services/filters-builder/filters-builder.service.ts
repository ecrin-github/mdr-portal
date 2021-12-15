import {Injectable} from '@angular/core';
import {FiltersRequestInterface} from '../../interfaces/filters/filters.interface';
import {StatesService} from '../state/states.service';


interface EsFilters {
  studyTypes: number[];
  studyStatuses: number[];
  studyGenderEligs: number[];
  studyFeatures: number[];
  objectTypes: number[];
  objectAccessTypes: number[];
}


@Injectable({providedIn: 'root'})
export class FiltersBuilderService {

  exceptionDbFiltersArray: FiltersRequestInterface;
  exceptionEsFilters: EsFilters;
  exceptionEsFiltersArray: any[] = [];

  STUDY_FEATURE_PARAMS: string[] = ['Phase', 'Intervention model',
    'Allocation type', 'Primary purpose', 'Masking', 'Observational model',
  'Time perspective', 'Biospecimens retained'];

  constructor(
    private statesService: StatesService
  ) {
  }


  databaseFiltersBuilder(): FiltersRequestInterface {
    this.exceptionDbFiltersArray = {
      studyTypes: [],
      studyStatuses: [],
      studyGenderEligibility: [],
      studyFeatureValues: [],
      objectTypes: [],
      objectAccessTypes: [],
    };

    if (this.statesService.filtersList !== null && this.statesService.filtersList !== undefined) {
      if (this.statesService.filtersList.length > 0) {
        for (const filter of this.statesService.filtersList) {

          if (this.STUDY_FEATURE_PARAMS.includes(filter.subgroupName)){
            this.exceptionDbFiltersArray.studyFeatureValues.push(filter.value);
          }

          if (filter.subgroupName === 'Study Type'){
            this.exceptionDbFiltersArray.studyTypes.push(filter.value);
          }

          if (filter.subgroupName === 'Study Status'){
            this.exceptionDbFiltersArray.studyStatuses.push(filter.value);
          }

          if (filter.subgroupName === 'Gender eligibility'){
            this.exceptionDbFiltersArray.studyGenderEligibility.push(filter.value);
          }

          if (filter.subgroupName === 'Object Type'){
            this.exceptionDbFiltersArray.objectTypes.push(filter.value);
          }

          if (filter.subgroupName === 'Access type'){
            this.exceptionDbFiltersArray.objectAccessTypes.push(filter.value);
          }

        }
      }
    }

    return this.exceptionDbFiltersArray;
  }


  elasticsearchFiltersIdsBuilder(): EsFilters {
    this.exceptionEsFilters = {
      studyTypes: [],
      studyStatuses: [],
      studyGenderEligs: [],
      studyFeatures: [],
      objectTypes: [],
      objectAccessTypes: [],
    };

    if (this.statesService.filtersList !== null && this.statesService.filtersList !== undefined) {
      if (this.statesService.filtersList.length > 0) {
        for (const filter of this.statesService.filtersList) {

          if (filter.fieldName === 'study_type.id') {
            if (!this.exceptionEsFilters.studyTypes.includes(filter.value)) {
              this.exceptionEsFilters.studyTypes.push(filter.value);
            }
          }

          if (filter.fieldName === 'study_status.id') {
            if (!this.exceptionEsFilters.studyStatuses.includes(filter.value)) {
              this.exceptionEsFilters.studyStatuses.push(filter.value);
            }
          }

          if (filter.fieldName === 'study_gender_elig.id') {
            if (!this.exceptionEsFilters.studyGenderEligs.includes(filter.value)) {
              this.exceptionEsFilters.studyGenderEligs.push(filter.value);
            }
          }

          if (filter.fieldName === 'study_features.feature_value.id') {
            if (!this.exceptionEsFilters.studyFeatures.includes(filter.value)) {
              this.exceptionEsFilters.studyFeatures.push(filter.value);
            }
          }

          if (filter.fieldName === 'linked_data_objects.object_type.id') {
            if (!this.exceptionEsFilters.objectTypes.includes(filter.value)) {
              this.exceptionEsFilters.objectTypes.push(filter.value);
            }
          }

          if (filter.fieldName === 'linked_data_objects.access_type.id') {
            if (!this.exceptionEsFilters.objectAccessTypes.includes(filter.value)) {
              this.exceptionEsFilters.objectAccessTypes.push(filter.value);
            }
          }
        }
      }
    }
    return this.exceptionEsFilters;
  }



  elasticsearchFiltersBuilder(): any[] {

    this.exceptionEsFiltersArray = [];

    this.exceptionEsFilters = this.elasticsearchFiltersIdsBuilder();

    if (this.exceptionEsFilters.studyTypes.length > 0){
      const filterOption = {
        terms: {}
      };
      filterOption.terms['study_type.id'] = this.exceptionEsFilters.studyTypes;
      this.exceptionEsFiltersArray.push(filterOption);
    }

    if (this.exceptionEsFilters.studyStatuses.length > 0){
      const filterOption = {
        terms: {}
      };
      filterOption.terms['study_status.id'] = this.exceptionEsFilters.studyStatuses;
      this.exceptionEsFiltersArray.push(filterOption);
    }

    if (this.exceptionEsFilters.studyGenderEligs.length > 0){
      const filterOption = {
        terms: {}
      };
      filterOption.terms['study_gender_elig.id'] = this.exceptionEsFilters.studyGenderEligs;
      this.exceptionEsFiltersArray.push(filterOption);
    }

    if (this.exceptionEsFilters.studyFeatures.length > 0){
      const filterOption = {
        nested: {
          path: 'study_features',
          query: {}
        }
      };
      filterOption.nested.query['terms']['study_features.feature_value.id'] = this.exceptionEsFilters.studyGenderEligs;
      this.exceptionEsFiltersArray.push(filterOption);
    }

    if (this.exceptionEsFilters.objectTypes.length > 0 || this.exceptionEsFilters.objectAccessTypes.length > 0){
      if (this.exceptionEsFilters.objectTypes.length > 0 && !(this.exceptionEsFilters.objectAccessTypes.length > 0)){
        const filterOption = {
          nested: {
            path: 'linked_data_objects',
            inner_hits: {
              size: 100,
              from: 0
            },
            query: {}
          }
        };
        const termFilter = {};
        termFilter['linked_data_objects.object_type.id'] = this.exceptionEsFilters.objectTypes;
        filterOption.nested.query['terms'] = termFilter;
        this.exceptionEsFiltersArray.push(filterOption);
      } else if (!(this.exceptionEsFilters.objectTypes.length > 0) && this.exceptionEsFilters.objectAccessTypes.length > 0){
        const filterOption = {
          nested: {
            path: 'linked_data_objects',
            inner_hits: {
              size: 100,
              from: 0
            },
            query: {}
          }
        };
        const termFilter = {};
        termFilter['linked_data_objects.access_type.id'] = this.exceptionEsFilters.objectAccessTypes;
        filterOption.nested.query['terms'] = termFilter;
        this.exceptionEsFiltersArray.push(filterOption);
      } else {
        const otFilterOption = {
          nested: {
            path: 'linked_data_objects',
            inner_hits: {
              size: 100,
              from: 0
            },
            query: {}
          }
        };
        const otTermFilter = {};
        otTermFilter['linked_data_objects.object_type.id'] = this.exceptionEsFilters.objectTypes;
        otFilterOption.nested.query['terms'] = otTermFilter;
        this.exceptionEsFiltersArray.push(otFilterOption);

        const filterOption = {
          nested: {
            path: 'linked_data_objects',
            query: {}
          }
        };
        const termFilter = {};
        termFilter['linked_data_objects.access_type.id'] = this.exceptionEsFilters.objectAccessTypes;
        filterOption.nested.query['terms'] = termFilter;
        this.exceptionEsFiltersArray.push(filterOption);
      }
    }
    return this.exceptionEsFiltersArray;
  }
}

