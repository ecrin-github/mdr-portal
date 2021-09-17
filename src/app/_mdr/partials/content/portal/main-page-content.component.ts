import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StatesService} from '../../../core/services/state/states.service';
import {SubscriptionEvents} from '../../../core/states/subscription-events';
import {PageEvent} from '@angular/material/paginator';
import {Observable, Subscription} from 'rxjs';
import {FiltersListComponent} from './filters-list/filters-list.component';
import {ResponseInterface} from '../../../core/interfaces/responses/server-response.interface';
import {Study} from '../../../core/interfaces/entities/study.interface';
import {SnackbarService} from '../../../core/services/snackbar/snackbar.service';
import {QueryApiService} from '../../../core/services/query-api/query-api.service';
import {PaginationService} from '../../../core/services/pagination/pagination.service';


@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageContentComponent implements OnInit {

  public fetchedData: Array<any>;

  public loading: boolean;

  public total: number;
  public startOnPage: number;
  public endOnPage: number;

  public pageSize: number;
  public pageIndex: number;
  public pageSizeOptions = [5, 10, 15, 20];
  public pageSlice: Array<Study> = [];

  public searchType: string;
  public searchBody: object;

  clearEventSubscription: Subscription;
  isFilteredEventSubscription: Subscription;
  clearFilterEventSubscription: Subscription;
  sessionDataUploadingEventSubscription: Subscription;

  constructor(
    private route: Router,
    private snackbarService: SnackbarService,
    private ref: ChangeDetectorRef,
    private statesService: StatesService,
    private subscriptionEvents: SubscriptionEvents,
    private queryApiService: QueryApiService,
    private filtersListComponent: FiltersListComponent,
    private paginationService: PaginationService,
  ) {
    ref.detach();
    this.clearEventSubscription = this.subscriptionEvents.getClearEventSubject().subscribe(() => {
      this.onClearData();
    });
    this.isFilteredEventSubscription = this.subscriptionEvents.getFilterEventSubject().subscribe(() => {
      this.getFilteredData();
    });
    this.clearFilterEventSubscription = this.subscriptionEvents.getClearFilterEvent().subscribe(() => {
      if (!this.statesService.isCleared) {
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
    if (searchResults !== null && searchResults !== undefined) {
      searchResults.subscribe(
        (data: ResponseInterface) => {
          this.pageSlice = data.data;
          this.total = data.total;
          this.endOnPage = this.paginationService.endOnPageChecker(this.total, this.pageIndex, this.pageSize);
          this.startOnPage = this.paginationService.startOnPageChecker(this.total, this.pageIndex, this.pageSize);
          this.loading = false;
        },
        error => {
          this.route.navigate(['error/server-error']);
        }
      );
    }
  }

  onUploadingSession() {
    this.statesService.isCleared = false;

    this.searchType = this.statesService.activeSession.searchType;
    this.searchBody = this.statesService.activeSession.searchBody;

    this.pageSize = this.statesService.activeSession.searchBody['size'];
    this.pageIndex = this.statesService.activeSession.searchBody['page'];

    if (this.statesService.filtersList.length > 0) {
      this.statesService.isFiltered = true;
    } else {
      this.statesService.isFiltered  = false;
    }

    this.statesService.searchParams = {searchType: this.searchType, searchBody: this.searchBody};

    this.showSearchResults(this.paginationService.pagination({
      searchType: this.searchType,
      searchBody: this.searchBody
    }));

  }

  onSearch($event: any){

    this.statesService.clearSearchAndUpload();
    this.onClearBeforeSearch();

    this.searchType = $event[0]['model'];

    this.statesService.isCleared = false;
    this.loading = true;

    if (!this.statesService.isCleared) {
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

      this.statesService.searchParams = {searchType: this.searchType, searchBody: this.searchBody};

      this.showSearchResults(this.paginationService.pagination({
        searchType: this.searchType,
        searchBody: this.searchBody
      }));

    } else {

      this.onClearBeforeSearch();
      this.pageIndex = 0;
      this.pageSize = 10;

      this.snackbarService.snackbarTranslateMessage('SNACKBAR.SEARCH.ERROR-MESSAGE',
          'SNACKBAR.CLOSE');

    }

    if (this.searchBody === null || this.searchBody === undefined) {

      this.onClearBeforeSearch();
      this.pageIndex = 0;
      this.pageSize = 10;

      this.snackbarService.snackbarTranslateMessage('SNACKBAR.SEARCH.ERROR-MESSAGE',
          'SNACKBAR.CLOSE');

    }
  }

  getFilteredData(){

    this.pageIndex = 0;
    this.pageSize = 10;

    if (!this.statesService.isCleared) {

      this.searchBody['page'] = this.pageIndex;
      this.searchBody['size'] = this.pageSize;

      this.showSearchResults(this.paginationService.pagination({
        searchType: this.searchType,
        searchBody: this.searchBody
      }));

    }
  }

  onClearFiltersListener(){

    this.statesService.isFiltered = false;
    this.pageIndex = 0;
    this.pageSize = 10;

    if (!this.statesService.isCleared) {
      this.showSearchResults(this.paginationService.pagination({
        searchType: this.searchType,
        searchBody: this.searchBody
      }));
    }
  }


  setInitialSearchParams() {
    this.pageIndex = 0;
    this.pageSize = 10;
    this.loading = false;
    this.fetchedData = [];
    this.pageSlice = [];
    this.total = undefined;
    this.searchType = null;
    this.searchBody = null;
  }


  onClearData() {

    this.setInitialSearchParams();

    this.statesService.isCleared = true;
    this.statesService.isFiltered = false;

    this.statesService.clearFilters();
    this.filtersListComponent.clearAll();

  }

  onPageChange(event: PageEvent){

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    if (!this.statesService.isCleared) {

      this.searchBody['page'] = this.pageIndex;
      this.searchBody['size'] = this.pageSize;

      this.showSearchResults(this.paginationService.pagination({
        searchType: this.searchType,
        searchBody: this.searchBody
      }));

    }
  }

  ngOnInit(): void {
    this.setInitialSearchParams();
  }
}
