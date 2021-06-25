import {BaseSearchBody} from './base-search-body';

export interface ViaPublishedPaperSearchBody extends BaseSearchBody {
    searchType: string;
    searchValue: string;
}
