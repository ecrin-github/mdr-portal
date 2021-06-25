import {BaseSearchBody} from './base-search-body';

export interface StudyCharacteristicsSearchBody extends BaseSearchBody {
    titleContains: string;
    logicalOperator: string;
    topicsInclude: string;
}
