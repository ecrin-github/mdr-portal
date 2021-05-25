// Slovak
export const locale = {
  lang: 'sk',
  data: {
    TRANSLATOR: {
      SELECT: 'Vyberte jazyk',
    },
    MENU: {
      NEW: 'new',
      ACTIONS: 'Actions',
      CREATE_POST: 'Create New Post',
      PAGES: 'Pages',
      FEATURES: 'Features',
      APPS: 'Apps',
      DASHBOARD: 'Dashboard',
      'MAIN-PAGE': 'Hlavná stránka',
      'HELP-PAGE': 'Stránka pomoci',
      'USER-GUIDE': 'Užívateľská príručka',
      WIKI: 'Wiki',
      API: 'API',
      HELP: 'Pomoc',
      DEVELOPERS: 'Vývojári',
      LOGO: 'menu-logo-light.png',
    },
    MODALS: {
      CLOSE: 'Zatvoriť',
      SAVE: 'Uložiť',
      'SAVE-AS': 'Uložiť ako ',
      LOAD: 'Naložiť',
      UPLOAD: 'Odovzdajte zo svojho zariadenia',
      DOWNLOAD: 'Stiahnuť ako JSON',
      'EXPORT-AS': 'Exportovať ako',
      SELECT: 'Vyberte zo zoznamu: ',
      'NO-SESSION': 'Žiadne uložené relácie',
      OR: 'ALEBO',
      NAME: 'Názov...',
      MESSAGES: {
        'EMPTY-SESSION': 'Vaša aktuálna relácia je prázdna. Najprv začnite hľadať.',
        DOWNLOADED: 'Relácia bola stiahnutá.',
        'NO-STUDY': 'Neboli nájdené žiadne údaje zo štúdie.'
      }
    },
    'SEARCH-PAGE': {
      INITIAL: 'Začnite hľadať.',
      RESULTS: 'Výsledky:',
      'NO-RESULTS': 'Nic nebylo nalezeno. Prosím zkuste to znovu...',
      'SPENT-TIME': 'Strávený čas',
      IN: 'Z',
      LOADING: 'Prosím čakajte...',
      'SHOW-MORE': '[Zobraziť viac]',
      'SHOW-LESS': '[Zobraziť menej]',
      'STUDY-DETAILS': 'Zobraziť detaily štúdie',
      STUDY: {
        DESCRIPTION: 'Opis štúdie',
        'STUDY-TYPE': 'Typ štúdie: ',
        'STUDY-STATUS': 'Stav štúdie: ',
        'DATA-SHARING': 'Vyhlásenie o zdieľaní údajov',
        PROVENANCE: 'Pôvod: ',
        'DATA-OBJECT': {
          'ACCESS-URL': 'Prístupová adresa URL: ',
          'OBJECT-URL': 'URL objekt: ',
          PROVENANCE: 'Pôvod: ',
          'CITATION-URL': 'Citačná url: '
        }
      }
    },
    TOOLTIPS: {
      DOWNLOAD: 'Stiahnuť',
      UPLOAD: 'Nahrať',
      CLEAR: 'Vyčistiť',
      'SAVE-AS-PDF': 'Uložiť ako PDF',
      'HELP-PAGE': 'Stránka nápovědy',
      'USER-GUIDE': 'Uživatelský manuál',
      LANGUAGE: 'Jazyk',
      FILTERS: 'Filtre',
      'SHOW-UPLOADED-RESULTS': 'Ukázať nahrané výsledky',
      CLOSE: 'Zatvoriť',
      RESET: 'Vynulovať',
      HELP: 'Pomoc',
      VIEW: 'Ukážka',
      COPY: 'Kopírovať',
      'ACTIVE-FILTERS-PANEL': 'Panel aktívnych filtrov'
    },
    'SEARCH-PANEL': {
      'SELECT-MODE': 'Vybrať režim',
      'STUDY-CHARACTERISTICS': {
        TITLE: 'Charakteristika štúdie',
        'TITLE-CONTAINS': 'Názov obsahuje...',
        'LOGICAL-OPERATOR': 'Operátor Logica',
        'TOPIC-INCLUDES': 'Téma obsahuje...',
        AND: 'A',
        OR: 'ALEBO'
      },
      'SPECIFIC-STUDY': {
        TITLE: 'Špecifická štúdia',
        'STUDY-ID-TYPE': 'ID štúdie',
        'SPECIFIC-STUDY-PARAMETER': 'Konkrétny parameter štúdie...'
      },
      'VIA-PUBLISHED-PAPER': {
        TITLE: 'Pomocou publikovaného článku',
        'SEARCH-PAPER-BY': 'Hľadať článok podľa',
        'INTERESTED-PAPER-PARAMETER': 'Parameter vybraného článku...',
        'SEARCH-BY-TITLE': 'Názov'
      },
    },
    FOOTER: {
      DISCLAIMER: 'Odmietnutie',
      'DATA-SOURCES': 'Zdroje a Prispievatelia',
      CONTACT: 'Kontaktuj nás',
      NEWSLETTER: 'ECRIN Newsletter',
      'FOR-DEVELOPERS': 'Pre vývojárov'
    },
    SNACKBAR: {
      CLOSE: 'Zatvoriť',
      UPLOAD: {
        'SUCCESS-MESSAGE': 'Výsledky relácie používateľa boli úspešne nahrané!',
        'ERROR-MESSAGE': 'Nenahrali ste výsledky poslednej relácie!',
      },
      CLEAR: {
        MESSAGE: 'Výsledky hľadania sa čistia!'
      },
      SEARCH: {
        'ERROR-MESSAGE': 'Niečo sa pokazilo... Prosím skúste to znova'
      }
    },
    'FILTERS-PANEL': {
      TITLE: 'Filtre',
      STUDIES: 'Štúdie',
      'DATA-OBJECTS': 'Dátové objekty'
    },
    DISCLAIMER: {
      TITLE: 'Odmietnutie (Anglicky)'
    },
    'DATA-SOURCES': {
      TITLE: 'Zdroje údajov a prispievajúce organizácie (Anglicky)'
    },
    'HELP-PAGE': {
      TITLE: 'Stránka pomoci (Anglicky)'
    },
    'USER-GUIDE': {
      TITLE: 'Užívateľská príručka (Anglicky)'
    },
    API: {
      TITLE: 'API',
      INTRO: 'Podporujeme tri typy API:',
      'SPECIFIC-STUDY-API': 'API konkrétnej štúdie',
      'STUDY-CHARACTERISTICS-API': 'API vlastností štúdie',
      'VIA-PUBLISHED-PAPER-API': 'API pomocou publikovaného článku',
      MESSAGES: {
        START: 'Začnite hľadať...',
        'ERROR-TITLE': 'SŠtúdia sa nenašla alebo sa vyskytla chyba servera.',
        'ERROR-DESCRIPTION': 'Skúste to neskôr alebo skontrolujte správnosť API parametrov.',
        LOADING: 'Vyhľadávanie... Prosím počkajte.',
        'NOT-FOUND': 'Požadovaná studie nebyla nalezena.'
      }
    },
    'SPECIFIC-STUDY-API': {
      TITLE: 'API konkrétnej štúdie',
      HELP: {
        TITLE: 'API konkrétnej štúdie - Pomoc (Anglicky)'
      },
      URL: 'API konkrétnej štúdie URL: /specific-study/type/value',
      STUDY: {
        TITLE: 'Názov štúdie:',
        STATUS: 'Stav štúdie:',
        TYPE: 'Typ štúdie:'
      }
    },
    'STUDY-CHARACTERISTICS-API': {
      TITLE: 'API vlastností štúdie',
      STUDY: {
        TITLE: 'Názov štúdie',
        STATUS: 'Stav štúdie',
        TYPE: 'Typ štúdie',
        DETAILS: 'Detaily'
      },
      URL: 'API vlastností štúdie URL: /study-characteristics/title-contains/and|or/topics-contains',
      HELP: {
        TITLE: 'API vlastností štúdie - Pomoc (Anglicky)'
      }
    },
    'VIA-PUBLISHED-PAPER-API': {
      TITLE: 'API pomocou publikovaného článku',
      STUDY: {
        TITLE: 'Názov štúdie',
        STATUS: 'Stav štúdie',
        TYPE: 'Typ štúdie',
        DETAILS: 'Detaily'
      },
      URL: 'API pomocou publikovaného článku URL: /via-published-paper/type/value',
      HELP: {
        TITLE: 'API pomocou publikovaného článku - Pomoc (Anglicky)'
      }
    },
    BUTTONS: {
      SEARCH: 'Vyhľadávanie',
      'TRY-IT': 'Skúste to!',
      CLOSE: 'Zatvoriť',
      'SHOW-MORE': 'Zobraziť viac...',
      'VIEW-DETAILS': 'Zobraziť podrobnosti',
      HELP: 'Pomoc',
      'CLEAR-ALL': 'Vyčistiť všetky filtre',
      'SELECT-ALL': 'Vybrať všetko',
      'DESELECT-ALL': 'Odznačiť všetko'
    },
    'STUDY-PAGE': {
      'STUDY-DESCRIPTION': 'Popis štúdie',
      'STUDY-STATUS': 'Stav štúdie',
      'STUDY-TYPE': 'Typ štúdie',
      'ALLOCATION-TYPE': 'Typ pridelenia',
      'GENDER-ELIGIBILITY': 'Vhodnosť pre pohlavie',
      'STUDY-IDENTIFIERS': {
        TITLE: 'Identifikátor(i) štúdie',
        TYPE: 'Typ identifikátora:',
        VALUE: 'Hodnota identifikátora:',
        DATE: 'Dátum identifikátora:',
        ORGANIZATION: 'Organizácia identifikátora:',
        LINK: 'Odkaz na identifikátor:'
      },
      'STUDY-ORGANIZATIONS': 'Organizácia(e) štúdie',
      'DATA-OBJECTS': {
        TITLE: 'Zoznam súvisiacich dátových objektov',
        'SHOW-MORE': '[Zobraziť viac]',
        'SHOW-LESS': '[Zobraziť menej]',
        'ACCESS-URL': 'Prístupová adresa URL: ',
        'OBJECT-URL': 'URL objekt: '
      },
    },
    FILTERS: {
      STUDIES: {
        TYPES: {
          TITLE: 'Typ',
          'NOT-YET-KNOWN': 'Ešte nie je známe',
          INTERVENTIONAL: 'Intervenčná',
          OBSERVATIONAL: 'Observačná',
          'OBSERVATIONAL-PATIENT-REGISTRY': 'Observačný register pacientov',
          'EXPANDED-ACCESS': 'Rozšírený prístup',
          'FUNDED-PROGRAMME': 'Financovaný program',
          OTHER: 'Iné'
        },
        STATUSES: {
          TITLE: 'Stav',
          WITHDRAWN: 'Stiahnutá',
          AVAILABLE: 'Dostupná',
          WITHHELD: 'Zadržaná',
          RECRUITING: 'Naberajúca',
          'ACTIVE-NOT-RECRUITING': 'Aktívna, ešte nenaberajúca',
          'NOT-YET-RECRUITING': 'Zatiaľ nenaberajúca',
          'NO-LONGER-AVAILABLE': 'Už nie je k dispozícii',
          SUSPENDED: 'Pozastavená',
          'ENROLLING-BY-INVITATION': 'Zaradenie pomocou pozvánky',
          'APPROVED-FOR-MARKETING': 'Schválené pre marketing',
          COMPLETED: 'Dokončená',
          TERMINATED: 'Ukončená',
          OTHER: 'Iná',
          ONGOING: 'Pokračujúca',
          'UNKNOWN-STATUS': 'Neznámy stav'
        },
        GENDER: {
          TITLE: 'Vhodnosť pre pohlavie',
          ALL: 'Všetko',
          FEMALE: 'Žena',
          MALE: 'Muž',
          'NOT-PROVIDED': 'Nie je k dispozícii',
          'UNKNOWN-STATUS': 'Neznámy stav'
        },
        PHASES: {
          TITLE: 'Fáza',
          'NOT-APPLICABLE': 'Nedá sa použiť',
          'EARLY-PHASE-1': 'Zgodnja fáza 1',
          'PHASE-1': 'Fáza 1',
          'PHASE-1-2': 'Fáza 1/Fáza 2',
          'PHASE-2': 'Fáza 2',
          'PHASE-2-3': 'Fáza 2/Fáza 3',
          'PHASE-3': 'Fáza 3',
          'PHASE-4': 'Fáza 4',
          'NOT-PROVIDED': 'Nie je k dispozícii'
        },
        'INTERVENTIONAL-MODELS': {
          TITLE: 'Intervenčný model',
          'SINGLE-GROUP-ASSIGNMENT': 'Zaraďovanie do jednej skupiny',
          'PARALLEL-ASSIGNMENT': 'Paralelné zaraďovanie',
          'CROSSOVER-ASSIGNMENT': 'Krížové zaraďovanie',
          'FACTORIAL-ASSIGNMENT': 'Faktoriálne zaraďovanie',
          'SEQUENTIAL-ASSIGNMENT': 'Postupné zaraďovanie',
          'NOT-PROVIDED': 'Nie je k dispozícii'
        },
        'ALLOCATION-TYPES': {
          TITLE: 'Typ pridelenia',
          'NOT-APPLICABLE': 'Nelze použít',
          RANDOMISED: 'Randomizovaná',
          NONRANDOMISED: 'Nerandomizovaná',
          'NOT-PROVIDED': 'Nie je k dispozícii'
        },
        'PRIMARY-PURPOSES': {
          TITLE: 'Primárny účel',
          TREATMENT: 'Liečba',
          PREVENTION: 'Prevencia',
          DIAGNOSTIC: 'Diagnostika',
          'SUPPORTIVE-CARE': 'Podporná starostlivosť',
          SCREENING: 'Skríning',
          'HEALTH-SERVICE-RESEARCH': 'Výskum v zdravotníctve',
          'BASIC-SCIENCE': 'Základná veda',
          'DEVICE-FEASIBILITY': 'Dostupnosť vybavenia',
          'EDUCATIONAL-COUNSELLING-TRAINING': 'Vzdelávanie / Poradenstvo / Školenie',
          OTHER: 'Iné',
          'NOT-PROVIDED': 'Nie je k dispozícii'
        },
        MASKING: {
          TITLE: 'Maskovanie',
          NONE: 'Žádný (otevřený štítek)',
          BLINDED: 'Zaslepený (žádné podrobnosti)',
          SINGLE: 'Jednoduché',
          DOUBLE: 'Dvojnásobné',
          TRIPLE: 'Trojnásobné',
          QUADRUPLE: 'Štvornásobné',
          'NOT-PROVIDED': 'Nie je k dispozícii',
          'NOT-APPLICABLE': 'Nelze použít',
        },
        'OBSERVATIONAL-MODELS': {
          TITLE: 'Pozorovací model',
          COHORT: 'Kohorta',
          'CASE-CONTROL': 'Prípad-kontrola',
          'CASE-ONLY': 'Iba prípad',
          'CASE-CROSSOVER': 'Prípad-Crossover',
          'ECOLOGIC-OR-COMMUNITY-STUDY': 'Ekologická alebo spoločenská štúdia',
          'FAMILY-BASED': 'Rodinná',
          'DEFINED-POPULATION': 'Definovaná populácia',
          'NATURAL-HISTORY': 'Prírodná veda',
          OTHER: 'Iné',
          'NOT-PROVIDED': 'Nie je k dispozícii'
        },
        'TIME-PERSPECTIVE': {
          TITLE: 'Časová perspektíva',
          RETROSPECTIVE: 'Retrospektívna',
          PROSPECTIVE: 'Prospektívna',
          'CROSS-SECTIONAL': 'Prierez',
          'RETROSPECTIVE-PROSPECTIVE': 'Retrospektívna/Prospektívna',
          LONGITUDINAL: 'Pozdĺžna',
          OTHER: 'Iné',
          'NOT-PROVIDED': 'Nie je k dispozícii'
        },
        'BIOSPECIMENS-RETAINED': {
          TITLE: 'Zachované biologické vzorky',
          NONE: 'Nič nezachované',
          'SAMPLES-WITH-DNA': 'Vzorky s DNA',
          'SAMPLES-WITHOUT-DNA': 'Vzorky bez DNA',
          'NOT-PROVIDED': 'Nie je k dispozícii'
        },
        'GROUPS-TITLES': {
          'GENERAL-STUDIES': 'Filtre všeobecných štúdií',
          'INTERVENTIONAL-STUDIES': 'Filtre intervenčných štúdií',
          'OBSERVATIONAL-STUDIES': 'Filtre pozorovacích štúdií'
        }
      },
      'DATA-OBJECT': {
        'HELP-PAGE': {
          TITLE: 'Typy a filtre objektov (Anglicky)'
        },
        TYPES: {
          TITLE: 'Typ',
          'TRIAL-REGISTRY-ENTRY': 'Vstup do registra štúdií',
          'REGISTRY-RESULTS-SUMMARY': 'Súhrn výsledkov registra',
          'JOURNAL-ARTICLE': 'Článok v časopise',
          'STUDY-PROTOCOL': 'Protokol štúdie',
          'STUDY-OVERVIEW': 'Prehľad štúdie',
          'PATIENT-CONSENT-INFORMATION-FORMS': 'Súhlas pacienta / informačné formuláre',
          'DATASERVICE-COLLECTION-FORMS': 'Formuláre pre zber údajov',
          'MANUAL-OF-PROCEDURES': 'Príručka postupov',
          'STATISTICAL-ANALYSIS-PLAN': 'Plán štatistickej analýzy',
          'CLINICAL-STUDY-REPORT': 'Správa o klinickej štúdii',
          'DATASERVICE-DESCRIPTION': 'Popis DataService',
          'INDIVIDUAL-PARTICIPANT-DATA': 'Údaje jednotlivých účastníkov',
          'AGGREGATED-DATA': 'Súhrnné údaje',
          'OTHER-STUDY-RESOURCE': 'Iný zdroj štúdie',
          'CONFERENCE-MATERIAL': 'Konferenčný materiál',
          'OTHER-ARTICLE': 'Iný článok',
          'BOOK-OR-CHAPTER': 'Kniha alebo kapitola',
          'OTHER-INFORMATION-RESOURCE': 'Iný zdroj informácií',
          WEBSITE: 'Webová stránka',
          SOFTWARE: 'Softvér',
          OTHER: 'Iné'
        },
        'ACCESS-TYPES': {
          TITLE: 'Typ prístupu',
          'PUBLIC-ONSCREEN-ACCESS': 'Verejný prístup pre zobrazenie',
          'PUBLIC-ONSCREEN-ACCESS-AND-DOWNLOAD': 'Verejný prístup pre zobrazenie a sťahovanie',
          'PUBLIC-ONSCREEN-AND-API-ACCESS': 'Verejný prístup pre zobrazenie a API',
          'PUBLIC-DOWNLOAD-SELF-ATTESTATION': 'Verejné sťahovanie (vlastné potvrdenie)',
          'PUBLIC-ONSCREEN-ACCESS-SELF-ATTESTATION': 'Verejný prístup pre zobrazenie (vlastné potvrdenie)',
          'RESTRICTED-DOWNLOAD': 'Obmedzené sťahovanie',
          'RESTRICTED-ONSCREEN-ACCESS': 'Obmedzený prístup zobrazenia ',
          'CASE-BY-CASE-DOWNLOAD': 'Sťahovanie prípad od prípadu',
          'CASE-BY-CASE-ONSCREEN-ACCESS': 'Prístup pre zobrazenie prípad od prípadu',
          'NON-PUBLIC-ACCESS-NO-DETAILS': 'Neverejný prístup – žiadne podrobnosti',
          OTHER: 'Iné',
          'NOT-YET-KNOWN': 'Ešte nie je známe'
        },
        YEAR: {
          TITLE: 'Rok'
        },
        'GROUPS-TITLES': {
          'GENERAL-DATA-OBJECTS-FILTERS': 'Filtre všeobecných dátových objektov',
          'ADDITIONAL-FILTERS': 'Ďalšie filtre'
        }
      },
      MESSAGES: {
        SELECTING: 'Výber filtra: ',
        DESELECTING: 'Zrušenie výberu filtra: ',
        'STUDIES-GROUP-SELECTION': 'Vybraná skupina filtra štúdií: ',
        'STUDIES-GROUP-DESELECTION': 'Zrušená skupina filtra štúdií: ',
        'DATA-OBJECTS-GROUP-SELECTION': 'Vybraná skupina filtra dátových objektov: ',
        'DATA-OBJECTS-GROUP-DESELECTION': 'Zrušená skupina filtra dátových objektov: ',
      }
    },
    PAGINATOR: {
      'ITEMS-PER-PAGE': 'Položky na stránke',
      'FIRST-PAGE': 'Prvá strana',
      'LAST-PAGE': 'Posledná strana',
      'NEXT-PAGE': 'Ďalšia strana',
      'PREVIOUS-PAGE': 'Predchádzajúca strana',
      RANGE: 'z'
    },
    LANGUAGES: {
      ENGLISH: 'Anglicky',
      FRENCH: 'Francúzsky',
      GERMAN: 'Nemecky',
      CZECH: 'Česky',
      PORTUGUESE: 'Portugalsky',
      POLISH: 'Poľsky',
      ITALIAN: 'Taliansky',
      SLOVAK: 'Slovenský'
    }
  }
};
