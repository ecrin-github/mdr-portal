import {Study} from '../entities/study.interface';
import {RawQueryInterface} from '../requests/raw-query.interface';


export interface SearchEvent {
  searchType: string;
  searchBody: RawQueryInterface;
}

export interface SessionData {
  searchType: string;
  searchBody: RawQueryInterface;
  filters: Array<any>;
}

export interface SessionRecord {
  name: string;
  data: SessionData;
}

export interface SearchParams {
  pageIndex: number;
  pageSize: number;
  loading: boolean;
  dataSources: Array<Study> | [];
  total: number;
  searchType: string;
  searchBody: RawQueryInterface;
}
