import {Study} from '../interfaces/entities/study.interface';
import {Injectable} from '@angular/core';
import {SearchParamsInterface} from '../interfaces/search-params/search-params.interface';
import {SessionDataInterface} from '../interfaces/states/session.interface';


@Injectable({providedIn: 'root'})
export class DefaultStates {

  public defaultIsCleared = true;
  public defaultIsFiltered = false;

  public defaultSearchParams: SearchParamsInterface = {
    searchType: null,
    searchBody: null
  };

  public defaultFiltersList = [];

  public defaultSingleStudy: Study;

  public defaultActiveSession: SessionDataInterface = {
    searchType: null,
    searchBody: null,
    filters: null
  };

  public defaultSessionsList = [];

}
