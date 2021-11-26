import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Study} from '../../_mdr/core/interfaces/entities/study.interface';
import {StatesService} from '../../_mdr/core/services/state/states.service';
import {QueryApiService} from '../../_mdr/core/services/query-api/query-api.service';



@Component({
  templateUrl: './study-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyPageComponent implements OnInit {

  public studyId: number;

  public study: Study;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private queryApiService: QueryApiService,
    private statesService: StatesService,
    private ref: ChangeDetectorRef,
  ) {
    ref.detach();
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.studyId = +params['id'];
      }
    );
    this.queryApiService.getByStudyId({studyId: this.studyId}).subscribe(data => {
        this.study = data['data'][0];
        this.statesService.singleStudy = data['data'][0];
      },
      error => {
        this.route.navigate(['error/not-found']);
      });
    setInterval(() => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    }, 1);
  }

  ngOnInit(): void {}

}
