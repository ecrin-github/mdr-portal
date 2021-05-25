import { States } from './../../states/states';
import { Injectable, OnInit } from '@angular/core';


@Injectable({providedIn: 'root'})
export class QueryBuilderService implements OnInit {

  filtersList: Array<any>;

  constructor(
    private states: States
  ) {
  }

  buildElasticFiltersQuery(){
    this.filtersList = this.states.filtersList.getValue();

    const studyFilters = [];
    const objectFilters = [];

    for (const filter of this.filtersList) {
      if (filter['isNested'] === false && filter['type'] === 'study'){
        const filterOption = {
          term: {}
        };
        filterOption.term[filter['fieldName']] = filter['value'];
        studyFilters.push(filterOption);
      }else if (filter['isNested'] === true && filter['type'] === 'study') {
        const fieldName = filter['fieldName'];
        const filterOption = {
          nested: {
            path: filter['path'],
            query: {}
          }
        };
        const termFilter = {};
        termFilter[fieldName] = filter['value'];
        filterOption.nested.query['term'] = termFilter;
        studyFilters.push(filterOption);
      } else if (filter['isNested'] === false && filter['type'] === 'data-object'){
        const filterOption = {
          term: {}
        };
        filterOption.term[filter['fieldName']] = filter['value'];
        objectFilters.push(filterOption);
      } else if (filter['isNested'] === true && filter['type'] === 'data-object') {
        const fieldName = filter['fieldName'];
        const filterOption = {
          nested: {
            path: filter['path'],
            query: {}
          }
        };
        const termFilter = {};
        termFilter[fieldName] = filter['value'];
        filterOption.nested.query['term'] = termFilter;
        objectFilters.push(filterOption);
      }
    }

    return {
      studyFilters,
      objectFilters
    };

  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    this.states.filtersList.subscribe(value => this.filtersList = value);
  }

}

