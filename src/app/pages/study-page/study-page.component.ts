import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Study} from '../../_mdr/core/interfaces/dto/study.interface';
import {ElasticsearchService} from '../../_mdr/core/services/elasticsearch/elasticsearch.service';
import {StatesService} from '../../_mdr/core/services/state/states.service';



@Component({
  templateUrl: './study-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyPageComponent implements OnInit {

  public studyId: number;

  public study: Study | any;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private elasticsearchService: ElasticsearchService,
    private statesService: StatesService,
    private ref: ChangeDetectorRef,
  ) {
    ref.detach();
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.studyId = +params['id'];
      }
    );
    this.elasticsearchService.getElasticSelectedStudy(this.studyId).subscribe(data => {
        this.study = data;
        this.statesService.setStudy(data);
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
