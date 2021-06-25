import {States} from '../../states/states';
import {Injectable} from '@angular/core';
import {SpecificStudyRequestInterface} from '../../interfaces/requests/specific-study-request.interface';
import {ByStudyCharacteristicsRequestInterface} from '../../interfaces/requests/by-study-characteristics-request.interface';
import {ViaPublishedPaperRequestInterface} from '../../interfaces/requests/via-published-paper-request.interface';
import {IDENTIFIER_TYPES} from '../../types/identifiers-types';
import {FilterSampleInterface} from '../../interfaces/filters/filter-sample.interface';


@Injectable({providedIn: 'root'})
export class QueryBuilderService {

  filtersList: Array<FilterSampleInterface>;

  constructor(
    private states: States
  ) {
    this.states.filtersList.subscribe(value => this.filtersList = value);
  }

  getIdentifierType(id: number): string {
    return IDENTIFIER_TYPES.find(x => x.id === id).name;
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

  buildSpecificStudyQuery(searchParams: SpecificStudyRequestInterface) {
    const identifierType = this.getIdentifierType(searchParams.searchType);
    return {
      bool: {
        must: {
          nested: {
            path: 'study_identifiers',
            query: {
              bool: {
                must: [
                  {
                    term: {
                      'study_identifiers.identifier_type': identifierType
                    }
                  },
                  {
                    term: {
                      'study_identifiers.identifier_value': searchParams.searchValue
                    }
                  }
                ]
              }
            }
          }
        },
        must_not: this.buildStudyFilters()
      }
    };
  }

  buildByStudyCharacteristicsQuery(searchParams: ByStudyCharacteristicsRequestInterface) {
    let queryCondition = 'must';
    if (searchParams.logicalOperator === 'or') {
      queryCondition = 'should';
    }

    const queryBody = {
      bool: {
        [queryCondition]: [
          {
            bool: {
              should: [{
                simple_query_string: {
                  query: searchParams.titleContains,
                  fields: ['display_title'],
                  default_operator: 'and'
                }
              }, {
                nested: {
                  path: 'study_titles',
                  query: {
                    simple_query_string: {
                      query: searchParams.titleContains,
                      fields: ['study_titles.title_text'],
                      default_operator: 'and'
                    }
                  }
                }
              }]
            }
          }
        ],
        must_not: this.buildStudyFilters()
      }
    };

    if (searchParams.topicsInclude !== null && searchParams.topicsInclude !== '') {
      queryBody.bool[queryCondition].push(
          {
            nested: {
              path: 'study_topics',
              query: {
                simple_query_string: {
                  query: searchParams.topicsInclude,
                  fields: ['study_topics.topic_value'],
                  default_operator: 'and',
                },
              },
            },
          }
      );
    }
    return queryBody;
  }

  buildViaPublishedPaperQuery(searchParams: ViaPublishedPaperRequestInterface) {
    const queryBody = {
      bool: {}
    };

    if (searchParams.searchType === 'doi') {
      queryBody.bool = {
        must: {
          term: {
            doi: searchParams.searchValue
          }
        },
        must_not: this.buildObjectFilters()
      };
    } else {
      queryBody.bool = {
        must: [{
          bool: {
          should: [{
            simple_query_string: {
              query: searchParams.searchValue,
              fields: ['display_title'],
              default_operator: 'and',
            },
          }, {
            nested: {
              path: 'object_titles',
              query: {
                simple_query_string: {
                  query: searchParams.searchValue,
                  fields: ['object_titles.title_text'],
                  default_operator: 'and',
                },
              },
            },
          }],
            minimum_should_match: 1,
          }
        }],
        must_not: this.buildObjectFilters()
      };
    }
    return queryBody;
  }

}

