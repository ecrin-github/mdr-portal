import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {ApiService} from '../../../_mdr/core/services/api/api.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


const specificStudyQuery = `{
      "search_type": "...",
      "search_value": "...",
      "page": 0,
      "page_size": 100
  }
`;

const studyCharacteristicsQuery = `{
      "title_contains": "...",
      "logical_operator": "and",
      "topics_include": "...",
      "page": 0,
      "page_size": 100
  }
`;

const viaPublishedPaperQuery = `{
      "search_type": "...",
      "search_value": "...",
      "page": 0,
      "page_size": 100
  }
`;

const selectedStudyQuery = `{
      "study_id": 3000001
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
  public searchQuery: object;

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

  onShowData(data: Array<any>) {
    for (const study of data) {
      let studyRecord: any;
      studyRecord = {
        id: study['id'],
        // tslint:disable-next-line:max-line-length
        display_title: (study['display_title'] !== null && study['display_title'] !== undefined) ? study['display_title'] : 'None',
        study_type: (study['study_type'] !== null && study['study_type'] !== undefined) ? study['study_type'] : 'None',
        study_status: (study['study_status'] !== null && study['study_status'] !== undefined) ? study['study_status'] : 'None'
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
      this.apiUrl = environment.hostname + environment.elasticSearchStudyCharacteristicsApiUrl;
    } else if (this.selectedOption === 'specific-study') {
      this.query = specificStudyQuery;
      this.apiUrl = environment.hostname + environment.elasticSearchSpecificStudyApiUrl;
    } else if (this.selectedOption === 'via-published-paper') {
      this.query = viaPublishedPaperQuery;
      this.apiUrl = environment.hostname + environment.elasticSearchViaPublishedPaperApiUrl;
    } else if (this.selectedOption === 'by-study-id') {
      this.query = selectedStudyQuery;
      this.apiUrl = environment.hostname + environment.elasticSearchSelectedStudyApiUrl;
    } else {
      this.error = true;
      this.message = 'No search option has been selected';
    }
  }

  onSearch() {

    this.onStatusReset();

    try{

      this.searchType = this.searchTypeElement.nativeElement.value;
      this.searchQuery = JSON.parse(this.searchQueryElement.nativeElement.value);

      if (this.searchType === 'study-characteristics') {

        if (!('logical_operator' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "logical_operator" in the search query.';
        }

        if (!('page' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page" in the search query.';
        }

        if (!('page_size' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page_size" in the search query.';
        }

        if (!('title_contains' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "title_contains" in the search query.';
        }

        if (!('topics_include' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "topics_include" in the search query.';
        }

        if (!this.error) {

          this.loading = true;
          this.message = 'Searching, please wait...';

          this.apiService.getStudyCharacteristicsApi(this.searchQuery).subscribe(data => {

            if (data['data'].length > 0) {
              this.onShowData(data['data']);
            } else {
              this.noResults();
            }
          }, error => {
            this.errorFunction();
          });
        }

      } else if (this.searchType === 'specific-study') {

        if (!('search_type' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "search_type" in the search query.';
        }

        if (!('search_value' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "search_value" in the search query.';
        }

        if (!('page' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page" in the search query.';
        }

        if (!('page_size' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page_size" in the search query.';
        }

        if (!this.error) {

          this.loading = true;
          this.message = 'Searching, please wait...';

          this.apiService.getSpecificStudyApi(this.searchQuery).subscribe(data => {

            if (data['data'].length > 0) {
              this.onShowData(data['data']);
            } else {
              this.noResults();
            }
          }, error => {
            this.errorFunction();
          });
        }

      } else if (this.searchType === 'via-published-paper') {

        if (!('search_type' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "search_type" in the search query.';
        }

        if (!('search_value' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "search_value" in the search query.';
        }

        if (!('page' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page" in the search query.';
        }

        if (!('page_size' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "page_size" in the search query.';
        }

        if (!this.error) {

          this.loading = true;
          this.message = 'Searching, please wait...';

          this.apiService.getViaPublishedPaperApi(this.searchQuery).subscribe(data => {

            if (data['data'].length > 0) {
              this.onShowData(data['data']);
            } else {
              this.noResults();
            }
          }, error => {
            this.errorFunction();
          });
        }

      } else if (this.searchType === 'by-study-id') {

        if (!('study_id' in this.searchQuery)) {
          this.error = true;
          this.message = 'Invalid key "study_id" in the search query.';
        }

        if (!this.error) {

          this.loading = true;
          this.message = 'Searching, please wait...';

          this.apiService.getSelectedStudyApi(this.searchQuery).subscribe(data => {

            if (data['data'].length > 0) {
              this.onShowData(data['data']);
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
    this.apiUrl = environment.hostname + environment.elasticSearchStudyCharacteristicsApiUrl;
    this.query = studyCharacteristicsQuery;
  }

}
