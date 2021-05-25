import {Component, OnInit} from '@angular/core';
import {QueryBuilderService} from '../../../../../../_mdr/core/services/elasticsearch/query-builder.service';
import {ElasticsearchService} from '../../../../../../_mdr/core/services/elasticsearch/elasticsearch.service';
import {PdfService} from '../../../../../../_mdr/core/services/portal/pdf.service';
import {StatesService} from '../../../../../../_mdr/core/services/state/states.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FileSaverService} from 'ngx-filesaver';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-export-modal',
  templateUrl: './export-modal.component.html',
})
export class ExportModalComponent implements OnInit {

  public searchType: string;
  public searchBody: object;

  constructor(
    private esQueryBuilder: QueryBuilderService,
    private elasticsearchService: ElasticsearchService,
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

    if (!this.statesService.getIsCleared()) {

      const searchParams = this.statesService.getSearchEvent();
      this.searchType = searchParams.searchType;
      this.searchBody = searchParams.searchBody;

      console.log(this.searchType);

      let filename: string;
      filename = 'Session Storage - ' + Date.now() + '.json';

      if (this.searchType === 'specific_study') {

        this.searchBody['filters'] = this.esQueryBuilder.buildElasticFiltersQuery();
        this.elasticsearchService.getElasticAllSpecificStudy(this.searchBody).subscribe((data: Array<any>) => {
          const fileType = this.fileSaver.genType(filename);
          const blob = new Blob([JSON.stringify(data)], {type: fileType});
          this.fileSaver.save(blob, filename);

          this.closeModal();
        });

      } else if (this.searchType === 'study_characteristics') {

        this.searchBody['filters'] = this.esQueryBuilder.buildElasticFiltersQuery();
        this.elasticsearchService.getElasticAllStudyCharacteristics(this.searchBody).subscribe((data: Array<any>) => {
          const fileType = this.fileSaver.genType(filename);
          const blob = new Blob([JSON.stringify(data)], {type: fileType});
          this.fileSaver.save(blob, filename);

          this.closeModal();
        });

      } else if (this.searchType === 'via_published_paper') {

        this.searchBody['filters'] = this.esQueryBuilder.buildElasticFiltersQuery();
        this.elasticsearchService.getElasticAllViaPublishedPaper(this.searchBody).subscribe((data: Array<any>) => {
          const fileType = this.fileSaver.genType(filename);
          const blob = new Blob([JSON.stringify(data)], {type: fileType});
          this.fileSaver.save(blob, filename);

          this.closeModal();
        });

      }
    } else {

      this.translate.get('MODALS.MESSAGES.EMPTY-SESSION').subscribe((translation: string) => {
        message = translation;
      });
      this.translate.get('SNACKBAR.CLOSE').subscribe((translation: string) => {
        close = translation;
      });

      // @ts-ignore
      this.snackBar.open(message, close, {
        duration: 5000
      });

    }
  }

  generatePdf(){

    let message = '';
    let close = '';

    if (!this.statesService.getIsCleared()) {

      const searchParams = this.statesService.getSearchEvent();
      this.searchType = searchParams.searchType;
      this.searchBody = searchParams.searchBody;

      if (this.searchType === 'specific_study') {

        this.searchBody['filters'] = this.esQueryBuilder.buildElasticFiltersQuery();
        this.elasticsearchService.getElasticAllSpecificStudy(this.searchBody).subscribe((data: Array<any>) => {
          this.pdfService.multipleStudiesPDFGenerator(data);

          this.closeModal();
        });

      } else if (this.searchType === 'study_characteristics') {

        this.searchBody['filters'] = this.esQueryBuilder.buildElasticFiltersQuery();
        this.elasticsearchService.getElasticAllStudyCharacteristics(this.searchBody).subscribe((data: Array<any>) => {
          this.pdfService.multipleStudiesPDFGenerator(data);

          this.closeModal();
        });

      } else if (this.searchType === 'via_published_paper') {

        this.searchBody['filters'] = this.esQueryBuilder.buildElasticFiltersQuery();
        this.elasticsearchService.getElasticAllViaPublishedPaper(this.searchBody).subscribe((data: Array<any>) => {
          this.pdfService.multipleStudiesPDFGenerator(data);

          this.closeModal();
        });

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

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
    this.searchType = this.statesService.getSearchEvent().searchType;
    this.searchBody = this.statesService.getSearchEvent().searchBody;
  }

}
