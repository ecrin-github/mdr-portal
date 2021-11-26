import {Injectable} from '@angular/core';
import {FiltersRequestInterface} from '../../interfaces/filters/filters.interface';
import {StatesService} from '../state/states.service';


@Injectable({providedIn: 'root'})
export class FiltersBuilderService {

  exceptionFiltersArray: FiltersRequestInterface;

  STUDY_FEATURE_PARAMS: string[] = ['Phase', 'Intervention model',
    'Allocation type', 'Primary purpose', 'Masking', 'Observational model',
  'Time perspective', 'Biospecimens retained'];

  constructor(
    private statesService: StatesService
  ) {
  }


  filtersBuilder(): FiltersRequestInterface {
    this.exceptionFiltersArray = {
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
            this.exceptionFiltersArray.studyFeatureValues.push(filter.value);
          }

          if (filter.subgroupName === 'Study Type'){
            this.exceptionFiltersArray.studyTypes.push(filter.value);
          }

          if (filter.subgroupName === 'Study Status'){
            this.exceptionFiltersArray.studyStatuses.push(filter.value);
          }

          if (filter.subgroupName === 'Gender eligibility'){
            this.exceptionFiltersArray.studyGenderEligibility.push(filter.value);
          }

          if (filter.subgroupName === 'Object Type'){
            this.exceptionFiltersArray.objectTypes.push(filter.value);
          }

          if (filter.subgroupName === 'Access type'){
            this.exceptionFiltersArray.objectAccessTypes.push(filter.value);
          }

        }
      }
    }

    return this.exceptionFiltersArray;
  }

}

