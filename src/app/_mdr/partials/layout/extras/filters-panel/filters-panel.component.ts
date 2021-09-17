import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LayoutService } from '../../../../core';
import { StudyFilters } from '../../../../core/filters/study.filters';
import { DataObjectFilters } from '../../../../core/filters/object.filters';
import { States } from '../../../../core/states/states';
import {Subscription} from 'rxjs';
import {StatesService} from '../../../../core/services/state/states.service';
import {SubscriptionEvents} from '../../../../core/states/subscription-events';
import {FilterSampleInterface} from '../../../../core/interfaces/filters/filter-sample.interface';


@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss'],
})
export class FiltersPanelComponent implements OnInit {
  extrasFiltersPanelDirectionCSSClass = 'offcanvas-right';
  activeTabId:
    | 'studies_filters'
    | 'objects_filters' = 'studies_filters';

  studyFilters = StudyFilters;
  objectFilers = DataObjectFilters;

  uploadingSessionEvent: Subscription;

  constructor(
    private layout: LayoutService,
    public states: States,
    private ref: ChangeDetectorRef,
    private statesFunctions: StatesService,
    private subscriptionEvents: SubscriptionEvents
  ) {
    ref.detach();
    this.uploadingSessionEvent = this.subscriptionEvents.getSessionUploadingEvent().subscribe(() => {
      this.onUploadingFilters();
    });
    setInterval(() => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    }, 1);
  }

  onUploadingFilters() {

    if (this.statesFunctions.filtersList.length > 0) {

      for (const filterVal of this.statesFunctions.filtersList) {
        this.studyFilters.forEach((filter) => {
          filter.subgroups.forEach((subgroup) => {
            subgroup.values.forEach((param) => {
              if (param.name === filterVal.name) {
                param.isSelected = true;
              }
            });
          });
        });

        this.objectFilers.forEach((filter) => {
          filter.subgroups.forEach((subgroup) => {
            subgroup.values.forEach((param) => {
              if (param.name === filterVal.name) {
                param.isSelected = true;
              }
            });
          });
        });
      }
    } else {
      this.studyFilters.forEach((filter) => {
        filter.subgroups.forEach((subgroup) => {
          subgroup.values.forEach((param) => {
            param.isSelected = false;
          });
        });
      });

      this.objectFilers.forEach((filter) => {
        filter.subgroups.forEach((subgroup) => {
          subgroup.values.forEach((param) => {
            param.isSelected = false;
          });
        });
      });
    }

  }

  ngOnInit(): void {
    this.extrasFiltersPanelDirectionCSSClass = `offcanvas-${this.layout.getProp(
      'extras.filtersPanel.offcanvas.direction'
    )}`;
  }

  setActiveTabId(tabId) {
    this.activeTabId = tabId;
  }

  getActiveCSSClasses(tabId) {
    if (tabId !== this.activeTabId) {
      return '';
    }
    return 'active show';
  }
}
