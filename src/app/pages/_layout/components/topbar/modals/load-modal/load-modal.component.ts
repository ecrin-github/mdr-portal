import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SubscriptionEvents} from '../../../../../../_mdr/core/states/subscription-events';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-load-modal',
  templateUrl: './load-modal.component.html',
})
export class LoadModalComponent implements OnInit {

  @ViewChild('sessionList') sessionListElement: any;

  public sessionsList: Array<any>;

  sessionUpdatingListEvent: Subscription;

  constructor(
    public translate: TranslateService,
    private subscriptionEvents: SubscriptionEvents,
    private statesService: StatesService,
    public activeModal: NgbActiveModal,
    public snackBar: MatSnackBar,
    private ref: ChangeDetectorRef,
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

    let message = '';
    let close = '';

    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    let sessionData: any;

    fileReader.onload = (e) => {
      sessionData = fileReader.result;
      sessionData = JSON.parse(sessionData);

      try {

        this.statesService.setSessionData(sessionData);
        this.statesService.setFiltersList(sessionData['data']['filters']);

        this.translate.get('SNACKBAR.UPLOAD.SUCCESS-MESSAGE').subscribe((translation: string) => {
          message = translation;
        });
        this.translate.get('SNACKBAR.CLOSE').subscribe((translation: string) => {
          close = translation;
        });

        this.subscriptionEvents.sendSessionUploadingEvent();

        this.snackBar.open(message, close, {
          duration: 5000
        });

        this.closeModal();

      } catch (e) {
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

    };
    fileReader.readAsText(file);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSelectionChange(event: any, value: any) {
    const sessionData = event.option.value;
    this.statesService.setSessionData(sessionData);
    this.statesService.setFiltersList(sessionData['data']['filters']);
    this.subscriptionEvents.sendSessionUploadingEvent();
    this.closeModal();
  }

  ngOnInit(): void {
    this.sessionsList = this.statesService.getSessionsList();
  }

}
