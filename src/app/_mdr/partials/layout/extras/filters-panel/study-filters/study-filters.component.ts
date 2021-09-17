import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SubscriptionEvents} from '../../../../../core/states/subscription-events';
import {SnackbarService} from '../../../../../core/services/snackbar/snackbar.service';
import {StatesService} from '../../../../../core/services/state/states.service';


@Component({
  selector: 'app-study-filters',
  templateUrl: './study-filters.component.html',
})
export class StudyFiltersComponent implements OnInit {

  @Input() groupName: string;
  @Input() subgroups: any;

  constructor(
    private snackbarService: SnackbarService,
    private translate: TranslateService,
    private statesService: StatesService,
    private subscriptionEvents: SubscriptionEvents,
  ) {}

  onStudyFilter(event, parameter: string, paramId: number, translateParam: string, fieldName: string,
                isNested: boolean, path: string, type: string, subgroupName: string){

    let message = '';
    let close = '';
    let translateFilter = '';

    if (event.checked === false) {
      this.translate.get([
        'BUTTONS.CLOSE',
        'FILTERS.MESSAGES.DESELECTING',
        translateParam
      ]).subscribe((translation) => {
          message = translation['FILTERS.MESSAGES.DESELECTING'];
          close = translation['BUTTONS.CLOSE'];
          translateFilter = translation[translateParam];
        }
      );

      this.snackbarService.snackbarMessage(message + translateFilter, close);

      this.statesService.filtersList.splice(
          this.statesService.filtersList.findIndex(
              x => x.name === translateFilter && x.value === paramId
          ), 1
      );

      this.statesService.isFiltered = this.statesService.filtersList.length > 0;

      this.subscriptionEvents.sendFilterEvent();

    } else {
      this.translate.get([
        'BUTTONS.CLOSE',
        'FILTERS.MESSAGES.SELECTING',
        translateParam
      ]).subscribe((translation) => {
          message = translation['FILTERS.MESSAGES.SELECTING'];
          close = translation['BUTTONS.CLOSE'];
          translateFilter = translation[translateParam];
        }
      );

      this.snackbarService.snackbarMessage(message + translateFilter, close);

      const indx = this.statesService.filtersList.findIndex(x => x.value === paramId && x.name === translateFilter);

      if (indx <= -1) {
        this.statesService.filtersList.push({
          isNested,
          fieldName,
          name: translateFilter,
          value: paramId,
          type,
          path,
          subgroupName
        });
      }

      this.statesService.isFiltered = this.statesService.filtersList.length > 0;
      this.subscriptionEvents.sendFilterEvent();

    }
  }

  selectAll(id: number, subgroupName: string){
    const index = id - 1;

    const fieldName = this.subgroups[index]['fieldName'];
    const isNested = this.subgroups[index]['isNested'];
    const type = this.subgroups[index]['type'];
    const path = this.subgroups[index]['path'];

    const groupTranslate = this.subgroups[index]['translate'];

    let groupTranslateName = '';
    let message = '';
    let close = '';


    this.translate.get([
      groupTranslate,
      'FILTERS.MESSAGES.STUDIES-GROUP-SELECTION',
      'BUTTONS.CLOSE'
    ]).subscribe((translation) => {
      groupTranslateName = translation[groupTranslate];
      message = translation['FILTERS.MESSAGES.STUDIES-GROUP-SELECTION'];
      close = translation['BUTTONS.CLOSE'];
    });

    this.subgroups[index]['values'].forEach(element => {
      element.isSelected = true;

      let translateFilter = '';

      this.translate.get([
        element.translate
      ]).subscribe((translation) => {
            translateFilter = translation[element.translate];
          }
      );

      if (!this.statesService.filtersList.some(x => x.value === element.id && x.subgroupName === subgroupName)) {
        this.statesService.filtersList.push({
          isNested,
          fieldName,
          name: translateFilter,
          value: element.id,
          type,
          path,
          subgroupName
        });
      }
    });

    this.statesService.isFiltered = this.statesService.filtersList.length > 0;
    this.subscriptionEvents.sendFilterEvent();

    console.log(this.statesService.filtersList);

    this.snackbarService.snackbarMessage(message + groupTranslateName, close);

  }

  deselectAll(id: number, subgroupName: string){
    const index = id - 1;
    const groupTranslate = this.subgroups[index]['translate'];

    let groupTranslateName = '';
    let message = '';
    let close = '';

    this.translate.get([
      groupTranslate,
      'FILTERS.MESSAGES.STUDIES-GROUP-DESELECTION',
      'BUTTONS.CLOSE'
    ]).subscribe((translation) => {
      groupTranslateName = translation[groupTranslate];
      message = translation['FILTERS.MESSAGES.STUDIES-GROUP-DESELECTION'];
      close = translation['BUTTONS.CLOSE'];
    });

    this.subgroups[index]['values'].forEach(element => {
      element.isSelected = false;

      const indx = this.statesService.filtersList.findIndex(
          x => x.value === element.id
              && x.subgroupName === subgroupName
      );

      if (indx > -1) {
        this.statesService.filtersList.splice(indx, 1);
      }
    });

    this.statesService.isFiltered = this.statesService.filtersList.length > 0;
    this.subscriptionEvents.sendFilterEvent();

    console.log(this.statesService.filtersList);

    this.snackbarService.snackbarMessage(message + groupTranslateName, close);

  }

  ngOnInit(): void {
  }
}
