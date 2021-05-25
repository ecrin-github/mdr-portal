import {BehaviorSubject} from 'rxjs';
import {DefaultStates} from './default.states';
import {Injectable} from '@angular/core';
import {SessionRecord} from '../interfaces/states/session.interface';

@Injectable({providedIn: 'root'})
export class States {

  constructor(
    public defaultStates: DefaultStates
  ) {
  }

  public isCleared = new BehaviorSubject(this.defaultStates.defaultIsCleared);
  public isFiltered = new BehaviorSubject(this.defaultStates.defaultIsFiltered);

  public searchEvent = new BehaviorSubject(this.defaultStates.defaultSearchEvent);

  public initialSearchParamsEvent = new BehaviorSubject(this.defaultStates.defaultSearchParamsEvent);

  public filtersList = new BehaviorSubject(this.defaultStates.defaultFiltersList);

  public singleStudyData = new BehaviorSubject(this.defaultStates.defaultSingleStudyData);

  public sessionData = new BehaviorSubject(this.defaultStates.defaultSessionData);

  public sessionsList = new BehaviorSubject<Array<SessionRecord>>(this.defaultStates.defaultSessionsListValue);

}
