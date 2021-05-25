import {Component, OnInit} from '@angular/core';
import {PdfService} from '../../../../../../_mdr/core/services/portal/pdf.service';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FileSaverService} from 'ngx-filesaver';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';


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
    public snackBar: MatSnackBar,
    public translate: TranslateService,
  ) {
  }

  generateJson() {

    let message = '';
    let close = '';

    if (this.statesService.getStudy()) {

      let filename: string;
      filename = 'Study.json';

      const studyData = this.statesService.getStudy();

      const fileType = this.fileSaver.genType(filename);
      const blob = new Blob([JSON.stringify(studyData)], {type: fileType});
      this.fileSaver.save(blob, filename);

      this.closeModal();

    } else {
      this.translate.get('MODALS.MESSAGES.NO-STUDY').subscribe((translation: string) => {
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

  generatePdf(){

    let message = '';
    let close = '';

    if (this.statesService.getStudy()) {
      this.pdfService.singleStudyPDFGenerator(this.statesService.getStudy());
      this.closeModal();
    } else {
      this.translate.get('MODALS.MESSAGES.NO-STUDY').subscribe((translation: string) => {
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
  }

}
