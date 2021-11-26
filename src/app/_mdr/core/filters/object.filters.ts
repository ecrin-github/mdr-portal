import {FiltersGroupsInterface, FiltersParamsInterface, FiltersSubgroupsInterface} from '../interfaces/filters/filters.interface';


const dataObjectTypes: Array<FiltersParamsInterface> = [
  {
    id: 13,
    value: 'Trial registry entry',
    name: 'Trial registry entry',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.TRIAL-REGISTRY-ENTRY'
  },
  {
    id: 28,
    value: 'Registry results summary',
    name: 'Registry results summary',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.REGISTRY-RESULTS-SUMMARY',
  },
  {
    id: 12,
    value: 'Journal article',
    name: 'Journal article',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.JOURNAL-ARTICLE',
  },
  {
    id: 11,
    value: 'Study protocol',
    name: 'Study protocol',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.STUDY-PROTOCOL',
  },
  {
    id: 38,
    value: 'Study overview',
    name: 'Study overview',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.STUDY-OVERVIEW',
  },
  {
    id: 18,
    value: 'Patient consent / information forms',
    name: 'Patient consent / information forms',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.PATIENT-CONSENT-INFORMATION-FORMS',
  },
  {
    id: 21,
    value: 'DataService collection forms',
    name: 'DataService collection forms',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.DATASERVICE-COLLECTION-FORMS',
  },
  {
    id: 36,
    value: 'Manual of procedures',
    name: 'Manual of procedures',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.MANUAL-OF-PROCEDURES',
  },
  {
    id: 22,
    value: 'Statistical analysis plan',
    name: 'Statistical analysis plan',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.STATISTICAL-ANALYSIS-PLAN',
  },
  {
    id: 26,
    value: 'Clinical study report',
    name: 'Clinical study report',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.CLINICAL-STUDY-REPORT',
  },
  {
    id: 32,
    value: 'DataService description',
    name: 'DataService description',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.DATASERVICE-DESCRIPTION',
  },
  {
    id: 80,
    value: 'Individual participant data',
    name: 'Individual participant data',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.INDIVIDUAL-PARTICIPANT-DATA',
  },
  {
    id: 69,
    value: 'Aggregated data',
    name: 'Aggregated data',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.AGGREGATED-DATA',
  },
  {
    id: 14,
    value: 'Other study resource',
    name: 'Other study resource',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.OTHER-STUDY-RESOURCE',
  },
  {
    id: 106,
    value: 'Conference material',
    name: 'Conference material',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.CONFERENCE-MATERIAL',
  },
  {
    id: 16,
    value: 'Other article',
    name: 'Other article',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.OTHER-ARTICLE',
  },
  {
    id: 102,
    value: 'Book or chapter',
    name: 'Book or chapter',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.BOOK-OR-CHAPTER',
  },
  {
    id: 18,
    value: 'Other information resource',
    name: 'Other information resource',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.OTHER-INFORMATION-RESOURCE',
  },
  {
    id: 134,
    value: 'Website',
    name: 'Website',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.WEBSITE',
  },
  {
    id: 20,
    value: 'Software',
    name: 'Software',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.SOFTWARE',
  },
  {
    id: 21,
    value: 'Other',
    name: 'Other',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.OTHER',
  }
];

const dataObjectAccessType: Array<FiltersParamsInterface> = [
  {
    id: 12,
    value: 'Public on-screen access',
    name: 'Public on-screen access',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.PUBLIC-ONSCREEN-ACCESS',
  },
  {
    id: 11,
    value: 'Public on-screen access and download',
    name: 'Public on-screen access and download',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.PUBLIC-ONSCREEN-ACCESS-AND-DOWNLOAD',
  },
  {
    id: 20,
    value: 'Public on-screen and API access',
    name: 'Public on-screen and API access',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.PUBLIC-ONSCREEN-AND-API-ACCESS',
  },
  {
    id: 13,
    value: 'Public download (self-attestation)',
    name: 'Public download (self-attestation)',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.PUBLIC-DOWNLOAD-SELF-ATTESTATION',
  },
  {
    id: 14,
    value: 'Public on-screen access (self-attestation)',
    name: 'Public on-screen access (self-attestation)',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.PUBLIC-ONSCREEN-ACCESS-SELF-ATTESTATION',
  },
  {
    id: 15,
    value: 'Restricted download',
    name: 'Restricted download',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.RESTRICTED-DOWNLOAD',
  },
  {
    id: 16,
    value: 'Restricted on-screen access',
    name: 'Restricted on-screen access',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.RESTRICTED-ONSCREEN-ACCESS',
  },
  {
    id: 17,
    value: 'Case by case download',
    name: 'Case by case download',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.CASE-BY-CASE-DOWNLOAD',
  },
  {
    id: 18,
    value: 'Case by case on-screen access',
    name: 'Case by case on-screen access',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.CASE-BY-CASE-ONSCREEN-ACCESS',
  },
  {
    id: 19,
    value: 'Non public access - no details',
    name: 'Non public access - no details',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.NON-PUBLIC-ACCESS-NO-DETAILS',
  },
  {
    id: 90,
    value: 'Other',
    name: 'Other',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.OTHER',
  },
  {
    id: 0,
    value: 'Not yet known',
    name: 'Not yet known',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.NOT-YET-KNOWN',
  }
];


const DataObjectFiltersGeneral: Array<FiltersSubgroupsInterface> = [
  {
    id: 1,
    subgroupName: 'Object Type',
    checkboxName: 'object_type',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.TYPES.TITLE',
    values: dataObjectTypes,
    type: 'data-object'
  },
  {
    id: 2,
    subgroupName: 'Access type',
    checkboxName: 'access_type',
    isSelected: false,
    translate: 'FILTERS.DATA-OBJECT.ACCESS-TYPES.TITLE',
    values: dataObjectAccessType,
    type: 'data-object'
  }
];


export const DataObjectFilters: Array<FiltersGroupsInterface> = [
  {
    id: 1,
    groupName: 'General data objects filters',
    translate: 'FILTERS.DATA-OBJECT.GROUPS-TITLES.GENERAL-DATA-OBJECTS-FILTERS',
    subgroups: DataObjectFiltersGeneral,
  }
];
