import {BaseRequestInterface} from './base-request.interface';

export interface SpecificStudyRequestInterface extends BaseRequestInterface {
    searchType: number;
    searchValue: string;
}
