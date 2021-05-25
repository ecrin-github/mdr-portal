import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
// Highlight JS
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { SplashScreenModule } from './_mdr/partials/layout/splash-screen/splash-screen.module';
// Paginator settings
import {MatPaginatorIntl} from '@angular/material/paginator';
import {CustomPaginator} from './_mdr/configs/paginator.config';
import {FileSaverModule} from 'ngx-filesaver';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxGoogleAnalyticsModule.forRoot('UA-194159711-1'),
    NgxGoogleAnalyticsRouterModule,
    BrowserAnimationsModule,
    SplashScreenModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    HighlightModule,
    ClipboardModule,
    MatSnackBarModule,
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    FileSaverModule,
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomPaginator},
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          json: () => import('highlight.js/lib/languages/json')
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
