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

    onPageChecker(total: number, pageIndex: number, pageSize: number): number {
        let onPage = pageSize * (pageIndex + 1);
        if (total < onPage) {
            onPage = total;
        }
        return onPage;
    }

    startFromChecker(onPage: number, pageSize: number): number {
        let startFrom = onPage - pageSize + 1;
        if (startFrom < 0) {
            startFrom = 1;
        }
        return startFrom;
    }

}
