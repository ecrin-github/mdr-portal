import {Injectable} from '@angular/core';
import {FiltersRequestInterface} from '../../interfaces/filters/filters.interface';
import {StatesService} from '../state/states.service';


@Injectable({providedIn: 'root'})
export class FiltersBuilderService {

  exceptionDbFiltersArray: FiltersRequestInterface;
  exceptionEsFiltersArray: any[];

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


  elasticsearchFiltersBuilder(): any[] {

    this.exceptionEsFiltersArray = [];

    if (this.statesService.filtersList !== null && this.statesService.filtersList !== undefined) {
      if (this.statesService.filtersList.length > 0) {
        for (const filter of this.statesService.filtersList) {
          if (filter.isNested) {
            const fieldName = filter.fieldName;
            const filterOption = {
              nested: {
                path: filter.path,
                query: {}
              }
            };
            const termFilter = {};
            termFilter[fieldName] = filter.value;
            filterOption.nested.query['term'] = termFilter;
            this.exceptionEsFiltersArray.push(filterOption);
          } else {
            const filterOption = {
              term: {}
            };
            filterOption.term[filter.fieldName] = filter.value;
            this.exceptionEsFiltersArray.push(filterOption);
          }
        }
      }
      return this.exceptionEsFiltersArray;
    }
  }
}

