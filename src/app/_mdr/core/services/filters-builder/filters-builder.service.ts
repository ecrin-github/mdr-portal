import {States} from '../../states/states';
import {Injectable} from '@angular/core';
import {FilterSampleInterface} from '../../interfaces/filters/filter-sample.interface';
import {FiltersList} from '../../interfaces/requests/base-request.interface';


@Injectable({providedIn: 'root'})
export class FiltersBuilderService {

  filtersList: Array<FilterSampleInterface>;

  constructor(
    private states: States
  ) {
    this.states.filtersList.subscribe(value => this.filtersList = value);
  }


  buildStudyFilters(): Array<any> {
    this.filtersList = this.states.filtersList.getValue();
    const studyFilters = [];

    for (const filter of this.filtersList) {
      if (!filter.isNested && filter.type === 'study') {
        const filterOption = {
          term: {}
        };
        filterOption.term[filter.fieldName] = filter.value;
        studyFilters.push(filterOption);
      } else if (filter.isNested && filter.type === 'study') {
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
        studyFilters.push(filterOption);
      }
    }
    return studyFilters;
  }

  buildObjectFilters(): Array<any> {
    this.filtersList = this.states.filtersList.getValue();
    const objectFilters = [];

    for (const filter of this.filtersList) {
      if (!filter.isNested && filter.type === 'data-object'){
        const filterOption = {
          term: {}
        };
        filterOption.term[filter.fieldName] = filter.value;
        objectFilters.push(filterOption);
      } else if (filter.isNested && filter.type === 'data-object') {
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
        objectFilters.push(filterOption);
      }
    }
    return objectFilters;
  }

  filtersBuilder(): FiltersList {
    return {
      studyFilters: this.buildStudyFilters(),
      objectFilters: this.buildObjectFilters()
    };
  }

}

