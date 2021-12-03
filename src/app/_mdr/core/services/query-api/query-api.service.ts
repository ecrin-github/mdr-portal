import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseInterface } from '../../interfaces/responses/server-response.interface';
import { environment } from '../../../../../environments/environment.prod';
import {SpecificStudyRequestInterface} from '../../interfaces/requests/specific-study-request.interface';
import {ByStudyCharacteristicsRequestInterface} from '../../interfaces/requests/by-study-characteristics-request.interface';
import {ViaPublishedPaperRequestInterface} from '../../interfaces/requests/via-published-paper-request.interface';
import {ByStudyIdRequestInterface} from '../../interfaces/requests/by-study-id-request.interface';
import {Study} from '../../interfaces/entities/study.interface';


@Injectable({providedIn: 'root'})
export class QueryApiService {

  baseUrlApi: string = environment.hostname + environment.queryBaseUrl;
  baseRawSQlApiUrl: string = environment.hostname + environment.rawQueryBaseUrl;

  private specificStudyApiUrl = this.baseUrlApi + environment.specificStudyUrl;
  private studyCharacteristicsApiUrl = this.baseUrlApi + environment.studyCharacteristicsUrl;
  private viaPublishedPaperApiUrl = this.baseUrlApi + environment.viaPublishedPaperUrl;
  private selectedStudyApiUrl = this.baseUrlApi + environment.studyIdUrl;

  private rawSqlSpecificStudyApiUrl = this.baseRawSQlApiUrl + environment.specificStudyUrl;
  private rawSqlStudyCharacteristicsApiUrl = this.baseRawSQlApiUrl + environment.studyCharacteristicsUrl;
  private rawSqlViaPublishedPaperApiUrl = this.baseRawSQlApiUrl + environment.viaPublishedPaperUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  getSpecificStudy(searchParams: SpecificStudyRequestInterface){
    return this.http.post<ResponseInterface>(this.rawSqlSpecificStudyApiUrl, searchParams);
  }

  getByStudyCharacteristics(searchParams: ByStudyCharacteristicsRequestInterface){
    return this.http.post<ResponseInterface>(this.rawSqlStudyCharacteristicsApiUrl, searchParams);
  }

  getViaPublishedPaper(searchParams: ViaPublishedPaperRequestInterface){
    return this.http.post<ResponseInterface>(this.rawSqlViaPublishedPaperApiUrl, searchParams);
  }

  getByStudyId(searchParams: ByStudyIdRequestInterface){
    return this.http.post<Array<Study>>(this.selectedStudyApiUrl, searchParams);
  }

}
