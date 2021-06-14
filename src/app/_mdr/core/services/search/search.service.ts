import {Injectable} from '@angular/core';
import {QueryBuilderService} from '../elasticsearch/query-builder.service';
import {QueryService} from '../elasticsearch/query.service';
import {RawQueryInterface} from '../../interfaces/requests/raw-query.interface';


@Injectable({providedIn: 'root'})
export class SearchService {

  constructor(
    private esQueryBuilder: QueryBuilderService,
    private queryService: QueryService,
  ) {
  }

  pagination(searchType: string, searchBody: RawQueryInterface) {

    if (searchType === 'study_characteristics' || searchType === 'specific_study') {

      return this.queryService.getRawQueryStudies(searchBody);

    } else if (searchType === 'via_published_paper') {

      return this.queryService.getRawQueryObjects(searchBody);

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
