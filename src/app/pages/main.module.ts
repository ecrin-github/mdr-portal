import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import {
  NgbDropdownModule,
  NgbProgressbarModule, NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslationModule } from '../modules/i18n/translation.module';
import { LayoutComponent } from './_layout/layout.component';
import { ScriptsInitComponent } from './_layout/init/scipts-init/scripts-init.component';
import { HeaderMobileComponent } from './_layout/components/header-mobile/header-mobile.component';
import { FooterComponent } from './_layout/components/footer/footer.component';
import { HeaderComponent } from './_layout/components/header/header.component';
import { HeaderMenuComponent } from './_layout/components/header/header-menu/header-menu.component';
import { TopbarComponent } from './_layout/components/topbar/topbar.component';
import { ExtrasModule } from '../_mdr/partials/layout/extras/extras.module';
import { LanguageSelectorComponent } from './_layout/components/topbar/language-selector/language-selector.component';
import { CoreModule } from '../_mdr/core';
import {MatDividerModule} from '@angular/material/divider';
import {FiltersPanelModule} from '../_mdr/partials/layout/extras/filters-panel/filters-panel.module';
import {RouterModule} from '@angular/router';
import {StudyPageComponent} from './study-page/study-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MainPageComponent} from './main-page/main-page.component';
import {MainPageContentModule} from '../_mdr/partials/content/portal/main-page-content.module';
import {DataObjectsHelpComponent} from './data-objects-help/data-objects-help.component';
import {RestComponent} from './api/rest/rest.component';
import {ApiPageComponent} from './api/api-page.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {ExportModalComponent} from './_layout/components/topbar/modals/export-modal/export-modal.component';
import {SaveModalComponent} from './_layout/components/topbar/modals/save-modal/save-modal.component';
import {LoadModalComponent} from './_layout/components/topbar/modals/load-modal/load-modal.component';
import {SingleStudyExportModalComponent} from './_layout/components/topbar/modals/single-study-export-modal/single-study-export-modal.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ScriptsInitComponent,
    HeaderMobileComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    TopbarComponent,
    LanguageSelectorComponent,

    ExportModalComponent,
    LoadModalComponent,
    SaveModalComponent,
    SingleStudyExportModalComponent,

    MainPageComponent,
    StudyPageComponent,
    DataObjectsHelpComponent,

    ApiPageComponent,
    RestComponent,
  ],
  imports: [
    CommonModule,
    TranslationModule,
    InlineSVGModule,
    ExtrasModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    CoreModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    NgbTooltipModule,

    FiltersPanelModule,
    MainPageContentModule,

    RouterModule.forChild([
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'data-object-types',
        component: DataObjectsHelpComponent
      },
      {
        path: 'study/:id',
        component: StudyPageComponent
      },
      {
        path: 'for-developers',
        component: ApiPageComponent
      },
      {
        path: 'api/rest',
        component: RestComponent
      },
    ]),
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,

  ],
})
export class MainModule { }
