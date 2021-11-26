import {FiltersRequestInterface} from '../filters/filters.interface';

export interface BaseRequestInterface {
    page?: number;
    size?: number;
    filters?: FiltersRequestInterface;
}
