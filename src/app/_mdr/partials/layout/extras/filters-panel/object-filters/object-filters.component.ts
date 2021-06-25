import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {States} from '../../../../../core/states/states';
import {SubscriptionEvents} from '../../../../../core/states/subscription-events';
import {FilterSampleInterface} from '../../../../../core/interfaces/filters/filter-sample.interface';
import {SnackbarService} from '../../../../../core/services/snackbar/snackbar.service';


@Component({
  selector: 'app-object-filters',
  templateUrl: './object-filters.component.html',
})
export class ObjectFiltersComponent implements OnInit {

  @Input() groupName: string;
  @Input() subgroups: any;

  public filtersList: Array<FilterSampleInterface>;

  constructor(
    private snackbarService: SnackbarService,
    private translate: TranslateService,
    private states: States,
    private subscriptionEvents: SubscriptionEvents,
  ) {
  }

  onDataObjectFilter(event, parameter: string, paramId: number, translateParam: string, fieldName: string,
                     isNested: boolean, path: string, type: string, subgroupName: string){

    let message = '';
    let close = '';
    let translateFilter = '';

    this.filtersList = this.states.filtersList.getValue();

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

      this.filtersList.push({
        isNested,
        fieldName,
        name: translateFilter,
        value: parameter,
        type,
        path,
        subgroupName
      });

      if (this.filtersList.length > 0) {
        this.states.isFiltered.next(true);
      } else {
        this.states.isFiltered.next(false);
      }

      this.states.filtersList.next(this.filtersList);
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

      const index = this.filtersList.findIndex(x => x.value === parameter && x.subgroupName === subgroupName);
      if (index > -1) {
        this.filtersList.splice(index, 1);
      }

      if (this.filtersList.length > 0) {
        this.states.isFiltered.next(true);
      } else {
        this.states.isFiltered.next(false);
      }

      this.states.filtersList.next(this.filtersList);
      this.subscriptionEvents.sendFilterEvent();
    }
  }

  selectAll(id: number, subgroupName: string){
    const index = id - 1;

    const groupTranslate = this.subgroups[index]['translate'];

    let groupTranslateName = '';
    let message = '';
    let close = '';

    this.filtersList = this.states.filtersList.getValue();

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

      const indx = this.filtersList.findIndex(x => x.value === element.name && x.subgroupName === subgroupName);
      if (indx > -1) {
        this.filtersList.splice(indx, 1);
      }
    });

    if (this.filtersList.length > 0) {
      this.states.isFiltered.next(true);
    } else {
      this.states.isFiltered.next(false);
    }

    this.states.filtersList.next(this.filtersList);
    this.subscriptionEvents.sendFilterEvent();

    this.snackbarService.snackbarMessage(message + groupTranslateName, close);

  }

  deselectAll(id: number, subgroupName: string){
    const index = id - 1;

    const groupTranslate = this.subgroups[index]['translate'];
    const fieldName = this.subgroups[index]['fieldName'];
    const isNested = this.subgroups[index]['isNested'];

    const type = this.subgroups[index]['type'];
    const path = this.subgroups[index]['path'];

    let groupTranslateName = '';
    let message = '';
    let close = '';

    this.filtersList = this.states.filtersList.getValue();

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

      let translateFilter = '';

      this.translate.get([
        element.translate
      ]).subscribe((translation) => {
          translateFilter = translation[element.translate];
        }
      );

      if (!this.filtersList.some(x => x.value === element.name && x.subgroupName === subgroupName)) {
        this.filtersList.push({
          isNested,
          fieldName,
          name: translateFilter,
          value: element.name,
          type,
          path,
          subgroupName
        });
      }
    });

    if (this.filtersList.length > 0) {
      this.states.isFiltered.next(true);
    } else {
      this.states.isFiltered.next(false);
    }

    this.states.filtersList.next(this.filtersList);
    this.subscriptionEvents.sendFilterEvent();

    this.snackbarService.snackbarMessage(message + groupTranslateName, close);

  }

  ngOnInit(): void {
    this.states.filtersList.subscribe(value => this.filtersList = value);
  }

}
