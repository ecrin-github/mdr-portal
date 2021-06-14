import {BehaviorSubject} from 'rxjs';
import {DefaultStates} from './default.states';
import {Injectable} from '@angular/core';
import {SearchEvent, SearchParams, SessionData, SessionRecord} from '../interfaces/states/session.interface';
import {Study} from '../interfaces/entities/study.interface';

@Injectable({providedIn: 'root'})
export class States {

  constructor(
    public defaultStates: DefaultStates
  ) {
  }

  public isCleared: BehaviorSubject<boolean> =
      new BehaviorSubject<boolean>(this.defaultStates.defaultIsCleared);

  public isFiltered: BehaviorSubject<boolean> =
      new BehaviorSubject<boolean>(this.defaultStates.defaultIsFiltered);

  public searchEvent: BehaviorSubject<SearchEvent> =
      new BehaviorSubject<SearchEvent>(this.defaultStates.defaultSearchEvent);

  public initialSearchParamsEvent: BehaviorSubject<SearchParams> =
      new BehaviorSubject<SearchParams>(this.defaultStates.defaultSearchParamsEvent);

  public filtersList: BehaviorSubject<Array<any>> =
      new BehaviorSubject<Array<any>>(this.defaultStates.defaultFiltersList);

  public singleStudyData: BehaviorSubject<Study> =
      new BehaviorSubject<Study>(this.defaultStates.defaultSingleStudyData);

  public sessionData: BehaviorSubject<SessionData> =
      new BehaviorSubject<SessionData>(this.defaultStates.defaultSessionData);

  public sessionsList: BehaviorSubject<Array<SessionRecord>> =
      new BehaviorSubject<Array<SessionRecord>>(this.defaultStates.defaultSessionsListValue);

}
