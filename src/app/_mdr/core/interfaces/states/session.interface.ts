export interface SessionDataInterface {
  searchType: string;
  searchBody: object;
  filters?: Array<any>;
}

export interface SessionRecordInterface {
  id: number;
  name: string;
  data: SessionDataInterface;
}
