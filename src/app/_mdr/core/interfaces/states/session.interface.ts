import {FilterSampleInterface} from '../filters/filter-sample.interface';

export interface SessionDataInterface {
  searchType: string;
  searchBody: object;
  filters?: FilterSampleInterface[];
}

export interface SessionRecordInterface {
  id: number;
  name: string;
  data: SessionDataInterface;
}
