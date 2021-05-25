import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SessionData, SessionRecord} from '../../../../../../_mdr/core/interfaces/states/session.interface';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {FileSaverService} from 'ngx-filesaver';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SubscriptionEvents} from '../../../../../../_mdr/core/states/subscription-events';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
})
export class SaveModalComponent implements OnInit {

  @ViewChild('sessionName') sessionName: any;
  public defaultSessionName = '';

  public errorMessage: string;

  public searchType: string;
  public searchBody: object;

  public sessionData: SessionData;
  public sessionDataObject: SessionRecord;

  constructor(
    private statesService: StatesService,
    private subscriptionEvents: SubscriptionEvents,
    private fileSaver: FileSaverService,
    public activeModal: NgbActiveModal,
    public snackBar: MatSnackBar,
    private ref: ChangeDetectorRef,
    public translate: TranslateService,
  ) {
    ref.detach();

    setInterval(() => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    }, 1);
  }

  buildStateSessionObject(sessionName: string) {
    this.sessionData = {
      search_type: this.searchType,
      search_body: this.searchBody,
      filters: this.statesService.getFiltersList()
    };
    return this.sessionDataObject = {
      name: sessionName,
      data: this.sessionData
    };
  }

  saveSession() {

    let message = '';
    let close = '';

    if (!this.statesService.getIsCleared()) {

      if (this.sessionName !== undefined) {
        const sessionName = this.sessionName.nativeElement.value;
        if (sessionName === '') {
          this.errorMessage = 'Please fill this field up.';
        } else {

          this.statesService.addSessionsList(this.buildStateSessionObject(sessionName));

          this.subscriptionEvents.sendSessionListUpdateEvent();

          message = 'Session has been saved';
          close = 'Close';

          this.snackBar.open(message, close, {
            duration: 5000
          });

          this.closeModal();
        }
      } else {
        this.errorMessage = 'Field is undefined.';
      }
    } else {
      this.translate.get('MODALS.MESSAGES.EMPTY-SESSION').subscribe((translation: string) => {
        message = translation;
      });
      this.translate.get('SNACKBAR.CLOSE').subscribe((translation: string) => {
        close = translation;
      });

      this.snackBar.open(message, close, {
        duration: 5000
      });
    }

  }

  downloadSession(format: string) {

    let message = '';
    let close = '';

    if (!this.statesService.getIsCleared()) {

      let filename: string;

      filename = 'Session Storage - ' + Date.now() + '.' + format;
      const fileType = this.fileSaver.genType(filename);
      const blob = new Blob([JSON.stringify(this.buildStateSessionObject(filename))], {type: fileType});
      this.fileSaver.save(blob, filename);

      this.translate.get('MODALS.MESSAGES.DOWNLOADED').subscribe((translation: string) => {
        message = translation;
      });
      this.translate.get('SNACKBAR.CLOSE').subscribe((translation: string) => {
        close = translation;
      });

      this.snackBar.open(message, close, {
        duration: 5000
      });

      this.closeModal();

    } else {
      this.translate.get('MODALS.MESSAGES.EMPTY-SESSION').subscribe((translation: string) => {
        message = translation;
      });
      this.translate.get('SNACKBAR.CLOSE').subscribe((translation: string) => {
        close = translation;
      });

      this.snackBar.open(message, close, {
        duration: 5000
      });
    }
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
    this.searchType = this.statesService.getSearchEvent().searchType;
    this.searchBody = this.statesService.getSearchEvent().searchBody;
    this.errorMessage = '';
    if (this.sessionName !== undefined) {
      this.sessionName.nativeElement.value = '';
    }
  }

}
