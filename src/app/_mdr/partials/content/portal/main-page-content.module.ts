import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { MainPageContentComponent } from './main-page-content.component';
import { NgbAlertModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {DataObjectComponent} from './data-object/data-object.component';
import {StudyCardComponent} from './study-card/study-card.component';
import {StudyExpandingComponent} from './study-expanding/study-expanding.component';
import {FiltersListComponent} from './filters-list/filters-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DataObjectComponent,
    StudyCardComponent,
    StudyExpandingComponent,
    SearchPanelComponent,
    FiltersListComponent,
    MainPageContentComponent
  ],
  imports: [
    CommonModule,
    NgbAlertModule,
    MatButtonModule,
    NgbTooltipModule,
    TranslateModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    MatDividerModule,
    MatExpansionModule,
    MatChipsModule,
    MatPaginatorModule,
    FormsModule,
  ],
  exports: [
    DataObjectComponent,
    StudyCardComponent,
    StudyExpandingComponent,
    SearchPanelComponent,
    FiltersListComponent,
    MainPageContentComponent
  ]
})
export class MainPageContentModule { }
