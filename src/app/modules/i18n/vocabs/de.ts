// Germany
export const locale = {
  lang: 'de',
  data: {
    TRANSLATOR: {
      SELECT: 'Wähle die Sprache',
    },
    MENU: {
      NEW: 'Neu',
      ACTIONS: 'Aktionen',
      CREATE_POST: 'Erstellen Sie einen neuen Beitrag',
      PAGES: 'Pages',
      FEATURES: 'Eigenschaften',
      APPS: 'Apps',
      DASHBOARD: 'Instrumententafel',
      'MAIN-PAGE': 'Hauptseite',
      'HELP-PAGE': 'Hilfeseite',
      'USER-GUIDE': 'Nutzerhinweise ',
      WIKI: 'Wiki',
      API: 'API',
      HELP: 'Hilfe',
      DEVELOPERS: 'Entwickler',
      LOGO: 'menu-logo-german-light.png',
    },
    MODALS: {
      CLOSE: 'Schließe',
      SAVE: 'Speichern',
      'SAVE-AS': 'Speichern als ',
      LOAD: 'Belastung',
      UPLOAD: 'Laden Sie von Ihrem Gerät hoch',
      DOWNLOAD: 'Herunterladen als JSON',
      'EXPORT-AS': 'Exportieren als',
      SELECT: 'Wählen Sie aus der Liste: ',
      'NO-SESSION': 'Keine gespeicherten Sitzungen',
      OR: 'ODER',
      NAME: 'Name...',
      MESSAGES: {
        'EMPTY-SESSION': 'Ihre aktuelle Sitzung ist leer. Bitte beginnen Sie zuerst mit der Suche.',
        DOWNLOADED: 'Sitzung wurde heruntergeladen.',
        'NO-STUDY': 'Es wurden keine Studiendaten gefunden.'
      }
    },
    'SEARCH-PAGE': {
      INITIAL: 'Bitte starte die Suche.',
      RESULTS: 'Ergebnisse:',
      'NO-RESULTS': 'Es wurde nichts gefunden. Bitte versuchen Sie es noch einmal...',
      'SPENT-TIME': 'Gebrauchte Zeit',
      IN: 'in',
      LOADING: 'Bitte warten...',
      'SHOW-MORE': '[Zeige mehr]',
      'SHOW-LESS': '[Zeige weniger]',
      'STUDY-DETAILS': 'Zeige Studiendetails',
      STUDY: {
        DESCRIPTION: 'Zeige Studienbeschreibung',
        'STUDY-TYPE': 'Studientype: ',
        'STUDY-STATUS': 'Studienstatus: ',
        'DATA-SHARING': 'Verklaring over het delen van gegevens',
        PROVENANCE: 'Herkomst: ',
        'DATA-OBJECT': {
          'ACCESS-URL': 'Zugangs URL: ',
          'OBJECT-URL': 'Objekt URL: ',
          PROVENANCE: 'Herkomst: ',
          'CITATION-URL': 'Citatie URL: '
        }
      }
    },
    TOOLTIPS: {
      DOWNLOAD: 'Herunterladen',
      UPLOAD: 'Hochladen',
      CLEAR: 'Clear',
      'SAVE-AS-PDF': 'Speichere als PDF (Englisch)',
      'HELP-PAGE': 'Hilfeseite',
      'USER-GUIDE': 'Nutzerhinweise',
      LANGUAGE: 'Sprache',
      FILTERS: 'Filter',
      'SHOW-UPLOADED-RESULTS': 'Zeige hochgeladene Ergebnisse',
      CLOSE: 'Schließe',
      RESET: 'Reset',
      HELP: 'Hilfe',
      VIEW: 'Ansicht',
      COPY: 'Kopieren',
      'ACTIVE-FILTERS-PANEL': 'Panel für active Filter'
    },
    'SEARCH-PANEL': {
      'SELECT-MODE': 'Auswählmodus',
      'STUDY-CHARACTERISTICS': {
        TITLE: 'Studiencharakteristika',
        'TITLE-CONTAINS': 'Titel enthält...',
        'LOGICAL-OPERATOR': 'Logischer Operator',
        'TOPIC-INCLUDES': 'Topic enthält...',
        AND: 'UND',
        OR: 'ODER'
      },
      'SPECIFIC-STUDY': {
        TITLE: 'Spezifische Studie',
        'STUDY-ID-TYPE': 'Typ der Studien-ID',
        'SPECIFIC-STUDY-PARAMETER': 'Spezifischer Studienparameter...'
      },
      'VIA-PUBLISHED-PAPER': {
        TITLE: 'Via Publikation',
        'SEARCH-PAPER-BY': 'Suche Publikation via',
        'INTERESTED-PAPER-PARAMETER': 'Interessierende Publikationsparameter...',
        'SEARCH-BY-TITLE': 'Titel'
      },
    },
    FOOTER: {
      DISCLAIMER: 'Disclaimer',
      'DATA-SOURCES': 'Quellen und Mitwirkende',
      CONTACT: 'Kontaktiere uns',
      NEWSLETTER: 'ECRIN Newsletter',
      'FOR-DEVELOPERS': 'Für Entwickler'
    },
    SNACKBAR: {
      CLOSE: 'Schließe',
      UPLOAD: {
        'SUCCESS-MESSAGE': 'Ergebnisse der Nutzersession wurden erfolgreich hochgeladen!',
        'ERROR-MESSAGE': 'Sie haben die Ergebnisse der letzten Session nicht hochgeladen!',
      },
      CLEAR: {
        MESSAGE: 'Suchresultate warden gesäubert!'
      },
      SEARCH: {
        'ERROR-MESSAGE': 'Etwas ist schiefgelaufen... Bitte versuche es noch einmal.'
      }
    },
    'FILTERS-PANEL': {
      TITLE: 'Filter',
      STUDIES: 'Studien',
      'DATA-OBJECTS': 'Datenobjekt'
    },
    DISCLAIMER: {
      TITLE: 'Disclaimer (Englisch)'
    },
    'DATA-SOURCES': {
      TITLE: 'Datenquellen und beitragende Organisationen (Englisch)'
    },
    'HELP-PAGE': {
      TITLE: 'Hilfeseite (Englisch)'
    },
    'USER-GUIDE': {
      TITLE: 'Nutzerhinweise (Englisch)'
    },
    API: {
      TITLE: 'API',
      INTRO: 'Wir unterstützen drei Typen von API:',
      'SPECIFIC-STUDY-API': 'API via spezifischer Studie',
      'STUDY-CHARACTERISTICS-API': 'API via Studiencharakeristika',
      'VIA-PUBLISHED-PAPER-API': 'API via Publikation',
      MESSAGES: {
        START: 'Please starte die Suche...',
        'ERROR-TITLE': 'Studie nicht gefunden oder es gibt einen Serverfehler.',
        'ERROR-DESCRIPTION': 'Versuch es später nochmal oder checke die Richtigkeit der API-Parameter.',
        LOADING: 'Suche ….. Bitte warten.',
        'NOT-FOUND': 'Die angeforderte Studie wurde nicht gefunden.'
      }
    },
    'SPECIFIC-STUDY-API': {
      TITLE: 'API via spezifischer Studie',
      HELP: {
        TITLE: 'API via spezifischer Studie - Hilfe (Englisch)'
      },
      URL: 'API via spezifischer Studie - URL: /specific-study/type/value',
      STUDY: {
        TITLE: 'Studientitel:',
        STATUS: 'Studienstatus:',
        TYPE: 'Studientype:'
      }
    },
    'STUDY-CHARACTERISTICS-API': {
      TITLE: 'API via Studiencharakeristika',
      STUDY: {
        TITLE: 'Studientitel',
        STATUS: 'Studienstatus',
        TYPE: 'Studientype',
        DETAILS: 'Details'
      },
      URL: 'API via Studiencharakeristika - URL: /study-characteristics/title-contains/and|or/topics-contains',
      HELP: {
        TITLE: 'API via Studiencharakeristika - Hilfe (Englisch)'
      }
    },
    'VIA-PUBLISHED-PAPER-API': {
      TITLE: 'API via Publikation',
      STUDY: {
        TITLE: 'Studientitel',
        STATUS: 'Studienstatus',
        TYPE: 'Studientype',
        DETAILS: 'Details'
      },
      URL: 'API via Publikation - URL: /via-published-paper/type/value',
      HELP: {
        TITLE: 'API via Publikation - Hilfe (Englisch)'
      }
    },
    BUTTONS: {
      SEARCH: 'Suche',
      'TRY-IT': 'Versuche es!',
      CLOSE: 'Schließe',
      'SHOW-MORE': 'Zeige mehr...',
      'VIEW-DETAILS': 'Zeige die Detals',
      HELP: 'Hilfe',
      'CLEAR-ALL': 'Lösche alle Filter',
      'SELECT-ALL': 'Selektiere alle',
      'DESELECT-ALL': 'Lösche alle'
    },
    'STUDY-PAGE': {
      'STUDY-DESCRIPTION': 'Studienbeschreibung',
      'STUDY-STATUS': 'Studienstatus',
      'STUDY-TYPE': 'Studientype',
      'ALLOCATION-TYPE': 'Zuordnungstyp',
      'GENDER-ELIGIBILITY': 'Geschlecht',
      'STUDY-IDENTIFIERS': {
        TITLE: 'Studienidentifizierer',
        TYPE: 'Identifier-Typ:',
        VALUE: 'Identifier-Wert:',
        DATE: 'Identifier-Datum:',
        ORGANIZATION: 'Identifier-Organisation:',
        LINK: 'Identifier-Link:'
      },
      'STUDY-ORGANIZATIONS': 'Studienorganisation',
      'DATA-OBJECTS': {
        TITLE: 'Liste zugehöriger Datenobjekte',
        'SHOW-MORE': '[Zeige mehr]',
        'SHOW-LESS': '[Zeige weniger]',
        'ACCESS-URL': 'Zugangs URL: ',
        'OBJECT-URL': 'Objekt URL: '
      },
    },
    FILTERS: {
      STUDIES: {
        TYPES: {
          TITLE: 'Typ',
          'NOT-YET-KNOWN': 'Noch nicht wissen',
          INTERVENTIONAL: 'Interventionell',
          OBSERVATIONAL: 'Beobachtungsstudie',
          'OBSERVATIONAL-PATIENT-REGISTRY': 'Patientenregister',
          'EXPANDED-ACCESS': 'Erweiterter Zugriff',
          'FUNDED-PROGRAMME': 'Gefördertes Programm',
          OTHER: 'Andere'
        },
        STATUSES: {
          TITLE: 'Status',
          WITHDRAWN: 'Withdrawn',
          AVAILABLE: 'Verfügbar',
          WITHHELD: 'Withheld',
          RECRUITING: 'Rekrutierend',
          'ACTIVE-NOT-RECRUITING': 'Aktiv, nicht rekrutierend',
          'NOT-YET-RECRUITING': 'Noch nicht rekrutierend',
          'NO-LONGER-AVAILABLE': 'Nicht länger verfügbar',
          SUSPENDED: 'Suspendiert',
          'ENROLLING-BY-INVITATION': 'Rekrutierung durch Einladung',
          'APPROVED-FOR-MARKETING': 'Zulassung für Marketing',
          COMPLETED: 'Vollständig',
          TERMINATED: 'Beendet',
          OTHER: 'Andere',
          ONGOING: 'Laufend',
          'UNKNOWN-STATUS': 'Unbekannter Status'
        },
        GENDER: {
          TITLE: 'Geschlecht',
          ALL: 'Alle',
          FEMALE: 'Weiblich',
          MALE: 'Männlich',
          'NOT-PROVIDED': 'Nicht verfügbar',
          'UNKNOWN-STATUS': 'Unbekannter Status'
        },
        PHASES: {
          TITLE: 'Phase',
          'NOT-APPLICABLE': 'Nicht anwendbar',
          'EARLY-PHASE-1': 'Früh Phase 1',
          'PHASE-1': 'Phase 1',
          'PHASE-1-2': 'Phase 1/Phase 2',
          'PHASE-2': 'Phase 2',
          'PHASE-2-3': 'Phase 2/Phase 3',
          'PHASE-3': 'Phase 3',
          'PHASE-4': 'Phase 4',
          'NOT-PROVIDED': 'Nicht verfügbar'
        },
        'INTERVENTIONAL-MODELS': {
          TITLE: 'Interventionsmodell',
          'SINGLE-GROUP-ASSIGNMENT': 'Einzelgruppe',
          'PARALLEL-ASSIGNMENT': 'Parallele Zuordnung',
          'CROSSOVER-ASSIGNMENT': 'Crossover Zuordnung',
          'FACTORIAL-ASSIGNMENT': 'Faktorielle Zuordnung',
          'SEQUENTIAL-ASSIGNMENT': 'Sequentielle Zuordnung',
          'NOT-PROVIDED': 'Nicht verfügbar'
        },
        'ALLOCATION-TYPES': {
          TITLE: 'Type der Zuordnung',
          'NOT-APPLICABLE': 'Unzutreffend',
          RANDOMISED: 'Randomisiert',
          NONRANDOMISED: 'Nicht rnadomisiert',
          'NOT-PROVIDED': 'Nicht verfügbar'
        },
        'PRIMARY-PURPOSES': {
          TITLE: 'Primärer Zweck',
          TREATMENT: 'Behandlung',
          PREVENTION: 'Prävention',
          DIAGNOSTIC: 'Diagnose',
          'SUPPORTIVE-CARE': 'Unterstützende Behandlung',
          SCREENING: 'Screening',
          'HEALTH-SERVICE-RESEARCH': 'Gesundheitsforschung',
          'BASIC-SCIENCE': 'Basiswissenschaften',
          'DEVICE-FEASIBILITY': 'Geräte Feasibility',
          'EDUCATIONAL-COUNSELLING-TRAINING': 'Bildung/Counselling/Training',
          OTHER: 'Andere',
          'NOT-PROVIDED': 'Nicht verfügbar'
        },
        MASKING: {
          TITLE: 'Maskiert',
          NONE: 'Keine (Open Label)',
          BLINDED: 'Verblindet (keine Angaben)',
          SINGLE: 'Einfach',
          DOUBLE: 'Doppelt',
          TRIPLE: 'Dreifach',
          QUADRUPLE: 'Vierfach',
          'NOT-PROVIDED': 'Nicht verfügbar',
          'NOT-APPLICABLE': 'Nicht anwendbar',
        },
        'OBSERVATIONAL-MODELS': {
          TITLE: 'Beobachtungsmodell',
          COHORT: 'Kohorte',
          'CASE-CONTROL': 'Fall-Kontroll',
          'CASE-ONLY': 'Nur Fälle',
          'CASE-CROSSOVER': 'Fall-Crossover',
          'ECOLOGIC-OR-COMMUNITY-STUDY': 'Umwelt- oder Communitystudie',
          'FAMILY-BASED': 'Familienbasiert',
          'DEFINED-POPULATION': 'Definierte Population',
          'NATURAL-HISTORY': 'Natürlicher Verlauf',
          OTHER: 'Andere',
          'NOT-PROVIDED': 'Nicht verfügbar'
        },
        'TIME-PERSPECTIVE': {
          TITLE: 'Zeitperspektive',
          RETROSPECTIVE: 'Retrospektiv',
          PROSPECTIVE: 'Prospektiv',
          'CROSS-SECTIONAL': 'Cross-sektional',
          'RETROSPECTIVE-PROSPECTIVE': 'Retrospektiv/Prospektiv',
          LONGITUDINAL: 'Longitudinal',
          OTHER: 'Andere',
          'NOT-PROVIDED': 'Nicht verfügbar'
        },
        'BIOSPECIMENS-RETAINED': {
          TITLE: 'Bioproben einbehalten',
          NONE: 'Nicht einbehaltenn',
          'SAMPLES-WITH-DNA': 'Proben mit DNA',
          'SAMPLES-WITHOUT-DNA': 'Proben ohne DNA',
          'NOT-PROVIDED': 'Nicht verfügbar'
        },
        'GROUPS-TITLES': {
          'GENERAL-STUDIES': 'Allgemeine Studienfilter',
          'INTERVENTIONAL-STUDIES': 'Filter zu interventionellen Studien',
          'OBSERVATIONAL-STUDIES': 'Filter zu Beobachtungsstudien'
        }
      },
      'DATA-OBJECT': {
        'HELP-PAGE': {
          TITLE: 'Objekttypen und Filter (Englisch)'
        },
        TYPES: {
          TITLE: 'Typ',
          'TRIAL-REGISTRY-ENTRY': 'Eintrag in Studieregister',
          'REGISTRY-RESULTS-SUMMARY': 'Ergbniszusammenfassung im Register',
          'JOURNAL-ARTICLE': 'Zeitschriftenartikel',
          'STUDY-PROTOCOL': 'Studienprotokoll',
          'STUDY-OVERVIEW': 'Studienüberblick',
          'PATIENT-CONSENT-INFORMATION-FORMS': 'Patienteneinwilligung/-information',
          'DATASERVICE-COLLECTION-FORMS': 'Datensammlungsbogen',
          'MANUAL-OF-PROCEDURES': 'Prozedurenmanual',
          'STATISTICAL-ANALYSIS-PLAN': 'Statistischer Analyseplan',
          'CLINICAL-STUDY-REPORT': 'Klinischer Studienreport',
          'DATASERVICE-DESCRIPTION': 'Beschreibung des Datenservices',
          'INDIVIDUAL-PARTICIPANT-DATA': 'Individuelle Studienteilnehmerdaten',
          'AGGREGATED-DATA': 'Aggregierte Daten',
          'OTHER-STUDY-RESOURCE': 'Andere Studienquellen',
          'CONFERENCE-MATERIAL': 'Konferenzmaterial',
          'OTHER-ARTICLE': 'Anderer Artikel',
          'BOOK-OR-CHAPTER': 'Buch oder Buchkapitel',
          'OTHER-INFORMATION-RESOURCE': 'Andere Informationsquelle',
          WEBSITE: 'Webseite',
          SOFTWARE: 'Software',
          OTHER: 'Andere'
        },
        'ACCESS-TYPES': {
          TITLE: 'Zugangstyp',
          'PUBLIC-ONSCREEN-ACCESS': 'Öffentlicher Bildschirmzugang',
          'PUBLIC-ONSCREEN-ACCESS-AND-DOWNLOAD': 'Öffentlicher Bildschirmzugang mit Herunterladen',
          'PUBLIC-ONSCREEN-AND-API-ACCESS': 'Öffentlicher Bildschirm und API Zugang',
          'PUBLIC-DOWNLOAD-SELF-ATTESTATION': 'Öffentliches Herunterladen (Selbstattestierung)',
          'PUBLIC-ONSCREEN-ACCESS-SELF-ATTESTATION': 'Öffentlicher Bildschirmzugang (Selbstattestierung)',
          'RESTRICTED-DOWNLOAD': 'Eingeschränktes Herunterladen',
          'RESTRICTED-ONSCREEN-ACCESS': 'Eingeschränkter Bildschirmzugang',
          'CASE-BY-CASE-DOWNLOAD': 'Fallweises Herunterladen',
          'CASE-BY-CASE-ONSCREEN-ACCESS': 'Fallweiser Bildschirmzugang',
          'NON-PUBLIC-ACCESS-NO-DETAILS': 'Kein öffentlicher Zugang – keine Details',
          OTHER: 'Andere',
          'NOT-YET-KNOWN': 'Noch nicht wissen'
        },
        YEAR: {
          TITLE: 'Jahr'
        },
        'GROUPS-TITLES': {
          'GENERAL-DATA-OBJECTS-FILTERS': 'Allgemeine Datenobjektfilter',
          'ADDITIONAL-FILTERS': 'Zuätzliche Filter'
        }
      },
      MESSAGES: {
        SELECTING: 'Selektiere Filter: ',
        DESELECTING: 'Deselektiere Filter: ',
        'STUDIES-GROUP-SELECTION': 'Studienfiltergruppe selektiert: ',
        'STUDIES-GROUP-DESELECTION': 'Studienfiltergruppe deselektiert: ',
        'DATA-OBJECTS-GROUP-SELECTION': 'Datenobjektfiltergruppe selektiert: ',
        'DATA-OBJECTS-GROUP-DESELECTION': 'Datenobjektfiltergruppe deselektiert: ',
      }
    },
    PAGINATOR: {
      'ITEMS-PER-PAGE': 'Items pro Seite',
      'FIRST-PAGE': 'Erste Seite',
      'LAST-PAGE': 'Letzte Seite',
      'NEXT-PAGE': 'Nächste Seite',
      'PREVIOUS-PAGE': 'Vorherige Seite',
      RANGE: 'von'
    },
    LANGUAGES: {
      ENGLISH: 'Englisch',
      FRENCH: 'Französisch',
      GERMAN: 'Deutsch',
      CZECH: 'Czech',
      POLISH: 'Polnische',
      PORTUGUESE: 'Portugiesisch',
      ITALIAN: 'Italienische',
      SLOVAK: 'Slowakische'
    }
  }
};
