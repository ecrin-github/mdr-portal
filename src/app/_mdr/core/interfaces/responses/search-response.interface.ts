import { Study } from './../dto/study.interface';


export interface SearchResponseInterface {
  total: number;
  current_page: number;
  size: number;
  data: Array<Study> | [];
}
