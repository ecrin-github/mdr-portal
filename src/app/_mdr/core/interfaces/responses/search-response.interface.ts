import { Study } from '../entities/study.interface';


export interface SearchResponseInterface {
  total: number;
  page?: number;
  size?: number;
  data: Array<Study> | [];
}
