export const environment = {
  production: true,
  appVersion: 'v. 0.5.1',

  // HOSTNAME
  // hostname: 'http://localhost:8000/',
  hostname: 'http://51.210.99.18:8001/',

  // ElasticSearch
  elasticSearchStudyCharacteristicsUrl: 'search/study-characteristics',
  elasticSearchSpecificStudyUrl: 'search/specific-study',
  elasticSearchViaPublishedPaperUrl: 'search/via-published-paper',
  elasticSearchAllStudyCharacteristicsUrl: 'search/all-study-characteristics',
  elasticSearchAllSpecificStudyUrl: 'search/all-specific-study',
  elasticSearchAllViaPublishedPaperUrl: 'search/all-via-published-paper',
  elasticSearchSelectedStudyUrl: 'search/selected-study',

  // Rest API
  elasticSearchStudyCharacteristicsApiUrl: 'rest-api/v1/study-characteristics',
  elasticSearchSpecificStudyApiUrl: 'rest-api/v1/specific-study',
  elasticSearchViaPublishedPaperApiUrl: 'rest-api/v1/via-published-paper',
  elasticSearchSelectedStudyApiUrl: 'rest-api/v1/selected-study',

  // ES query based APIs
  elasticQueryBasedStudyUrl: 'es-query-based/v1/studies',
  elasticQueryBasedObjectUrl: 'es-query-based/v1/objects',

};
