import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {environment} from '../../../../environments/environment.prod';
import {Study, StudyRecordInterface} from '../../../_mdr/core/interfaces/entities/study.interface';
import {RawQueryInterface} from '../../../_mdr/core/interfaces/requests/raw-query.interface';
import {RawQueryService} from '../../../_mdr/core/services/raw-query-api/raw-query.service';


const queryTemplate = `{
      "page": 0,
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
  public results: Array<StudyRecordInterface>;
  public error: boolean;
  public query: string;
  public notFound: boolean;
  public apiUrl: string;
  public length: number;

  public selectedIndex: string;
  public searchQuery: RawQueryInterface;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  displayedColumns = ['studyTitle', 'studyStatus', 'studyType', 'details'];

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  selectedOption = 'study';

  constructor(
    private rawQueryService: RawQueryService,
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
        displayTitle: study.displayTitle !== null && study.displayTitle !== undefined ? study.displayTitle : 'None',
        studyType: study.studyType !== null && study.studyType !== undefined ? study.studyType : 'None',
        studyStatus: study.studyStatus !== null && study.studyStatus !== undefined ? study.studyStatus : 'None'
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
      this.apiUrl = environment.hostname + environment.rawQueryBaseUrl + environment.rawQueryVersion + environment.rawQueryStudyUrl;
    } else if (this.selectedOption === 'data-object') {
      this.query = queryTemplate;
      this.apiUrl = environment.hostname + environment.rawQueryBaseUrl + environment.rawQueryVersion + environment.rawQueryStudyUrl;
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

        this.rawQueryService.getRawQueryStudies(this.searchQuery).subscribe(data => {

          if (data.total > 0) {
            this.onShowData(data.data);
          } else {
            this.noResults();
          }

        }, error => {
          this.errorFunction();
        });

      } else if (this.selectedIndex === 'data-object') {

        this.loading = true;
        this.message = 'Searching, please wait...';

        this.rawQueryService.getRawQueryObjects(this.searchQuery).subscribe(data => {

          if (data.total > 0) {
            this.onShowData(data.data);
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
    this.apiUrl = environment.hostname + environment.rawQueryBaseUrl + environment.rawQueryVersion + environment.rawQueryStudyUrl;
    this.query = queryTemplate;
  }

}
