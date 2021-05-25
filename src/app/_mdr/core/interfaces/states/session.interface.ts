export interface SessionData {
  search_type: string;
  search_body: object;
  filters: Array<any>;
}

export interface SessionRecord {
  name: string;
  data: SessionData;
}
