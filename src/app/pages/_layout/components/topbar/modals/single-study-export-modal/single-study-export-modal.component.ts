import {Component, OnInit} from '@angular/core';
import {PdfService} from '../../../../../../_mdr/core/services/portal/pdf.service';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FileSaverService} from 'ngx-filesaver';
import {SnackbarService} from '../../../../../../_mdr/core/services/snackbar/snackbar.service';


@Component({
  selector: 'app-single-study-export-modal',
  templateUrl: './single-study-export-modal.component.html',
})
export class SingleStudyExportModalComponent implements OnInit {

  constructor(
    private pdfService: PdfService,
    private statesService: StatesService,
    private fileSaver: FileSaverService,
    public activeModal: NgbActiveModal,
    private snackbarService: SnackbarService,
  ) {
  }

  generateJson() {

    if (this.statesService.getSingleStudy()) {

      const studyData = this.statesService.getSingleStudy();

      const filename = studyData.displayTitle + '.json';

      const fileType = this.fileSaver.genType(filename);
      const blob = new Blob([JSON.stringify(studyData)], {type: fileType});
      this.fileSaver.save(blob, filename);

      this.closeModal();

    } else {
      this.snackbarService.snackbarTranslateMessage('MODALS.MESSAGES.NO-STUDY', 'SNACKBAR.CLOSE');
    }
  }

  generatePdf(){

    if (this.statesService.getSingleStudy()) {
      this.pdfService.singleStudyPDFGenerator(this.statesService.getSingleStudy());
      this.closeModal();
    } else {
      this.snackbarService.snackbarTranslateMessage('MODALS.MESSAGES.NO-STUDY', 'SNACKBAR.CLOSE');
    }
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
  }

}
