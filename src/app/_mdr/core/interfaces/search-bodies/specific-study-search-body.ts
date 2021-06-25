import {BaseSearchBody} from './base-search-body';

export interface SpecificStudySearchBody extends BaseSearchBody {
    searchType: number;
    searchValue: string;
}
