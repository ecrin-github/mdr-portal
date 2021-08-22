import {Injectable} from '@angular/core';
import {FiltersBuilderService} from '../filters-builder/filters-builder.service';
import {ByStudyCharacteristicsRequestInterface} from '../../interfaces/requests/by-study-characteristics-request.interface';
import {SearchParamsInterface} from '../../interfaces/search-params/search-params.interface';
import {SpecificStudyRequestInterface} from '../../interfaces/requests/specific-study-request.interface';
import {ViaPublishedPaperRequestInterface} from '../../interfaces/requests/via-published-paper-request.interface';


@Injectable({providedIn: 'root'})
export class QueryBuilderService {

    constructor(
        private filtersBuilderService: FiltersBuilderService
    ) {}


    studyCharacteristicsBuilder(searchParams: SearchParamsInterface): ByStudyCharacteristicsRequestInterface {
        return {
            page: searchParams.searchBody.page,
            size: searchParams.searchBody.size,
            filters: this.filtersBuilderService.filtersBuilder(),
            topicsInclude: searchParams.searchBody.topicsInclude,
            logicalOperator: searchParams.searchBody.logicalOperator,
            titleContains: searchParams.searchBody.titleContains
        };
    }


    specificStudyBuilder(searchParams: SearchParamsInterface): SpecificStudyRequestInterface {
        return {
            page: searchParams.searchBody.page,
            size: searchParams.searchBody.size,
            filters: this.filtersBuilderService.filtersBuilder(),
            searchType: searchParams.searchBody.searchType,
            searchValue: searchParams.searchBody.searchValue,
        };
    }


    viaPublishedPaperBuilder(searchParams: SearchParamsInterface): ViaPublishedPaperRequestInterface {
        return {
            page: searchParams.searchBody.page,
            size: searchParams.searchBody.size,
            filters: this.filtersBuilderService.filtersBuilder(),
            searchType: searchParams.searchBody.searchType,
            searchValue: searchParams.searchBody.searchValue,
        };
    }

}
