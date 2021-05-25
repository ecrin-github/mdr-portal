import {Injectable} from '@angular/core';
import {QueryBuilderService} from '../elasticsearch/query-builder.service';
import {ElasticsearchService} from '../elasticsearch/elasticsearch.service';


@Injectable({providedIn: 'root'})
export class SearchService {

  constructor(
    private esQueryBuilder: QueryBuilderService,
    private elasticsearchService: ElasticsearchService,
  ) {
  }

  pagination(searchType: string, searchBody: object, page: number, pageSize: number) {

    searchBody['filters'] =  this.esQueryBuilder.buildElasticFiltersQuery();
    searchBody['page_size'] = pageSize;
    searchBody['page'] = page;

    if (searchType === 'study_characteristics') {

      return this.elasticsearchService.getElasticStudyCharacteristics(searchBody);

    } else if (searchType === 'specific_study') {

      return this.elasticsearchService.getElasticSpecificStudy(searchBody);

    } else if (searchType === 'via_published_paper') {

      return this.elasticsearchService.getElasticViaPublishedPaper(searchBody);

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
