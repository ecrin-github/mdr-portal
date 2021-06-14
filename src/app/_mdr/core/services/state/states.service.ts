import { Study } from '../../interfaces/entities/study.interface';
import {SearchEvent, SessionData, SessionRecord} from '../../interfaces/states/session.interface';
import {Injectable} from '@angular/core';
import {States} from '../../states/states';
import {DefaultStates} from '../../states/default.states';
import {RawQueryInterface} from '../../interfaces/requests/raw-query.interface';


@Injectable({providedIn: 'root'})
export class StatesService {

  constructor(
    public states: States,
    public defaultStates: DefaultStates
  ) {
  }

  getIsFiltered() {
    return this.states.isFiltered.getValue();
  }

  getIsCleared() {
    return this.states.isCleared.getValue();
  }

  getSearchEvent() {
    return this.states.searchEvent.getValue();
  }

  getInitialSearchParams() {
    return this.states.initialSearchParamsEvent.getValue();
  }

  setSearchEvent(searchEventData: { searchType: string, searchBody: RawQueryInterface } ) {
    this.states.searchEvent.next(searchEventData);
  }

  setIsFiltered(value: boolean) {
    this.states.isFiltered.next(value);
  }

  setIsCleared(value: boolean) {
    this.states.isCleared.next(value);
  }

  setDefaultSearchParams() {
    this.states.initialSearchParamsEvent.next(this.defaultStates.defaultSearchParamsEvent);
  }

  setSessionData(value: SessionData) {
    this.states.sessionData.next(value);
  }

  getSessionData() {
    return this.states.sessionData.getValue();
  }

  getStudy() {
    return this.states.singleStudyData.getValue();
  }

  setStudy(studyData: Study) {
    this.states.singleStudyData.next(studyData);
  }

  getFiltersList() {
    return this.states.filtersList.getValue();
  }

  setFiltersList(filters: Array<any>) {
    this.states.filtersList.next(filters);
  }

  getSessionsList() {
    return this.states.sessionsList.getValue();
  }

  addSessionsList(sessionRecord: SessionRecord) {
    const values = this.getSessionsList();
    values.push(sessionRecord);
    this.states.sessionsList.next(values);
  }

  clearSearchAndUpload() {
    this.states.isFiltered.next(false);
    this.states.isCleared.next(true);
    this.states.filtersList.next(this.defaultStates.defaultFiltersList);
    this.states.searchEvent.next(this.defaultStates.defaultSearchEvent);
    this.setDefaultSearchParams();
  }

  clearFilters() {
    this.states.isFiltered.next(false);
    this.states.filtersList.next(this.defaultStates.defaultFiltersList);
  }

}
