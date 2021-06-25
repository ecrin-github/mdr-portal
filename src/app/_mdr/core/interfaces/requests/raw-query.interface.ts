import {BaseRequestInterface} from './base-request.interface';

export interface RawQueryInterface extends BaseRequestInterface {
    elasticQuery: object;
}
