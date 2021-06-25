import {Component, OnInit} from '@angular/core';
import {QueryBuilderService} from '../../../../../../_mdr/core/services/elasticsearch/query-builder.service';
import {QueryService} from '../../../../../../_mdr/core/services/elasticsearch/query.service';
import {PdfService} from '../../../../../../_mdr/core/services/portal/pdf.service';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FileSaverService} from 'ngx-filesaver';
import {RawQueryInterface} from '../../../../../../_mdr/core/interfaces/requests/raw-query.interface';
import {ResponseInterface} from '../../../../../../_mdr/core/interfaces/responses/server-response.interface';
import {SnackbarService} from '../../../../../../_mdr/core/services/snackbar/snackbar.service';


@Component({
  selector: 'app-export-modal',
  templateUrl: './export-modal.component.html',
})
export class ExportModalComponent implements OnInit {

  public searchType: string;
  public searchBody: RawQueryInterface;

  constructor(
    private queryBuilder: QueryBuilderService,
    private queryService: QueryService,
    private pdfService: PdfService,
    private statesService: StatesService,
    private fileSaver: FileSaverService,
    public activeModal: NgbActiveModal,
    private snackbarService: SnackbarService,
  ) {
  }

  generateJson() {

    if (!this.statesService.getIsCleared()) {

      const searchParams = this.statesService.getSearchParams();
      this.searchType = searchParams.searchType;
      this.searchBody = searchParams.searchBody;

      let filename: string;
      filename = 'Session Storage - ' + Date.now() + '.json';

      if (this.searchType === 'specific_study' || this.searchType === 'study_characteristics') {

        this.queryService.getRawQueryStudies(this.searchBody).subscribe((data: ResponseInterface) => {
          const fileType = this.fileSaver.genType(filename);
          const blob = new Blob([JSON.stringify(data.data)], {type: fileType});
          this.fileSaver.save(blob, filename);

          this.closeModal();
        });

      } else if (this.searchType === 'via_published_paper') {

        this.queryService.getRawQueryObjects(this.searchBody).subscribe((data: ResponseInterface) => {
          const fileType = this.fileSaver.genType(filename);
          const blob = new Blob([JSON.stringify(data.data)], {type: fileType});
          this.fileSaver.save(blob, filename);

          this.closeModal();
        });

      }
    } else {

      this.snackbarService.snackbarTranslateMessage('MODALS.MESSAGES.EMPTY-SESSION', 'SNACKBAR.CLOSE');

    }
  }

  generatePdf(){

    if (!this.statesService.getIsCleared()) {

      const searchParams = this.statesService.getSearchParams();
      this.searchType = searchParams.searchType;
      this.searchBody = searchParams.searchBody;

      if (this.searchType === 'specific_study' || this.searchType === 'study_characteristics') {

        this.queryService.getRawQueryStudies(this.searchBody).subscribe((data: ResponseInterface) => {
          this.pdfService.multipleStudiesPDFGenerator(data.data);
          this.closeModal();
        });

      } else if (this.searchType === 'via_published_paper') {

        this.queryService.getRawQueryObjects(this.searchBody).subscribe((data: ResponseInterface) => {
          this.pdfService.multipleStudiesPDFGenerator(data.data);
          this.closeModal();
        });

      }
    } else {
      this.snackbarService.snackbarTranslateMessage('MODALS.MESSAGES.EMPTY-SESSION', 'SNACKBAR.CLOSE');
    }
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
    this.searchType = this.statesService.getSearchParams().searchType;
    this.searchBody = this.statesService.getSearchParams().searchBody;
  }

}
