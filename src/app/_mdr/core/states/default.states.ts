import {Study} from '../interfaces/dto/study.interface';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class DefaultStates {

  public defaultIsCleared = true;
  public defaultIsFiltered = false;

  public defaultSearchEvent = {
    searchType: '',
    searchBody: {}
  };

  public defaultSearchParamsEvent = {
    pageIndex: 0,
    pageSize: 10,
    loading: false,
    dataSources: [],
    total: undefined,
    searchType: '',
    searchBody: {}
  };

  public defaultFiltersList = [];

  public defaultSingleStudyData: Study;

  public defaultSessionData = {};

  public defaultSessionsListValue = [];

}
