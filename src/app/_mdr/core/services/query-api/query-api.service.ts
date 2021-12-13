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
  baseEsApiUrl: string = environment.hostname + environment.esQueryBaseUrl;

  private specificStudyApiUrl = this.baseEsApiUrl + environment.specificStudyUrl;
  private studyCharacteristicsApiUrl = this.baseEsApiUrl + environment.studyCharacteristicsUrl;
  private viaPublishedPaperApiUrl = this.baseEsApiUrl + environment.viaPublishedPaperUrl;
  private selectedStudyApiUrl = this.baseEsApiUrl + environment.studyIdUrl;

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

}
