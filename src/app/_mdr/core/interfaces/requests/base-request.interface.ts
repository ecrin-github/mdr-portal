export interface FiltersList {
    studyFilters: Array<any>;
    objectFilters: Array<any>;
}


export interface BaseRequestInterface {
    page?: number;
    size?: number;
    filters?: FiltersList;
}
