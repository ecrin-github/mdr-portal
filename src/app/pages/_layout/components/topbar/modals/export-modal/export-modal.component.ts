import {Component, OnInit} from '@angular/core';
import {PdfService} from '../../../../../../_mdr/core/services/portal/pdf.service';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FileSaverService} from 'ngx-filesaver';
import {RawQueryInterface} from '../../../../../../_mdr/core/interfaces/requests/raw-query.interface';
import {ResponseInterface} from '../../../../../../_mdr/core/interfaces/responses/server-response.interface';
import {SnackbarService} from '../../../../../../_mdr/core/services/snackbar/snackbar.service';
import {QueryBuilderService} from '../../../../../../_mdr/core/services/query-api/query-builder.service';
import {QueryApiService} from '../../../../../../_mdr/core/services/query-api/query-api.service';


@Component({
  selector: 'app-export-modal',
  templateUrl: './export-modal.component.html',
})
export class ExportModalComponent implements OnInit {

  public searchType: string;
  public searchBody: RawQueryInterface;

  constructor(
    private pdfService: PdfService,
    private statesService: StatesService,
    private fileSaver: FileSaverService,
    public activeModal: NgbActiveModal,
    private snackbarService: SnackbarService,
    private queryBuilderService: QueryBuilderService,
    private queryApiService: QueryApiService,
  ) {
  }

  generateJson() {

    if (!this.statesService.isCleared) {

      const searchParams = this.statesService.searchParams;
      this.searchType = searchParams.searchType;
      this.searchBody = searchParams.searchBody;

      let filename: string;
      filename = 'Session Storage - ' + Date.now() + '.json';

      if (this.searchType === 'specific_study') {

        this.queryApiService.getSpecificStudy(
            this.queryBuilderService.specificStudyBuilder(searchParams)).subscribe(
                (data: ResponseInterface) => {
                  const fileType = this.fileSaver.genType(filename);
                  const blob = new Blob([JSON.stringify(data.data)], {type: fileType});
                  this.fileSaver.save(blob, filename);

                  this.closeModal();
                });

      } else if (this.searchType === 'study_characteristics') {

        this.queryApiService.getByStudyCharacteristics(
            this.queryBuilderService.studyCharacteristicsBuilder(searchParams)).subscribe(
            (data: ResponseInterface) => {
              const fileType = this.fileSaver.genType(filename);
              const blob = new Blob([JSON.stringify(data.data)], {type: fileType});
              this.fileSaver.save(blob, filename);

              this.closeModal();
            });

      } else if (this.searchType === 'via_published_paper') {

        this.queryApiService.getViaPublishedPaper(
            this.queryBuilderService.viaPublishedPaperBuilder(searchParams)).subscribe(
            (data: ResponseInterface) => {
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

    if (!this.statesService.isCleared) {

      const searchParams = this.statesService.searchParams;
      this.searchType = searchParams.searchType;
      this.searchBody = searchParams.searchBody;

      if (this.searchType === 'specific_study') {

        this.queryApiService.getSpecificStudy(
            this.queryBuilderService.specificStudyBuilder(searchParams)).subscribe(
                (data: ResponseInterface) => {
                        this.pdfService.multipleStudiesPDFGenerator(data.data);
                        this.closeModal();
                      });

      } else if (this.searchType === 'study_characteristics') {

        this.queryApiService.getByStudyCharacteristics(
            this.queryBuilderService.studyCharacteristicsBuilder(searchParams)).subscribe(
            (data: ResponseInterface) => {
              this.pdfService.multipleStudiesPDFGenerator(data.data);
              this.closeModal();
            });

      } else if (this.searchType === 'via_published_paper') {

        this.queryApiService.getViaPublishedPaper(
            this.queryBuilderService.viaPublishedPaperBuilder(searchParams)).subscribe(
            (data: ResponseInterface) => {
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
    this.searchType = this.statesService.searchParams.searchType;
    this.searchBody = this.statesService.searchParams.searchBody;
  }

}
