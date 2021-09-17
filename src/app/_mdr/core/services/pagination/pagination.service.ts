import {Injectable} from '@angular/core';
import {SearchParamsInterface} from '../../interfaces/search-params/search-params.interface';
import {QueryApiService} from '../query-api/query-api.service';
import {QueryBuilderService} from '../query-api/query-builder.service';


@Injectable({providedIn: 'root'})
export class PaginationService {

    constructor(
        private queryBuilderService: QueryBuilderService,
        private queryApiService: QueryApiService
    ) {
    }


    pagination(searchParams: SearchParamsInterface) {

        if (searchParams.searchType === 'study_characteristics') {

            return this.queryApiService.getByStudyCharacteristics(
                this.queryBuilderService.studyCharacteristicsBuilder(searchParams)
            );

        } else if (searchParams.searchType === 'specific_study') {

            return this.queryApiService.getSpecificStudy(
                this.queryBuilderService.specificStudyBuilder(searchParams)
            );

        } else if (searchParams.searchType === 'via_published_paper') {

            return this.queryApiService.getViaPublishedPaper(
                this.queryBuilderService.viaPublishedPaperBuilder(searchParams)
            );

        } else {
            return null;
        }
    }

    endOnPageChecker(total: number, pageIndex: number, pageSize: number): number {
        let endOnPage = pageSize * (pageIndex + 1);
        if (total < endOnPage) {
            endOnPage = total;
        }
        return endOnPage;
    }

    lastPageChecker(total: number, pageSize: number, page: number) {
        return (pageSize * page) > total;
    }

    startOnPageChecker(total: number, pageIndex: number, pageSize: number): number {
        let startFrom = 1;
        const currentPage = pageIndex + 1;
        if (pageIndex !== 0) {
            if (this.lastPageChecker(total, pageSize, currentPage)) {
                startFrom = currentPage * pageSize;
                if ((startFrom - total) > 1) {
                    startFrom = (startFrom + 1) - pageSize;
                }
            } else {
                startFrom = pageIndex * pageSize + 1;
            }
        }
        return startFrom;
    }

}
