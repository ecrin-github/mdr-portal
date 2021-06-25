import { Study } from '../entities/study.interface';
import {BaseResponseInterface} from './base-response.interface';


export interface ResponseInterface extends BaseResponseInterface {
  data: Array<Study> | [];
}

export interface SingleStudyResponseInterface {
  data: Array<Study> | [];
}
