import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseInterface } from '../../interfaces/responses/server-response.interface';
import { environment } from '../../../../../environments/environment.prod';
import {SpecificStudyRequestInterface} from '../../interfaces/requests/specific-study-request.interface';
import {ByStudyCharacteristicsRequestInterface} from '../../interfaces/requests/by-study-characteristics-request.interface';
import {ViaPublishedPaperRequestInterface} from '../../interfaces/requests/via-published-paper-request.interface';
import {ByStudyIdRequestInterface} from '../../interfaces/requests/by-study-id-request.interface';
import {RawQueryInterface} from '../../interfaces/requests/raw-query.interface';
import {Study} from '../../interfaces/entities/study.interface';


@Injectable({providedIn: 'root'})
export class ApiService {

  baseUrlApi: string = environment.hostname + environment.apiBaseUrl + environment.apiVersion;
  baseUrlSearch: string = environment.hostname + environment.rawQueryBaseUrl + environment.rawQueryVersion;

  private specificStudyApiUrl = this.baseUrlApi + environment.specificStudyUrl;
  private studyCharacteristicsApiUrl = this.baseUrlApi + environment.studyCharacteristicsUrl;
  private viaPublishedPaperApiUrl = this.baseUrlApi + environment.viaPublishedPaperUrl;
  private selectedStudyApiUrl = this.baseUrlApi + environment.studyIdUrl;

  private queryBasedStudyUrl = this.baseUrlSearch + environment.rawQueryStudyUrl;
  private queryBasedObjectUrl = this.baseUrlSearch + environment.rawQueryObjectUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  getSpecificStudy(searchParams: SpecificStudyRequestInterface){
    return this.http.post<ResponseInterface>(this.specificStudyApiUrl, searchParams);
  }

  getByStudyCharacteristics(searchParams: ByStudyCharacteristicsRequestInterface){
    return this.http.post<ResponseInterface>(this.studyCharacteristicsApiUrl, searchParams);
  }

  getViaPublishedPaper(searchParams: ViaPublishedPaperRequestInterface){
    return this.http.post<ResponseInterface>(this.viaPublishedPaperApiUrl, searchParams);
  }

  getByStudyId(searchParams: ByStudyIdRequestInterface){
    return this.http.post<Array<Study>>(this.selectedStudyApiUrl, searchParams);
  }

  getRawQueryStudies(searchParams: RawQueryInterface){
    return this.http.post<ResponseInterface>(this.queryBasedStudyUrl, searchParams);
  }

  getRawQueryObjects(searchParams: RawQueryInterface){
    return this.http.post<ResponseInterface>(this.queryBasedObjectUrl, searchParams);
  }

}
