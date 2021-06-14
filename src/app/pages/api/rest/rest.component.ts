import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {ApiService} from '../../../_mdr/core/services/api/api.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {RawQueryInterface} from '../../../_mdr/core/interfaces/requests/raw-query.interface';
import {Study, StudyRecordInterface} from '../../../_mdr/core/interfaces/entities/study.interface';
import {ByStudyIdRequestInterface} from '../../../_mdr/core/interfaces/requests/by-study-id-request.interface';
import {ByStudyCharacteristicsRequestInterface} from '../../../_mdr/core/interfaces/requests/by-study-characteristics-request.interface';
import {SpecificStudyRequestInterface} from '../../../_mdr/core/interfaces/requests/specific-study-request.interface';
import {ViaPublishedPaperRequestInterface} from '../../../_mdr/core/interfaces/requests/via-published-paper-request.interface';


const specificStudyQuery = `{
      "searchType": "...",
      "searchValue": "...",
      "page": 0,
      "size": 100
  }
`;

const studyCharacteristicsQuery = `{
      "titleContains": "...",
      "logicalOperator": "and",
      "topicsInclude": "...",
      "page": 0,
      "size": 100
  }
`;

const viaPublishedPaperQuery = `{
      "searchType": "...",
      "searchValue": "...",
      "page": 0,
      "size": 100
  }
`;

const selectedStudyQuery = `{
      "studyId": 3000001
  }
`;

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestComponent implements OnInit {


  @ViewChild('searchType') searchTypeElement;
  @ViewChild('searchQuery') searchQueryElement;

  public message: string;
  public loading: boolean;
  public results: any;
  public error: boolean;
  public query: string;
  public notFound: boolean;
  public apiUrl: string;
  public length: number;

  public searchType: string;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  displayedColumns = ['studyTitle', 'studyStatus', 'studyType', 'details'];

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  selectedOption = 'study-characteristics';

  constructor(
    private apiService: ApiService,
    private ref: ChangeDetectorRef
  ) {
    ref.detach();
    setInterval(() => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    }, 1);
  }

  onShowData(data: Array<Study>) {
    for (const study of data) {
      let studyRecord: StudyRecordInterface;
      studyRecord = {
        id: study.id,
        // tslint:disable-next-line:max-line-length
        displayTitle: (study.displayTitle !== null && study.displayTitle !== undefined) ? study.displayTitle : 'None',
        studyType: (study.studyType !== null && study.studyType !== undefined) ? study.studyType : 'None',
        studyStatus: (study.studyStatus !== null && study.studyStatus !== undefined) ? study.studyStatus : 'None'
      };
      this.results.push(studyRecord);
    }

    this.length = this.results.length;
    this.dataSource = new MatTableDataSource(this.results);

    this.loading = false;
    this.error = false;
    this.notFound = false;

    this.message = 'Your search results: ';
  }

  noResults() {
    this.results = [];
    this.length = 0;
    this.loading = false;
    this.error = false;
    this.notFound = true;
    this.message = 'Nothing was found... Please try again.';
  }

  errorFunction() {
    this.loading = false;
    this.error = true;
    this.results = [];
    this.length = 0;
    this.notFound = false;
    this.message = 'Something went wrong. Please recheck the correctness of your search parameters.';
  }

  onStatusReset() {
    this.results = [];
    this.length = 0;
    this.loading = false;
    this.error = false;
    this.notFound = false;
    this.message = '';
  }


  onSearchTypeChange(value: string) {
    this.selectedOption = value;

    if (this.selectedOption === 'study-characteristics') {
      this.query = studyCharacteristicsQuery;
      this.apiUrl = environment.hostname + environment.apiBaseUrl + environment.apiVersion + environment.studyCharacteristicsUrl;
    } else if (this.selectedOption === 'specific-study') {
      this.query = specificStudyQuery;
      this.apiUrl = environment.hostname + environment.apiBaseUrl + environment.apiVersion + environment.specificStudyUrl;
    } else if (this.selectedOption === 'via-published-paper') {
      this.query = viaPublishedPaperQuery;
      this.apiUrl = environment.hostname + environment.apiBaseUrl + environment.apiVersion + environment.viaPublishedPaperUrl;
    } else if (this.selectedOption === 'by-study-id') {
      this.query = selectedStudyQuery;
      this.apiUrl = environment.hostname + environment.apiBaseUrl + environment.apiVersion + environment.studyIdUrl;
    } else {
      this.error = true;
      this.message = 'No search option has been selected';
    }
  }

  onSearch() {

    this.onStatusReset();

    try{

      this.searchType = this.searchTypeElement.nativeElement.value;


      if (this.searchType === 'study-characteristics') {

        const searchQuery: ByStudyCharacteristicsRequestInterface = JSON.parse(this.searchQueryElement.nativeElement.value);

        if (!('logicalOperator' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "logicalOperator" in the search query.';
        }

        if (!('page' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page" in the search query.';
        }

        if (!('size' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "size" in the search query.';
        }

        if (!('titleContains' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "titleContains" in the search query.';
        }

        if (!('topicsInclude' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "topicsInclude" in the search query.';
        }

        if (!this.error) {

          this.loading = true;
          this.message = 'Searching, please wait...';

          this.apiService.getByStudyCharacteristics(searchQuery).subscribe(data => {

            if (data.total > 0) {
              this.onShowData(data.data);
            } else {
              this.noResults();
            }
          }, error => {
            this.errorFunction();
          });
        }

      } else if (this.searchType === 'specific-study') {

        const searchQuery: SpecificStudyRequestInterface = JSON.parse(this.searchQueryElement.nativeElement.value);

        if (!('searchType' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "searchType" in the search query.';
        }

        if (!('searchValue' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "searchValue" in the search query.';
        }

        if (!('page' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page" in the search query.';
        }

        if (!('size' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "size" in the search query.';
        }

        if (!this.error) {

          this.loading = true;
          this.message = 'Searching, please wait...';

          this.apiService.getSpecificStudy(searchQuery).subscribe(data => {

            if (data.total > 0) {
              this.onShowData(data.data);
            } else {
              this.noResults();
            }
          }, error => {
            this.errorFunction();
          });
        }

      } else if (this.searchType === 'via-published-paper') {

        const searchQuery: ViaPublishedPaperRequestInterface = JSON.parse(this.searchQueryElement.nativeElement.value);

        if (!('searchType' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "searchType" in the search query.';
        }

        if (!('searchValue' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "searchValue" in the search query.';
        }

        if (!('page' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page" in the search query.';
        }

        if (!('size' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "size" in the search query.';
        }

        if (!this.error) {

          this.loading = true;
          this.message = 'Searching, please wait...';

          this.apiService.getViaPublishedPaper(searchQuery).subscribe(data => {

            if (data.total > 0) {
              this.onShowData(data.data);
            } else {
              this.noResults();
            }
          }, error => {
            this.errorFunction();
          });
        }

      } else if (this.searchType === 'by-study-id') {
        const searchQuery: ByStudyIdRequestInterface = JSON.parse(this.searchQueryElement.nativeElement.value);

        if (!('studyId' in searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "studyId" in the search query.';
        }

        if (!this.error) {

          this.loading = true;
          this.message = 'Searching, please wait...';

          this.apiService.getByStudyId(searchQuery).subscribe(data => {

            if (data.data.length > 0) {
              this.onShowData(data.data);
            } else {
              this.noResults();
            }
          }, error => {
            this.errorFunction();
          });
        }

      }

    } catch (e) {
      this.results = [];
      this.length = 0;
      this.notFound = false;
      this.loading = false;
      this.message = 'Please check the correctness of your search query...';
      this.error = true;
    }

  }

  ngOnInit(): void {
    this.message = 'Please start to search...';
    this.loading = false;
    this.error = false;
    this.notFound = false;
    this.length = 0;
    this.results = [];
    this.apiUrl = environment.hostname + environment.apiBaseUrl + environment.apiVersion + environment.studyCharacteristicsUrl;
    this.query = studyCharacteristicsQuery;
  }

}
