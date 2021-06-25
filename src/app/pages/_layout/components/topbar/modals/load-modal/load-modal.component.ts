import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {SubscriptionEvents} from '../../../../../../_mdr/core/states/subscription-events';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';
import {SessionRecordInterface} from '../../../../../../_mdr/core/interfaces/states/session.interface';
import {SnackbarService} from '../../../../../../_mdr/core/services/snackbar/snackbar.service';


@Component({
  selector: 'app-load-modal',
  templateUrl: './load-modal.component.html',
})
export class LoadModalComponent implements OnInit {

  @ViewChild('sessionList') sessionListElement: any;

  public sessionsList: Array<SessionRecordInterface>;

  sessionUpdatingListEvent: Subscription;

  constructor(
    private subscriptionEvents: SubscriptionEvents,
    private statesService: StatesService,
    public activeModal: NgbActiveModal,
    private ref: ChangeDetectorRef,
    private snackbarService: SnackbarService,
  ) {
    ref.detach();
    this.sessionUpdatingListEvent = this.subscriptionEvents.getSessionListUpdateEvent().subscribe(() => {
      this.onUpdateSessionList();
    });
    setInterval(() => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    }, 1);
  }

  onUpdateSessionList() {
    this.sessionsList = this.statesService.getSessionsList();
  }

  uploadSession(fileList: FileList): void {

    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    let sessionData: SessionRecordInterface | any;

    fileReader.onload = (e) => {
      sessionData = fileReader.result;
      sessionData = JSON.parse(sessionData);

      try {

        this.statesService.setSessionsList(sessionData);
        this.statesService.setFiltersList(sessionData.data.filters);

        this.subscriptionEvents.sendSessionUploadingEvent();

        this.snackbarService.snackbarTranslateMessage('SNACKBAR.UPLOAD.SUCCESS-MESSAGE', 'SNACKBAR.CLOSE');

        this.closeModal();

      } catch (e) {
        this.snackbarService.snackbarTranslateMessage('MODALS.MESSAGES.EMPTY-SESSION', 'SNACKBAR.CLOSE');
      }

    };
    fileReader.readAsText(file);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSelectionChange(event: any) {
    const sessionData: SessionRecordInterface = event.option.value;
    this.statesService.setActiveSession(sessionData.data);
    this.statesService.setFiltersList(sessionData.data.filters);
    this.subscriptionEvents.sendSessionUploadingEvent();
    this.closeModal();
  }

  ngOnInit(): void {
    this.sessionsList = this.statesService.getSessionsList();
  }

}
