import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Study } from '../../interfaces/dto/study.interface';
import { SearchResponseInterface } from './../../interfaces/responses/search-response.interface';
import { environment } from './../../../../../environments/environment.prod';


@Injectable({providedIn: 'root'})
export class ElasticsearchService {

  private elasticSearchStudyCharacteristicsUrl = environment.elasticSearchStudyCharacteristicsUrl;
  private elasticSearchSpecificStudyUrl = environment.elasticSearchSpecificStudyUrl;
  private elasticSearchViaPublishedPaperUrl = environment.elasticSearchViaPublishedPaperUrl;
  private elasticSearchSelectedStudyUrl = environment.elasticSearchSelectedStudyUrl;

  private elasticSearchAllStudyCharacteristicsUrl = environment.elasticSearchAllStudyCharacteristicsUrl;
  private elasticSearchAllSpecificStudyUrl = environment.elasticSearchAllSpecificStudyUrl;
  private elasticSearchAllViaPublishedPaperUrl = environment.elasticSearchAllViaPublishedPaperUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  getElasticSelectedStudy(id: number){
    return this.http.post<Study>(environment.hostname + this.elasticSearchSelectedStudyUrl, {study_id: id});
  }

  getElasticSpecificStudy(searchBody: object){
    return this.http.post<SearchResponseInterface>(environment.hostname + this.elasticSearchSpecificStudyUrl, searchBody);
  }

  getElasticStudyCharacteristics(searchBody: object){
    return this.http.post<SearchResponseInterface>(environment.hostname + this.elasticSearchStudyCharacteristicsUrl, searchBody);
  }

  getElasticViaPublishedPaper(searchBody: object){
    return this.http.post<SearchResponseInterface>(environment.hostname + this.elasticSearchViaPublishedPaperUrl, searchBody);
  }

  getElasticAllStudyCharacteristics(searchBody: object){
    return this.http.post<Study[]>(environment.hostname + this.elasticSearchAllStudyCharacteristicsUrl, searchBody);
  }

  getElasticAllViaPublishedPaper(searchBody: object){
    return this.http.post<Study[]>(environment.hostname + this.elasticSearchAllViaPublishedPaperUrl, searchBody);
  }

  getElasticAllSpecificStudy(searchBody: object){
    return this.http.post<Study[]>(environment.hostname + this.elasticSearchAllSpecificStudyUrl, searchBody);
  }

}
