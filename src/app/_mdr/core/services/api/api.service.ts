import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Study } from '../../interfaces/dto/study.interface';
import { RestApiResponseInterface, ElasticResponseInterface, SelectedStudyApiInterface } from './../../interfaces/responses/api-response.interface';
import { environment } from './../../../../../environments/environment.prod';


@Injectable({providedIn: 'root'})
export class ApiService {

  private elasticSearchSpecificStudyApiUrl = environment.elasticSearchSpecificStudyApiUrl;
  private elasticSearchStudyCharacteristicsApiUrl = environment.elasticSearchStudyCharacteristicsApiUrl;
  private elasticSearchViaPublishedPaperApiUrl = environment.elasticSearchViaPublishedPaperApiUrl;
  private elasticSearchSelectedStudyApiUrl = environment.elasticSearchSelectedStudyApiUrl;

  private elasticQueryBasedStudyUrl = environment.elasticQueryBasedStudyUrl;
  private elasticQueryBasedObjectUrl = environment.elasticQueryBasedObjectUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  getSpecificStudyApi(searchParams: object){
    return this.http.post<RestApiResponseInterface>(environment.hostname + this.elasticSearchSpecificStudyApiUrl, searchParams);
  }

  getStudyCharacteristicsApi(searchParams: object){
    return this.http.post<RestApiResponseInterface>(environment.hostname + this.elasticSearchStudyCharacteristicsApiUrl, searchParams);
  }

  getViaPublishedPaperApi(searchParams: object){
    return this.http.post<RestApiResponseInterface>(environment.hostname + this.elasticSearchViaPublishedPaperApiUrl, searchParams);
  }

  getSelectedStudyApi(searchParams: object){
    return this.http.post<SelectedStudyApiInterface>(environment.hostname + this.elasticSearchSelectedStudyApiUrl, searchParams);
  }

  getElasticQueryStudies(searchParams: object){
    return this.http.post<ElasticResponseInterface>(environment.hostname + this.elasticQueryBasedStudyUrl, searchParams);
  }

  getElasticQueryObjects(searchParams: object){
    return this.http.post<ElasticResponseInterface>(environment.hostname + this.elasticQueryBasedObjectUrl, searchParams);
  }

}
