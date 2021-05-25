import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-study-card',
  templateUrl: './study-card.component.html',
})
export class StudyCardComponent implements OnInit {
  @Input() studyId: number;
  @Input() provenance: string;
  @Input() studyTitle: string;
  @Input() studyDescription: string;

  public showMore: boolean;

  constructor() {
  }

  showMoreToggle(){
    return this.showMore = !this.showMore;
  }

  ngOnInit(): void {
  }
}
