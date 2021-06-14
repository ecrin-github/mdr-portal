import {Study} from '../interfaces/entities/study.interface';
import {Injectable} from '@angular/core';
import {SearchEvent, SearchParams, SessionData} from '../interfaces/states/session.interface';
import {RawQueryInterface} from '../interfaces/requests/raw-query.interface';


@Injectable({providedIn: 'root'})
export class DefaultStates {

  public defaultIsCleared = true;
  public defaultIsFiltered = false;

  public defaultSearchEvent: SearchEvent = {
    searchType: '',
    searchBody: {
      page: 0,
      size: 10,
      elasticQuery: {}
    }
  };

  public defaultSearchParamsEvent: SearchParams = {
    pageIndex: 0,
    pageSize: 10,
    loading: false,
    dataSources: [],
    total: undefined,
    searchType: '',
    searchBody: {
      page: 0,
      size: 10,
      elasticQuery: {}
    }
  };

  public defaultFiltersList = [];

  public defaultSingleStudyData: Study;

  public defaultSessionData: SessionData;

  public defaultSessionsListValue = [];

}
