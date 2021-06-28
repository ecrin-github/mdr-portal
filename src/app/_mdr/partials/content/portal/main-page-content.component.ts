import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StatesService} from '../../../core/services/state/states.service';
import {SubscriptionEvents} from '../../../core/states/subscription-events';
import {SearchService} from '../../../core/services/search/search.service';
import {PageEvent} from '@angular/material/paginator';
import {Observable, Subscription} from 'rxjs';
import {FiltersListComponent} from './filters-list/filters-list.component';
import {ResponseInterface} from '../../../core/interfaces/responses/server-response.interface';
import {Study} from '../../../core/interfaces/entities/study.interface';
import {SnackbarService} from '../../../core/services/snackbar/snackbar.service';


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
    if (searchResults !== null && searchResults !== undefined) {
      searchResults.subscribe(
        (data: ResponseInterface) => {
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
    const searchStateData = this.statesService.getActiveSession();

    this.statesService.setIsCleared(false);

    this.searchType = searchStateData.searchType;
    this.searchBody = searchStateData.searchBody;

    this.pageSize = searchStateData.searchBody['size'];
    this.pageIndex = searchStateData.searchBody['page'];

    if (this.statesService.getFiltersList().length > 0) {
      this.statesService.setIsFiltered(true);
    } else {
      this.statesService.setIsFiltered(false);
    }

    this.statesService.setSearchParams({searchType: this.searchType, searchBody: this.searchBody});

    this.showSearchResults(this.searchService.pagination({
      searchType: this.searchType,
      searchBody: this.searchBody
    }));

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

      this.statesService.setSearchParams({searchType: this.searchType, searchBody: this.searchBody});

      this.showSearchResults(this.searchService.pagination({
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

    if (!this.statesService.getIsCleared()) {

      this.searchBody['page'] = this.pageIndex;
      this.searchBody['size'] = this.pageSize;

      this.showSearchResults(this.searchService.pagination({
        searchType: this.searchType,
        searchBody: this.searchBody
      }));

    }
  }

  onClearFiltersListener(){

    this.statesService.setIsFiltered(false);
    this.pageIndex = 0;
    this.pageSize = 10;

    if (!this.statesService.getIsCleared()) {
      this.showSearchResults(this.searchService.pagination({
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

    this.statesService.setIsCleared(true);
    this.statesService.setIsFiltered(false);

    this.statesService.clearFilters();
    this.filtersListComponent.clearAll();

  }

  onPageChange(event: PageEvent){

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    if (!this.statesService.getIsCleared()) {

      this.searchBody['page'] = this.pageIndex;
      this.searchBody['size'] = this.pageSize;

      this.showSearchResults(this.searchService.pagination({
        searchType: this.searchType,
        searchBody: this.searchBody
      }));

    }
  }

  ngOnInit(): void {
    this.setInitialSearchParams();
  }
}
