import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {StatesService} from '../../../core/services/state/states.service';
import {SubscriptionEvents} from '../../../core/states/subscription-events';
import {SearchService} from '../../../core/services/search/search.service';
import {PageEvent} from '@angular/material/paginator';
import {Observable, Subscription} from 'rxjs';
import {FiltersListComponent} from './filters-list/filters-list.component';
import {QueryResponseInterface} from '../../../core/interfaces/responses/api-response.interface';
import {Study} from '../../../core/interfaces/entities/study.interface';


@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageContentComponent implements OnInit {

  public fetchedData: Array<any>;

  public loading: boolean;

  public total: number;
  public onPage: number;
  public startFrom: number;

  public pageSize: number;
  public pageIndex: number;
  public pageSizeOptions = [10, 25, 50, 100];
  public pageSlice: Array<Study> = [];

  public searchType: string;
  public searchBody: any;

  clearEventSubscription: Subscription;
  isFilteredEventSubscription: Subscription;
  clearFilterEventSubscription: Subscription;
  sessionDataUploadingEventSubscription: Subscription;

  constructor(
    private route: Router,
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    private ref: ChangeDetectorRef,
    private statesService: StatesService,
    private subscriptionEvents: SubscriptionEvents,
    private searchService: SearchService,
    private filtersListComponent: FiltersListComponent,
  ) {
    ref.detach();
    this.clearEventSubscription = this.subscriptionEvents.getClearEventSubject().subscribe(() => {
      this.onClearData();
    });
    this.isFilteredEventSubscription = this.subscriptionEvents.getFilterEventSubject().subscribe(() => {
      this.getFilteredData();
    });
    this.clearFilterEventSubscription = this.subscriptionEvents.getClearFilterEvent().subscribe(() => {
      if (!this.statesService.getIsCleared()) {
        this.onClearFiltersListener();
      }
    });
    this.sessionDataUploadingEventSubscription = this.subscriptionEvents.getSessionUploadingEvent().subscribe(() => {
      this.onUploadingSession();
    });
    setInterval(() => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    }, 1);
  }

  onClearBeforeSearch() {

    this.filtersListComponent.clearAll();

    this.fetchedData = [];
    this.pageSlice = [];
    this.total = undefined;
    this.pageSize = 10;
    this.pageIndex = 0;
    this.loading = false;

  }

  showSearchResults(searchResults: Observable<any>){
    this.loading = true;
    if (searchResults !== null) {
      searchResults.subscribe(
        (data: QueryResponseInterface) => {
          this.pageSlice = data.data;
          this.total = data.total;
          this.onPage = this.searchService.onPageChecker(this.total, this.pageIndex, this.pageSize);
          this.startFrom = this.searchService.startFromChecker(this.onPage, this.pageSize);
          this.loading = false;
        },
        error => {
          this.route.navigate(['error/server-error']);
        }
      );
    }
  }

  onUploadingSession() {
    const searchStateData = this.statesService.getSessionData();

    this.statesService.setIsCleared(false);

    this.searchType = searchStateData.searchType;
    this.searchBody = searchStateData.searchBody;

    this.pageSize = searchStateData.searchBody.size;
    this.pageIndex = searchStateData.searchBody.page;

    if (this.statesService.getFiltersList().length > 0) {
      this.statesService.setIsFiltered(true);
    } else {
      this.statesService.setIsFiltered(false);
    }

    this.statesService.setSearchEvent({searchType: this.searchType, searchBody: this.searchBody});

    this.showSearchResults(this.searchService.pagination(
      this.searchType,
      this.searchBody
    ));

  }

  onSearch($event: any){

    this.statesService.clearSearchAndUpload();
    this.onClearBeforeSearch();

    this.searchType = $event[0]['model'];

    this.statesService.setIsCleared(false);
    this.loading = true;

    if (!this.statesService.getIsCleared()) {
      if (this.searchType === 'study_characteristics') {

        this.searchBody = {
          page: this.pageIndex,
          size: this.pageSize,
          titleContains: $event[1]['viewModel'],
          logicalOperator: $event[2]['model'],
          topicsInclude: $event[3]['viewModel']
        };

      } else if (this.searchType === 'specific_study') {

        this.searchBody = {
          searchType: parseInt($event[1]['model'], 10),
          searchValue: $event[2]['viewModel'],
          page: this.pageIndex,
          size: this.pageSize,
        };

      } else if (this.searchType === 'via_published_paper') {

        this.searchBody = {
          searchType: $event[1]['model'],
          searchValue: $event[2]['viewModel'],
          page: this.pageIndex,
          size: this.pageSize,
        };
      }

      this.statesService.setSearchEvent({searchType: this.searchType, searchBody: this.searchBody});

      this.showSearchResults(this.searchService.pagination(
        this.searchType,
        this.searchBody
      ));

    } else {
      let message = '';
      let close = '';

      this.onClearBeforeSearch();
      this.pageIndex = 0;
      this.pageSize = 10;

      this.translate.get('SNACKBAR.SEARCH.ERROR-MESSAGE').subscribe((translation: string) => {
        message = translation;
      });
      this.translate.get('SNACKBAR.CLOSE').subscribe((translation: string) => {
        close = translation;
      });

      // @ts-ignore
      this.snackBar.open(message, close, {
        duration: 5000
      });
    }

    if (this.searchBody === null || this.searchBody === undefined) {
      let message = '';
      let close = '';

      this.onClearBeforeSearch();
      this.pageIndex = 0;
      this.pageSize = 10;

      this.translate.get('SNACKBAR.SEARCH.ERROR-MESSAGE').subscribe((translation: string) => {
        message = translation;
      });
      this.translate.get('SNACKBAR.CLOSE').subscribe((translation: string) => {
        close = translation;
      });

      // @ts-ignore
      this.snackBar.open(message, close, {
        duration: 5000
      });
    }
  }

  getFilteredData(){

    this.pageIndex = 0;
    this.pageSize = 10;

    if (!this.statesService.getIsCleared()) {

      this.searchBody.page = this.pageIndex;
      this.searchBody.size = this.pageSize;
      
      this.showSearchResults(this.searchService.pagination(this.searchType,
        this.searchBody));

    }
  }

  onClearFiltersListener(){

    this.statesService.setIsFiltered(false);
    this.pageIndex = 0;
    this.pageSize = 10;

    if (!this.statesService.getIsCleared()) {
      this.showSearchResults(this.searchService.pagination(this.searchType,
        this.searchBody));
    }
  }


  setInitialSearchParams() {
    const initialSearchParams = this.statesService.getInitialSearchParams();
    this.pageIndex = initialSearchParams.pageIndex;
    this.pageSize = initialSearchParams.pageSize;
    this.loading = initialSearchParams.loading;
    this.fetchedData = initialSearchParams.dataSources;
    this.pageSlice = initialSearchParams.dataSources;
    this.total = initialSearchParams.total;
    this.searchType = initialSearchParams.searchType;
    this.searchBody = initialSearchParams.searchBody;
  }


  onClearData() {

    this.setInitialSearchParams();

    this.statesService.setIsCleared(true);
    this.statesService.setIsFiltered(false);

    this.statesService.clearFilters();
    this.filtersListComponent.clearAll();

  }

  onPageChange(event: PageEvent){

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    if (!this.statesService.getIsCleared()) {

      this.searchBody.page = this.pageIndex;
      this.searchBody.size = this.pageSize;

      this.showSearchResults(this.searchService.pagination(this.searchType,
        this.searchBody));

    }
  }

  ngOnInit(): void {
    this.setInitialSearchParams();
  }
}
