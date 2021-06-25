import {Injectable} from '@angular/core';
import {QueryBuilderService} from '../elasticsearch/query-builder.service';
import {QueryService} from '../elasticsearch/query.service';
import {RawQueryInterface} from '../../interfaces/requests/raw-query.interface';
import {ByStudyCharacteristicsRequestInterface} from '../../interfaces/requests/by-study-characteristics-request.interface';
import {SpecificStudyRequestInterface} from '../../interfaces/requests/specific-study-request.interface';
import {ViaPublishedPaperRequestInterface} from '../../interfaces/requests/via-published-paper-request.interface';
import {SearchParamsInterface} from '../../interfaces/search-params/search-params.interface';


@Injectable({providedIn: 'root'})
export class SearchService {

  constructor(
    private queryBuilder: QueryBuilderService,
    private queryService: QueryService,
  ) {
  }

  searchByStudyCharacteristics(queryParams: ByStudyCharacteristicsRequestInterface) {
    const queryBody: RawQueryInterface = {
      page: queryParams.page,
      size: queryParams.size,
      elasticQuery: this.queryBuilder.buildByStudyCharacteristicsQuery(queryParams)
    };
    return this.queryService.getRawQueryStudies(queryBody);
  }

  searchSpecificStudy(searchParams: SpecificStudyRequestInterface) {
    const queryBody: RawQueryInterface = {
      page: searchParams.page,
      size: searchParams.size,
      elasticQuery: this.queryBuilder.buildSpecificStudyQuery(searchParams)
    };

    return this.queryService.getRawQueryStudies(queryBody);
  }

  searchViaPublishedPaper(searchParams: ViaPublishedPaperRequestInterface) {
    const queryBody: RawQueryInterface = {
      page: searchParams.page,
      size: searchParams.size,
      elasticQuery: this.queryBuilder.buildViaPublishedPaperQuery(searchParams)
    };

    return this.queryService.getRawQueryObjects(queryBody);
  }


  pagination(searchParams: SearchParamsInterface) {

    if (searchParams.searchType === 'study_characteristics') {

      const queryParams: ByStudyCharacteristicsRequestInterface = {
        page: searchParams.searchBody.page,
        size: searchParams.searchBody.size,
        topicsInclude: searchParams.searchBody.topicsInclude,
        logicalOperator: searchParams.searchBody.logicalOperator,
        titleContains: searchParams.searchBody.titleContains
      };

      return this.searchByStudyCharacteristics(queryParams);

    } else if (searchParams.searchType === 'specific_study') {

      const queryParams: SpecificStudyRequestInterface = {
        page: searchParams.searchBody.page,
        size: searchParams.searchBody.size,
        searchType: searchParams.searchBody.searchType,
        searchValue: searchParams.searchBody.searchValue,
      };
      return this.searchSpecificStudy(queryParams);

    } else if (searchParams.searchType === 'via_published_paper') {

      const queryParams: ViaPublishedPaperRequestInterface = {
        page: searchParams.searchBody.page,
        size: searchParams.searchBody.size,
        searchType: searchParams.searchBody.searchType,
        searchValue: searchParams.searchBody.searchValue,
      };
      return this.searchViaPublishedPaper(queryParams);

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
