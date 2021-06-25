import {BaseRequestInterface} from './base-request.interface';

export interface ViaPublishedPaperRequestInterface extends BaseRequestInterface {
    searchType: string;
    searchValue: string;
}
