import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-study-expanding',
  templateUrl: './study-expanding.component.html',
})
export class StudyExpandingComponent implements OnInit {

  @Input() studyId: number;
  @Input() provenance: string;
  @Input() dataSharingStatement: string;
  @Input() studyTitle: string;
  @Input() studyStatus: string;
  @Input() studyType: string;
  @Input() studyDescription: string;
  @Input() dataObjects: Array<any>;

  public showMore: boolean;
  public showMoreDataSharingStatement: boolean;

  showMoreToggle(){
    return this.showMore = !this.showMore;
  }

  showMoreToggleDataSharingStatement(){
    return this.showMoreDataSharingStatement = !this.showMoreDataSharingStatement;
  }

  ngOnInit(): void {}
}
