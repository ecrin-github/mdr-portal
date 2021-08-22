import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SessionDataInterface, SessionRecordInterface} from '../../../../../../_mdr/core/interfaces/states/session.interface';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {FileSaverService} from 'ngx-filesaver';
import {SubscriptionEvents} from '../../../../../../_mdr/core/states/subscription-events';
import {RawQueryInterface} from '../../../../../../_mdr/core/interfaces/requests/raw-query.interface';
import {SnackbarService} from '../../../../../../_mdr/core/services/snackbar/snackbar.service';


@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
})
export class SaveModalComponent implements OnInit {

  @ViewChild('sessionName') sessionName: any;
  public defaultSessionName = '';

  public errorMessage: string;

  public searchType: string;
  public searchBody: RawQueryInterface;

  public sessionData: SessionDataInterface;
  public sessionDataObject: SessionRecordInterface;

  constructor(
    private statesService: StatesService,
    private subscriptionEvents: SubscriptionEvents,
    private fileSaver: FileSaverService,
    public activeModal: NgbActiveModal,
    private ref: ChangeDetectorRef,
    private snackbarService: SnackbarService,
  ) {
    ref.detach();

    setInterval(() => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    }, 1);
  }

  buildStateSessionObject(sessionName: string) {
    let id = 1;
    const sessionsList = this.statesService.sessionsList;
    if (sessionsList.length > 0) {
      const lastElement = sessionsList[sessionsList.length - 1];
      id = lastElement.id + 1;
    }
    const currentSearchParams = this.statesService.searchParams;
    this.searchType = currentSearchParams.searchType;
    this.searchBody = currentSearchParams.searchBody;
    this.sessionData = {
      searchType: this.searchType,
      searchBody: this.searchBody,
      filters: this.statesService.filtersList
    };
    return this.sessionDataObject = {
      id,
      name: sessionName,
      data: this.sessionData
    };
  }

  saveSession() {

    if (!this.statesService.isCleared) {

      if (this.sessionName !== null && this.sessionName !== undefined) {
        const sessionName = this.sessionName.nativeElement.value;
        if ((sessionName !== null && sessionName !== undefined) && sessionName === '') {
          this.errorMessage = 'Please fill up this field.';
        } else {
          this.statesService.appendToSessionsList(this.buildStateSessionObject(sessionName));
          this.subscriptionEvents.sendSessionListUpdateEvent();
          this.snackbarService.snackbarMessage('Session has been saved', 'Close');
          this.closeModal();
        }
      } else {
        this.errorMessage = 'Field is empty or undefined.';
      }
    } else {
      this.snackbarService.snackbarTranslateMessage('MODALS.MESSAGES.EMPTY-SESSION', 'SNACKBAR.CLOSE');
    }
  }

  downloadSession(format: string) {

    if (!this.statesService.isCleared) {

      let filename: string;

      filename = 'Session Storage - ' + Date.now() + '.' + format;
      const fileType = this.fileSaver.genType(filename);
      const blob = new Blob([JSON.stringify(this.buildStateSessionObject(filename))], {type: fileType});
      this.fileSaver.save(blob, filename);

      this.snackbarService.snackbarTranslateMessage('MODALS.MESSAGES.DOWNLOADED', 'SNACKBAR.CLOSE');

      this.closeModal();

    } else {
      this.snackbarService.snackbarTranslateMessage('MODALS.MESSAGES.EMPTY-SESSION', 'SNACKBAR.CLOSE');
    }
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
    this.searchType = this.statesService.searchParams.searchType;
    this.searchBody = this.statesService.searchParams.searchBody;
    this.errorMessage = '';
    if (this.sessionName !== undefined) {
      this.sessionName.nativeElement.value = '';
    }
  }

}
