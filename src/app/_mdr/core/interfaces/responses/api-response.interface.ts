import { Study } from '../entities/study.interface';


export interface QueryResponseInterface {
  total: number;
  page?: number;
  size?: number;
  data: Array<Study> | [];
}

export interface SelectedStudyResponseInterface {
  data: Array<Study> | [];
}
