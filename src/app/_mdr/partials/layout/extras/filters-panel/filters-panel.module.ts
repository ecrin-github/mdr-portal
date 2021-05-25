import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersPanelComponent } from './filters-panel.component';
import { StudyFiltersComponent } from './study-filters/study-filters.component';
import { ObjectFiltersComponent } from './object-filters/object-filters.component';
import {MatDividerModule} from '@angular/material/divider';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FiltersPanelComponent,
    StudyFiltersComponent,
    ObjectFiltersComponent
  ],
    imports: [
        CommonModule,
        MatDividerModule,
        TranslateModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        MatExpansionModule,
        MatSnackBarModule,
        PerfectScrollbarModule,
        RouterModule,
    ],
  exports: [
    FiltersPanelComponent,
    StudyFiltersComponent,
    ObjectFiltersComponent
  ],
})
export class FiltersPanelModule { }
