import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ApiService} from '../../../_mdr/core/services/api/api.service';
import {environment} from '../../../../environments/environment.prod';


const queryTemplate = `{
      "from": 0,
      "size": 100,
      "query": {
          "term": {
              "id": "..."
          }
      }
  }
`;

@Component({
  selector: 'app-es-based-api',
  templateUrl: './es-based.component.html',
  styleUrls: ['./es-based.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EsBasedComponent implements OnInit {

  @ViewChild('selectedIndex') selectedIndexType: any;
  @ViewChild('searchQuery') searchQueryElement: any;

  public message: string;
  public loading: boolean;
  public results: any;
  public error: boolean;
  public query: string;
  public notFound: boolean;
  public apiUrl: string;
  public length: number;

  public selectedIndex: string;
  public searchQuery: object;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  displayedColumns = ['studyTitle', 'studyStatus', 'studyType', 'details'];

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  selectedOption = 'study';

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

  onStatusReset() {
    this.results = [];
    this.length = 0;
    this.loading = false;
    this.error = false;
    this.notFound = false;
    this.message = '';
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

  onSearchTypeChange(value: string) {
    this.selectedOption = value;

    if (this.selectedOption === 'study') {
      this.query = queryTemplate;
      this.apiUrl = environment.hostname + environment.elasticQueryBasedStudyUrl;
    } else if (this.selectedOption === 'data-object') {
      this.query = queryTemplate;
      this.apiUrl = environment.hostname + environment.elasticQueryBasedObjectUrl;
    } else {
      this.error = true;
      this.message = 'No search option has been selected';
    }
  }

  onSearch() {

    this.onStatusReset();

    try{

      this.selectedIndex = this.selectedIndexType.nativeElement.value;
      this.searchQuery = JSON.parse(this.searchQueryElement.nativeElement.value);

      if (this.selectedIndex === 'study') {

        this.loading = true;
        this.message = 'Searching, please wait...';

        this.apiService.getElasticQueryStudies(this.searchQuery).subscribe(data => {

          if (data['data'].length > 0) {
            this.onShowData(data['data']);
          } else {
            this.noResults();
          }

        }, error => {
          this.errorFunction();
        });

      } else if (this.selectedIndex === 'data-object') {

        this.loading = true;
        this.message = 'Searching, please wait...';

        this.apiService.getElasticQueryObjects(this.searchQuery).subscribe(data => {

          if (data['data'].length > 0) {
            this.onShowData(data['data']);
          } else {
            this.noResults();
          }

        }, error => {
          this.errorFunction();
        });

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
    this.apiUrl = environment.hostname + environment.elasticQueryBasedStudyUrl;
    this.query = queryTemplate;
  }

}
