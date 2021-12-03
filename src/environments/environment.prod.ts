export const environment = {
  production: true,
  appVersion: 'v.0.7.1',

  // HOSTNAME
  hostname: 'http://localhost:5100/',
  // hostname: 'https://api.ecrin-rms.org/',

  // Back-end configs
  queryBaseUrl: 'api/v1/search',
  rawQueryBaseUrl: 'api/v1/raw-sql-search',
  // queryBaseUrl: 'mdr/api/v1/search',
  // rawQueryBaseUrl: 'mdr/api/v1/raw-sql-search',

  // API Query URLs
  specificStudyUrl: '/specific-study',
  studyCharacteristicsUrl: '/study-characteristics',
  viaPublishedPaperUrl: '/via-published-paper',
  studyIdUrl: '/study-id',
};
