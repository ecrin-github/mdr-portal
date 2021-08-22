import {BehaviorSubject} from 'rxjs';
import {DefaultStates} from './default.states';
import {Injectable} from '@angular/core';
import {SessionDataInterface, SessionRecordInterface} from '../interfaces/states/session.interface';
import {Study} from '../interfaces/entities/study.interface';
import {FilterSampleInterface} from '../interfaces/filters/filter-sample.interface';
import {SearchParamsInterface} from '../interfaces/search-params/search-params.interface';

@Injectable({providedIn: 'root'})
export class States {

  constructor(
    private defaultStates: DefaultStates
  ) {
  }

  public isCleared: BehaviorSubject<boolean> =
      new BehaviorSubject<boolean>(this.defaultStates.defaultIsCleared);

  public isFiltered: BehaviorSubject<boolean> =
      new BehaviorSubject<boolean>(this.defaultStates.defaultIsFiltered);

  public searchParams: BehaviorSubject<SearchParamsInterface> =
      new BehaviorSubject<SearchParamsInterface>(this.defaultStates.defaultSearchParams);

  public filtersList: BehaviorSubject<Array<FilterSampleInterface>> =
      new BehaviorSubject<Array<FilterSampleInterface>>(this.defaultStates.defaultFiltersList);

  public singleStudy: BehaviorSubject<Study> =
      new BehaviorSubject<Study>(this.defaultStates.defaultSingleStudy);

  public activeSession: BehaviorSubject<SessionDataInterface> =
      new BehaviorSubject<SessionDataInterface>(this.defaultStates.defaultActiveSession);

  public sessionsList: BehaviorSubject<Array<SessionRecordInterface>> =
      new BehaviorSubject<Array<SessionRecordInterface>>(this.defaultStates.defaultSessionsList);

}
