import {Injectable} from '@angular/core';
import {QueryBuilderService} from '../elasticsearch/query-builder.service';
import {QueryService} from '../elasticsearch/query.service';
import {RawQueryInterface} from '../../interfaces/requests/raw-query.interface';
import {ByStudyCharacteristicsRequestInterface} from '../../interfaces/requests/by-study-characteristics-request.interface';
import {SpecificStudyRequestInterface} from '../../interfaces/requests/specific-study-request.interface';
import {ViaPublishedPaperRequestInterface} from '../../interfaces/requests/via-published-paper-request.interface';


@Injectable({providedIn: 'root'})
export class SearchService {

  constructor(
    private esQueryBuilder: QueryBuilderService,
    private queryService: QueryService,
  ) {
  }

  pagination(searchType: string, searchBody: any) {

    if (searchType === 'study_characteristics') {

      const searchParams: ByStudyCharacteristicsRequestInterface = {
        page: searchBody.page,
        size: searchBody.size,
        topicsInclude: searchBody.topicsInclude,
        logicalOperator: searchBody.logicalOperator,
        titleContains: searchBody.titleContains
      };
      const queryBody: RawQueryInterface = {
        page: searchBody.page,
        size: searchBody.size,
        elasticQuery: this.esQueryBuilder.buildByStudyCharacteristicsQuery(searchParams)
      };
      return this.queryService.getRawQueryStudies(queryBody);

    } else if (searchType === 'specific_study') {

      const searchParams: SpecificStudyRequestInterface = {
        page: searchBody.page,
        size: searchBody.size,
        searchType: searchBody.searchType,
        searchValue: searchBody.searchValue,
      };
      const queryBody: RawQueryInterface = {
        page: searchBody.page,
        size: searchBody.size,
        elasticQuery: this.esQueryBuilder.buildSpecificStudyQuery(searchParams)
      };

      return this.queryService.getRawQueryStudies(queryBody);

    } else if (searchType === 'via_published_paper') {

      const searchParams: ViaPublishedPaperRequestInterface = {
        page: searchBody.page,
        size: searchBody.size,
        searchType: searchBody.searchType,
        searchValue: searchBody.searchValue,
      };
      const queryBody: RawQueryInterface = {
        page: searchBody.page,
        size: searchBody.size,
        elasticQuery: this.esQueryBuilder.buildViaPublishedPaperQuery(searchParams)
      };

      return this.queryService.getRawQueryObjects(queryBody);

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
