import {Injectable} from '@angular/core';
import {States} from '../../states/states';
import {DefaultStates} from '../../states/default.states';
import {SearchParamsInterface} from '../../interfaces/search-params/search-params.interface';
import {Study} from '../../interfaces/entities/study.interface';
import {SessionDataInterface, SessionRecordInterface} from '../../interfaces/states/session.interface';
import {FilterSampleInterface} from '../../interfaces/filters/filter-sample.interface';


@Injectable({providedIn: 'root'})
export class StatesService {

  constructor(
    public states: States,
    public defaultStates: DefaultStates
  ) {
  }

  // IsCleared
  getIsCleared() {
    return this.states.isCleared.getValue();
  }

  setIsCleared(value: boolean) {
    this.states.isCleared.next(value);
  }

  setDefaultIsCleared() {
    this.setIsCleared(this.defaultStates.defaultIsCleared);
  }


  // IsFiltered
  getIsFiltered() {
    return this.states.isFiltered.getValue();
  }

  setIsFiltered(value: boolean) {
    this.states.isFiltered.next(value);
  }

  setDefaultIsFiltered() {
    this.setIsFiltered(this.defaultStates.defaultIsFiltered);
  }


  // SearchParams
  getSearchParams() {
    return this.states.searchParams.getValue();
  }

  setSearchParams(value: SearchParamsInterface) {
    this.states.searchParams.next({
      searchType: value.searchType,
      searchBody: value.searchBody
    });
  }

  setDefaultSearchParams() {
    this.setSearchParams(this.defaultStates.defaultSearchParams);
  }


  // FiltersList
  getFiltersList() {
    return this.states.filtersList.getValue();
  }

  setFiltersList(filters: Array<FilterSampleInterface>) {
    this.states.filtersList.next(filters);
  }

  setDefaultFiltersList() {
    this.setFiltersList(this.defaultStates.defaultFiltersList);
  }


  // Single Study
  getSingleStudy() {
    return this.states.singleStudy.getValue();
  }

  setSingleStudy(study: Study) {
    this.states.singleStudy.next(study);
  }

  setDefaultSingleStudy() {
    this.setSingleStudy(this.defaultStates.defaultSingleStudy);
  }


  // SessionsList
  getSessionsList() {
    return this.states.sessionsList.getValue();
  }

  setSessionsList(sessionsList: Array<SessionRecordInterface>) {
    this.states.sessionsList.next(sessionsList);
  }

  appendToSessionsList(sessionRecord: SessionRecordInterface) {
    const values = this.getSessionsList();
    values.push(sessionRecord);
    this.states.sessionsList.next(values);
  }

  getSessionDataFromSessionsList(id: number): SessionRecordInterface{
    if (this.getSessionsList().length > 0) {
      return this.states.sessionsList.getValue().find(x => x.id === id);
    }
    return null;
  }

  setDefaultSessionsList() {
    this.setSessionsList(this.defaultStates.defaultSessionsList);
  }


  // Active search session
  getActiveSession(): SessionDataInterface {
    return this.states.activeSession.getValue();
  }

  setActiveSession(value: SessionDataInterface) {
    this.states.activeSession.next(value);
  }

  setDefaultActiveSession() {
    this.setActiveSession(this.defaultStates.defaultActiveSession);
  }


  // Additional
  clearSearchAndUpload() {
    this.states.isFiltered.next(false);
    this.states.isCleared.next(true);
    this.setDefaultFiltersList();
    this.setDefaultSearchParams();
  }

  clearFilters() {
    this.states.isFiltered.next(false);
    this.setDefaultFiltersList();
  }

}
