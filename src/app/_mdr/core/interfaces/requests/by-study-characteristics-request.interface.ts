import {BaseRequestInterface} from './base-request.interface';

export interface ByStudyCharacteristicsRequestInterface extends BaseRequestInterface {
    titleContains: string;
    logicalOperator: string;
    topicsInclude?: string;
}
