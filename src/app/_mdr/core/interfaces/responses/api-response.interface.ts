import { Study } from './../dto/study.interface';


export interface ElasticResponseInterface {
  total: number;
  data: Array<Study> | [];
}

export interface RestApiResponseInterface {
  total: number;
  current_page: number;
  size: number;
  data: Array<Study> | [];
}

export interface SelectedStudyApiInterface {
  data: Array<Study> | [];
}
