import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {SubscriptionEvents} from '../../../../core/states/subscription-events';
import {StatesService} from '../../../../core/services/state/states.service';


@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
})
export class SearchPanelComponent implements OnInit {

  @ViewChild('titleContains') titleContains: any;
  @ViewChild('topicIncludes') topicIncludes: any;
  @ViewChild('specificStudyValue') specificStudyValue: any;
  @ViewChild('viaPublishedPaperValue') viaPublishedPaperValue: any;

  @Output() search: EventEmitter<any> = new EventEmitter();

  selectedOption = 'study_characteristics';
  logicOperatorDefault = 'and';
  specificStudySelectDefault = '11';
  viaPublishedPaperSelectDefault = 'doi';

  clearEventSubscription: Subscription;
  sessionUploadEvent: Subscription;

  constructor(
    private statesFunctions: StatesService,
    private subscriptionEvents: SubscriptionEvents,
    private ref: ChangeDetectorRef,
  ) {
    ref.detach();
    this.clearEventSubscription = this.subscriptionEvents.getClearEventSubject().subscribe(() => {
      this.onClearSearchString();
    });
    this.sessionUploadEvent = this.subscriptionEvents.getSessionUploadingEvent().subscribe(() => {
      this.onSessionUpload();
    });
    setInterval(() => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    }, 1);
  }

  onSessionUpload() {
    const formData = this.statesFunctions.getSessionData();
    const searchType = formData['data']['search_type'];
    const searchBody = formData['data']['search_body'];

    if (searchType === 'study_characteristics') {
      if (this.titleContains !== undefined) {
        this.titleContains.nativeElement.value = searchBody['title_contains'];
      }

      if (this.topicIncludes !== undefined) {
        this.topicIncludes.nativeElement.value = searchBody['topics_include'];
      }
    } else if (searchType === 'specific_study') {
      if (this.specificStudyValue !== undefined) {
        this.specificStudyValue.nativeElement.value = searchBody['value'];
      }
    } else if (searchType === 'via_published_paper') {
      if (this.viaPublishedPaperValue !== undefined) {
        this.viaPublishedPaperValue.nativeElement.value = searchBody['value'];
      }
    }
  }

  onClearSearchString() {
    if (this.titleContains !== undefined) {
      this.titleContains.nativeElement.value = '';
    }

    if (this.topicIncludes !== undefined) {
      this.topicIncludes.nativeElement.value = '';
    }

    if (this.specificStudyValue !== undefined) {
      this.specificStudyValue.nativeElement.value = '';
    }

    if (this.viaPublishedPaperValue !== undefined) {
      this.viaPublishedPaperValue.nativeElement.value = '';
    }
  }

  onChangeSelectMode(value: string){
    this.selectedOption = value;
  }

  onSearch(searchData: NgForm){
    this.search.emit(searchData['_directives']);
  }

  ngOnInit(): void {
    this.onClearSearchString();
  }
}
