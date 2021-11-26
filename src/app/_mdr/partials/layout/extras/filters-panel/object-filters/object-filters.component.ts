import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SubscriptionEvents} from '../../../../../core/states/subscription-events';
import {SnackbarService} from '../../../../../core/services/snackbar/snackbar.service';
import {StatesService} from '../../../../../core/services/state/states.service';


@Component({
  selector: 'app-object-filters',
  templateUrl: './object-filters.component.html',
})
export class ObjectFiltersComponent implements OnInit {

  @Input() groupName: string;
  @Input() subgroups: any;

  constructor(
    private snackbarService: SnackbarService,
    private translate: TranslateService,
    private statesService: StatesService,
    private subscriptionEvents: SubscriptionEvents,
  ) {
  }

  onDataObjectFilter(event, parameter: string, paramId: number, translateParam: string, fieldName: string,
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
          name: translateFilter,
          value: paramId,
          type,
          subgroupName
        });
      }

      console.log(this.statesService.filtersList);

      this.statesService.isFiltered = this.statesService.filtersList.length > 0;

      this.subscriptionEvents.sendFilterEvent();
    }
  }

  selectAll(id: number, subgroupName: string){
    const index = id - 1;

    const type = this.subgroups[index]['type'];
    const groupTranslate = this.subgroups[index]['translate'];

    let groupTranslateName = '';
    let message = '';
    let close = '';

    this.translate.get([
      groupTranslate,
      'FILTERS.MESSAGES.DATA-OBJECTS-GROUP-SELECTION',
      'BUTTONS.CLOSE'
    ]).subscribe((translation) => {
      groupTranslateName = translation[groupTranslate];
      message = translation['FILTERS.MESSAGES.DATA-OBJECTS-GROUP-SELECTION'];
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

      if (!this.statesService.filtersList.some(x => x.value === element.id
          && x.subgroupName === subgroupName)) {
        this.statesService.filtersList.push({
          name: translateFilter,
          value: element.id,
          type,
          subgroupName
        });
      }
    });

    this.statesService.isFiltered = this.statesService.filtersList.length > 0;
    this.subscriptionEvents.sendFilterEvent();

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
      'FILTERS.MESSAGES.DATA-OBJECTS-GROUP-DESELECTION',
      'BUTTONS.CLOSE'
    ]).subscribe((translation) => {
      groupTranslateName = translation[groupTranslate];
      message = translation['FILTERS.MESSAGES.DATA-OBJECTS-GROUP-DESELECTION'];
      close = translation['BUTTONS.CLOSE'];
    });

    this.subgroups[index]['values'].forEach(element => {
      element.isSelected = false;

      const indx = this.statesService.filtersList.findIndex(x => x.value === element.id && x.subgroupName === subgroupName);
      if (indx > -1) {
        this.statesService.filtersList.splice(indx, 1);
      }
    });

    this.statesService.isFiltered = this.statesService.filtersList.length > 0;
    this.subscriptionEvents.sendFilterEvent();

    this.snackbarService.snackbarMessage(message + groupTranslateName, close);

  }

  ngOnInit(): void {
  }

}
