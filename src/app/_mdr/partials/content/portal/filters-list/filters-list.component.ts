import {Component, Injectable, OnInit} from '@angular/core';
import {States} from '../../../../core/states/states';
import {StudyFilters} from '../../../../core/filters/study.filters';
import {DataObjectFilters} from '../../../../core/filters/object.filters';
import {StatesService} from '../../../../core/services/state/states.service';
import {SubscriptionEvents} from '../../../../core/states/subscription-events';
import {FilterSampleInterface} from '../../../../core/interfaces/filters/filter-sample.interface';
import {FiltersGroupsInterface} from '../../../../core/interfaces/filters/filters.interface';


@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
})
@Injectable({providedIn: 'root'})
export class FiltersListComponent implements OnInit {

  filtersList: Array<FilterSampleInterface>;

  studyFilters: Array<FiltersGroupsInterface> = StudyFilters;
  objectFilters: Array<FiltersGroupsInterface> = DataObjectFilters;

  constructor(
    private states: States,
    private statesService: StatesService,
    private subscriptionEvents: SubscriptionEvents,
  ) {
  }

  clearAll(){

    this.statesService.clearFilters();

    this.studyFilters.forEach((filter) => {
      filter.subgroups.forEach((subgroup: any) => {
        subgroup.values.forEach((param: any) => {
          param.isSelected = false;
        });
      });
    });

    this.objectFilters.forEach((filter) => {
      filter.subgroups.forEach((subgroup: any) => {
        subgroup.values.forEach((param: any) => {
          param.isSelected = false;
        });
      });
    });

    this.filtersList = [];
    this.statesService.filtersList = this.filtersList;
    this.statesService.isFiltered = false;

    this.subscriptionEvents.sendClearFilterEvent();
  }

  ngOnInit(): void {
    this.states.filtersList.subscribe(value => this.filtersList = value);
  }
}
