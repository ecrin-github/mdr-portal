import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {States} from '../../../../../core/states/states';
import {SubscriptionEvents} from '../../../../../core/states/subscription-events';


@Component({
  selector: 'app-study-filters',
  templateUrl: './study-filters.component.html',
})
export class StudyFiltersComponent implements OnInit {

  @Input() groupName: string;
  @Input() subgroups: any;

  public filtersList: Array<any>;

  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    public states: States,
    public subscriptionEvents: SubscriptionEvents,
  ) {}

  onStudyFilter(event, parameter: string, paramId: number, translateParam: string, fieldName: string,
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

      this.snackBar.open(message + translateFilter, close, {
        duration: 5500,
      });

      this.filtersList.push({
        isNested,
        fieldName,
        name: translateFilter,
        value: parameter,
        path,
        type,
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

      this.snackBar.open(message + translateFilter, close, {
        duration: 5500,
      });

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

      const indx = this.filtersList.findIndex(x => x.subgroupName === subgroupName);
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

    this.snackBar.open(message + groupTranslateName, close, {
      duration: 5500,
    });

  }

  deselectAll(id: number, subgroupName: string){

    const index = id - 1;
    const fieldName = this.subgroups[index]['fieldName'];
    const isNested = this.subgroups[index]['isNested'];
    const type = this.subgroups[index]['type'];
    const path = this.subgroups[index]['path'];

    const groupTranslate = this.subgroups[index]['translate'];

    let groupTranslateName = '';
    let message = '';
    let close = '';

    this.filtersList = this.states.filtersList.getValue();

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

      let translateFilter = '';

      this.translate.get([
        element.translate
      ]).subscribe((translation) => {
          translateFilter = translation[element.translate];
        }
      );

      if (!this.filtersList.some(x => x.value === element.name)) {
        this.filtersList.push({
          isNested,
          fieldName,
          value: element.name,
          name: translateFilter,
          path,
          type,
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

    this.snackBar.open(message + groupTranslateName, close, {
      duration: 5500,
    });
  }

  ngOnInit(): void {
    this.states.filtersList.subscribe(value => this.filtersList = value);
  }
}
