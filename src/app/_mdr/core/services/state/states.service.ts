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
  get isCleared() {
    return this.states.isCleared.getValue();
  }

  set isCleared(value: boolean) {
    this.states.isCleared.next(value);
  }

  setDefaultIsCleared() {
    this.isCleared = this.defaultStates.defaultIsCleared;
  }


  // IsFiltered
  get isFiltered() {
    return this.states.isFiltered.getValue();
  }

  set isFiltered(value: boolean) {
    this.states.isFiltered.next(value);
  }

  setDefaultIsFiltered() {
    this.isFiltered = this.defaultStates.defaultIsFiltered;
  }


  // SearchParams
  get searchParams() {
    return this.states.searchParams.getValue();
  }

  set searchParams(value: SearchParamsInterface) {
    this.states.searchParams.next({
      searchType: value.searchType,
      searchBody: value.searchBody
    });
  }

  setDefaultSearchParams() {
    this.searchParams = this.defaultStates.defaultSearchParams;
  }


  // FiltersList
  get filtersList() {
    return this.states.filtersList.getValue();
  }

  set filtersList(filters: Array<FilterSampleInterface>) {
    this.states.filtersList.next(filters);
  }

  setDefaultFiltersList() {
    this.filtersList = this.defaultStates.defaultFiltersList;
  }


  // Single Study
  get singleStudy() {
    return this.states.singleStudy.getValue();
  }

  set singleStudy(study: Study) {
    this.states.singleStudy.next(study);
  }

  setDefaultSingleStudy() {
    this.singleStudy = this.defaultStates.defaultSingleStudy;
  }


  // SessionsList
  get sessionsList() {
    return this.states.sessionsList.getValue();
  }

  set sessionsList(sessionsList: Array<SessionRecordInterface>) {
    this.states.sessionsList.next(sessionsList);
  }

  appendToSessionsList(sessionRecord: SessionRecordInterface) {
    const values = this.sessionsList;
    values.push(sessionRecord);
    this.states.sessionsList.next(values);
  }

  getSessionDataFromSessionsList(id: number): SessionRecordInterface{
    if (this.sessionsList.length > 0) {
      return this.states.sessionsList.getValue().find(x => x.id === id);
    }
    return null;
  }

  setDefaultSessionsList() {
    this.sessionsList = this.defaultStates.defaultSessionsList;
  }


  // Active search session
  get activeSession(): SessionDataInterface {
    return this.states.activeSession.getValue();
  }

  set activeSession(value: SessionDataInterface) {
    this.states.activeSession.next(value);
  }

  setDefaultActiveSession() {
    this.activeSession = this.defaultStates.defaultActiveSession;
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
