import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslationService } from '../../../../../modules/i18n/translation.service';

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  translate: string;
  active?: boolean;
}

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  language: LanguageFlag;
  languages: LanguageFlag[] = [
    {
      lang: 'en',
      name: 'English',
      translate: 'LANGUAGES.ENGLISH',
      flag: './assets/media/svg/flags/012-uk.svg'
    },
    {
      lang: 'fr',
      name: 'French',
      translate: 'LANGUAGES.FRENCH',
      flag: './assets/media/svg/flags/195-france.svg'
    },
    {
      lang: 'de',
      name: 'German',
      translate: 'LANGUAGES.GERMAN',
      flag: './assets/media/svg/flags/162-germany.svg'
    },
    {
      lang: 'cz',
      name: 'Czech',
      translate: 'LANGUAGES.CZECH',
      flag: './assets/media/svg/flags/149-czech-republic.svg'
    },
    {
      lang: 'pl',
      name: 'Polish',
      translate: 'LANGUAGES.POLISH',
      flag: './assets/media/svg/flags/211-poland.svg'
    },
    {
      lang: 'pt',
      name: 'Portuguese',
      translate: 'LANGUAGES.PORTUGUESE',
      flag: './assets/media/svg/flags/005-portugal.svg'
    },
    {
      lang: 'it',
      name: 'Italian',
      translate: 'LANGUAGES.ITALIAN',
      flag: './assets/media/svg/flags/013-italy.svg'
    },
    {
      lang: 'sk',
      name: 'Slovak',
      translate: 'LANGUAGES.SLOVAK',
      flag: './assets/media/svg/flags/091-slovakia.svg'
    }
  ];
  constructor(
    private translationService: TranslationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setSelectedLanguage();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        this.setSelectedLanguage();
      });
  }

  setLanguageWithRefresh(lang) {
    this.setLanguage(lang);
    window.location.reload();
  }

  setLanguage(lang) {
    this.languages.forEach((language: LanguageFlag) => {
      if (language.lang === lang) {
        language.active = true;
        this.language = language;
      } else {
        language.active = false;
      }
    });
    this.translationService.setLanguage(lang);
  }

  setSelectedLanguage(): any {
    this.setLanguage(this.translationService.getSelectedLanguage());
  }
}
