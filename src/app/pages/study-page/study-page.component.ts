import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Study} from '../../_mdr/core/interfaces/entities/study.interface';
import {ApiService} from '../../_mdr/core/services/api/api.service';
import {StatesService} from '../../_mdr/core/services/state/states.service';



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
    private apiService: ApiService,
    private statesService: StatesService,
    private ref: ChangeDetectorRef,
  ) {
    ref.detach();
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.studyId = +params['id'];
      }
    );
    this.apiService.getByStudyId({studyId: this.studyId}).subscribe(data => {
        this.study = data[0];
        this.statesService.setSingleStudy(data[0]);
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
