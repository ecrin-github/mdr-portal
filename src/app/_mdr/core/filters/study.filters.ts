import {FiltersGroupsInterface, FiltersParamsInterface, FiltersSubgroupsInterface} from '../interfaces/filters/filters.interface';


const studyTypes: Array<FiltersParamsInterface> = [
  {
    id: 11,
    value: 'Interventional',
    name: 'Interventional',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TYPES.INTERVENTIONAL',
  },
  {
    id: 12,
    value: 'Observational',
    name: 'Observational',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TYPES.OBSERVATIONAL',
  },
  {
    id: 13,
    value: 'Observational patient registry',
    name: 'Observational patient registry',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TYPES.OBSERVATIONAL-PATIENT-REGISTRY',
  },
  {
    id: 14,
    value: 'Expanded access',
    name: 'Expanded access',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TYPES.EXPANDED-ACCESS',
  },
  {
    id: 15,
    value: 'Funded programme',
    name: 'Funded programme',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TYPES.FUNDED-PROGRAMME',
  },
  {
    id: 16,
    value: 'Other',
    name: 'Other',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TYPES.OTHER',
  },
  {
    id: 0,
    value: 'Not yet known',
    name: 'Not yet known',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TYPES.NOT-YET-KNOWN',
  }
];

const studyStatuses: Array<any> = [
  {
    id: 11,
    value: 'Withdrawn',
    name: 'Withdrawn',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.WITHDRAWN',
  },
  {
    id: 12,
    value: 'Available',
    name: 'Available',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.AVAILABLE',
  },
  {
    id: 13,
    value: 'Withheld',
    name: 'Withheld',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.WITHHELD',
  },
  {
    id: 14,
    value: 'Recruiting',
    name: 'Recruiting',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.RECRUITING',
  },
  {
    id: 15,
    value: 'Active, not recruiting',
    name: 'Active, not recruiting',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.ACTIVE-NOT-RECRUITING',
  },
  {
    id: 16,
    value: 'Not yet recruiting',
    name: 'Not yet recruiting',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.NOT-YET-RECRUITING',
  },
  {
    id: 17,
    value: 'No longer available',
    name: 'No longer available',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.NO-LONGER-AVAILABLE',
  },
  {
    id: 18,
    value: 'Suspended',
    name: 'Suspended',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.SUSPENDED',
  },
  {
    id: 19,
    value: 'Enrolling by invitation',
    name: 'Enrolling by invitation',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.ENROLLING-BY-INVITATION',
  },
  {
    id: 20,
    value: 'Approved for marketing',
    name: 'Approved for marketing',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.APPROVED-FOR-MARKETING',
  },
  {
    id: 21,
    value: 'Completed',
    name: 'Completed',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.COMPLETED',
  },
  {
    id: 22,
    value: 'Terminated',
    name: 'Terminated',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.TERMINATED',
  },
  {
    id: 24,
    value: 'Other',
    name: 'Other',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.OTHER',
  },
  {
    id: 25,
    value: 'Ongoing',
    name: 'Ongoing',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.ONGOING',
  },
  {
    id: 0,
    value: 'Unknown status',
    name: 'Unknown status',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.UNKNOWN-STATUS',
  }
];

const genderEligibility: Array<FiltersParamsInterface> = [
  {
    id: 900,
    value: 'All',
    name: 'All',
    isSelected: false,
    translate: 'FILTERS.STUDIES.GENDER.ALL',
  },
  {
    id: 905,
    value: 'Female',
    name: 'Female',
    isSelected: false,
    translate: 'FILTERS.STUDIES.GENDER.FEMALE',
  },
  {
    id: 910,
    value: 'Male',
    name: 'Male',
    isSelected: false,
    translate: 'FILTERS.STUDIES.GENDER.MALE',
  },
  {
    id: 0,
    value: 'Unknown status',
    name: 'Unknown status',
    isSelected: false,
    translate: 'FILTERS.STUDIES.GENDER.UNKNOWN-STATUS',
  },
  {
    id: 915,
    value: 'Not provided',
    name: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.GENDER.NOT-PROVIDED',
  }
];

const StudyFiltersGeneral: Array<FiltersSubgroupsInterface> = [
  {
    id: 1,
    subgroupName: 'Study Type',
    checkboxName: 'study_type',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TYPES.TITLE',
    values: studyTypes,
    type: 'study'
  },
  {
    id: 2,
    subgroupName: 'Study Status',
    checkboxName: 'study_status',
    isSelected: false,
    translate: 'FILTERS.STUDIES.STATUSES.TITLE',
    values: studyStatuses,
    type: 'study'
  },
  {
    id: 3,
    subgroupName: 'Gender eligibility',
    checkboxName: 'gender_elig',
    isSelected: false,
    translate: 'FILTERS.STUDIES.GENDER.TITLE',
    values: genderEligibility,
    type: 'study'
  }
];


const studyPhase: Array<FiltersParamsInterface> = [
  {
    id: 100,
    name: 'Not applicable',
    value: 'Not applicable',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.NOT-APPLICABLE',
  },
  {
    id: 105,
    name: 'Early phase 1',
    value: 'Early phase 1',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.EARLY-PHASE-1',
  },
  {
    id: 110,
    name: 'Phase 1',
    value: 'Phase 1',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.PHASE-1',
  },
  {
    id: 115,
    name: 'Phase 1/2',
    value: 'Phase 1/2',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.PHASE-1-2',
  },
  {
    id: 120,
    name: 'Phase 2',
    value: 'Phase 2',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.PHASE-2',
  },
  {
    id: 125,
    name: 'Phase 2/3',
    value: 'Phase 2/3',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.PHASE-2-3',
  },
  {
    id: 130,
    name: 'Phase 3',
    value: 'Phase 3',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.PHASE-3',
  },
  {
    id: 135,
    name: 'Phase 4',
    value: 'Phase 4',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.PHASE-4',
  },
  {
    id: 140,
    name: 'Not provided',
    value: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PHASES.NOT-PROVIDED',
  }
];

const interventionalModel: Array<FiltersParamsInterface> = [
  {
    id: 300,
    name: 'Single group assignment',
    value: 'Single group assignment',
    isSelected: false,
    translate: 'FILTERS.STUDIES.INTERVENTIONAL-MODELS.SINGLE-GROUP-ASSIGNMENT',
  },
  {
    id: 305,
    name: 'Parallel assignment',
    value: 'Parallel assignment',
    isSelected: false,
    translate: 'FILTERS.STUDIES.INTERVENTIONAL-MODELS.PARALLEL-ASSIGNMENT',
  },
  {
    id: 310,
    name: 'Crossover assignment',
    value: 'Crossover assignment',
    isSelected: false,
    translate: 'FILTERS.STUDIES.INTERVENTIONAL-MODELS.CROSSOVER-ASSIGNMENT',
  },
  {
    id: 315,
    name: 'Factorial assignment',
    value: 'Factorial assignment',
    isSelected: false,
    translate: 'FILTERS.STUDIES.INTERVENTIONAL-MODELS.FACTORIAL-ASSIGNMENT',
  },
  {
    id: 320,
    name: 'Sequential assignment',
    value: 'Sequential assignment',
    isSelected: false,
    translate: 'FILTERS.STUDIES.INTERVENTIONAL-MODELS.SEQUENTIAL-ASSIGNMENT',
  },
  {
    id: 325,
    name: 'Not provided',
    value: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.INTERVENTIONAL-MODELS.NOT-PROVIDED',
  }
];

const allocationType: Array<FiltersParamsInterface> = [
  {
    id: 200,
    name: 'Not applicable',
    value: 'Not applicable',
    isSelected: false,
    translate: 'FILTERS.STUDIES.ALLOCATION-TYPES.NOT-APPLICABLE',
  },
  {
    id: 205,
    name: 'Randomised',
    value: 'Randomised',
    isSelected: false,
    translate: 'FILTERS.STUDIES.ALLOCATION-TYPES.RANDOMISED',
  },
  {
    id: 210,
    name: 'Nonrandomised',
    value: 'Nonrandomised',
    isSelected: false,
    translate: 'FILTERS.STUDIES.ALLOCATION-TYPES.NONRANDOMISED',
  },
  {
    id: 215,
    name: 'Not provided',
    value: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.ALLOCATION-TYPES.NOT-PROVIDED',
  }
];

const primaryPurpose: Array<FiltersParamsInterface> = [
  {
    id: 400,
    name: 'Treatment',
    value: 'Treatment',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.TREATMENT',
  },
  {
    id: 405,
    name: 'Prevention',
    value: 'Prevention',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.PREVENTION',
  },
  {
    id: 410,
    name: 'Diagnostic',
    value: 'Diagnostic',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.DIAGNOSTIC',
  },
  {
    id: 415,
    name: 'Supportive care',
    value: 'Supportive care',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.SUPPORTIVE-CARE',
  },
  {
    id: 420,
    name: 'Screening',
    value: 'Screening',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.SCREENING',
  },
  {
    id: 425,
    name: 'Health services research',
    value: 'Health services research',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.HEALTH-SERVICE-RESEARCH',
  },
  {
    id: 430,
    name: 'Basic science',
    value: 'Basic science',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.BASIC-SCIENCE',
  },
  {
    id: 435,
    name: 'Device feasibility',
    value: 'Device feasibility',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.DEVICE-FEASIBILITY',
  },
  {
    id: 450,
    name: 'Educational / counselling / training',
    value: 'Educational / counselling / training',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.EDUCATIONAL-COUNSELLING-TRAINING',
  },
  {
    id: 440,
    name: 'Other',
    value: 'Other',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.OTHER',
  },
  {
    id: 445,
    name: 'Not provided',
    value: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.NOT-PROVIDED',
  }
];

const masking: Array<FiltersParamsInterface> = [
  {
    id: 500,
    name: 'None (Open Label)',
    value: 'None (Open Label)',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.NONE',
  },
  {
    id: 502,
    name: 'Blinded (no details)',
    value: 'Blinded (no details)',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.BLINDED',
  },
  {
    id: 505,
    name: 'Single',
    value: 'Single',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.SINGLE',
  },
  {
    id: 510,
    name: 'Double',
    value: 'Double',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.DOUBLE',
  },
  {
    id: 515,
    name: 'Triple',
    value: 'Triple',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.TRIPLE',
  },
  {
    id: 520,
    name: 'Quadruple',
    value: 'Quadruple',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.QUADRUPLE',
  },
  {
    id: 522,
    name: 'Not applicable',
    value: 'Not applicable',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.NOT-APPLICABLE',
  },
  {
    id: 525,
    name: 'Not provided',
    value: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.NOT-PROVIDED',
  }
];

const StudyFiltersInterventional: Array<FiltersSubgroupsInterface> = [
  {
    id: 1,
    subgroupName: 'Phase',
    checkboxName: 'phase',
    isSelected: false,
    values: studyPhase,
    translate: 'FILTERS.STUDIES.PHASES.TITLE',
    type: 'study'
  },
  {
    id: 2,
    subgroupName: 'Intervention model',
    checkboxName: 'intervention_model',
    isSelected: false,
    translate: 'FILTERS.STUDIES.INTERVENTIONAL-MODELS.TITLE',
    values: interventionalModel,
    type: 'study'
  },
  {
    id: 3,
    subgroupName: 'Allocation type',
    checkboxName: 'allocation_type',
    isSelected: false,
    translate: 'FILTERS.STUDIES.ALLOCATION-TYPES.TITLE',
    values: allocationType,
    type: 'study'
  },
  {
    id: 4,
    subgroupName: 'Primary purpose',
    checkboxName: 'primary_purpose',
    isSelected: false,
    translate: 'FILTERS.STUDIES.PRIMARY-PURPOSES.TITLE',
    values: primaryPurpose,
    type: 'study'
  },
  {
    id: 5,
    subgroupName: 'Masking',
    checkboxName: 'masking',
    isSelected: false,
    translate: 'FILTERS.STUDIES.MASKING.TITLE',
    values: masking,
    type: 'study'
  },
];


const observationalModel: Array<FiltersParamsInterface> = [
  {
    id: 600,
    name: 'Cohort',
    value: 'Cohort',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.COHORT',
  },
  {
    id: 605,
    name: 'Case-control',
    value: 'Case-control',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.CASE-CONTROL',
  },
  {
    id: 610,
    name: 'Case-only',
    value: 'Case-only',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.CASE-ONLY',
  },
  {
    id: 615,
    name: 'Case-crossover',
    value: 'Case-crossover',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.CASE-CROSSOVER',
  },
  {
    id: 620,
    name: 'Ecologic or community study',
    value: 'Ecologic or community study',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.ECOLOGIC-OR-COMMUNITY-STUDY',
  },
  {
    id: 625,
    name: 'Family-based',
    value: 'Family-based',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.FAMILY-BASED',
  },
  {
    id: 640,
    name: 'Defined population',
    value: 'Defined population',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.DEFINED-POPULATION',
  },
  {
    id: 645,
    name: 'Natural history',
    value: 'Natural history',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.NATURAL-HISTORY',
  },
  {
    id: 630,
    name: 'Other',
    value: 'Other',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.OTHER',
  },
  {
    id: 635,
    name: 'Not provided',
    value: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.NOT-PROVIDED',
  }
];

const timePerspective: Array<FiltersParamsInterface> = [
  {
    id: 700,
    name: 'Retrospective',
    value: 'Retrospective',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TIME-PERSPECTIVE.RETROSPECTIVE',
  },
  {
    id: 705,
    name: 'Prospective',
    value: 'Prospective',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TIME-PERSPECTIVE.PROSPECTIVE',
  },
  {
    id: 710,
    name: 'Cross-sectional',
    value: 'Cross-sectional',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TIME-PERSPECTIVE.CROSS-SECTIONAL',
  },
  {
    id: 725,
    name: 'Retrospective / prospective',
    value: 'Retrospective / prospective',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TIME-PERSPECTIVE.RETROSPECTIVE-PROSPECTIVE',
  },
  {
    id: 730,
    name: 'Longitudinal',
    value: 'Longitudinal',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TIME-PERSPECTIVE.LONGITUDINAL',
  },
  {
    id: 715,
    name: 'Other',
    value: 'Other',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TIME-PERSPECTIVE.OTHER',
  },
  {
    id: 720,
    name: 'Not provided',
    value: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TIME-PERSPECTIVE.NOT-PROVIDED',
  }
];

const biospecimensRetained: Array<FiltersParamsInterface> = [
  {
    id: 800,
    name: 'None retained',
    value: 'None retained',
    isSelected: false,
    translate: 'FILTERS.STUDIES.BIOSPECIMENS-RETAINED.NONE',
  },
  {
    id: 805,
    name: 'Samples with DNA',
    value: 'Samples with DNA',
    isSelected: false,
    translate: 'FILTERS.STUDIES.BIOSPECIMENS-RETAINED.SAMPLES-WITH-DNA',
  },
  {
    id: 810,
    name: 'Samples without DNA',
    value: 'Samples without DNA',
    isSelected: false,
    translate: 'FILTERS.STUDIES.BIOSPECIMENS-RETAINED.SAMPLES-WITHOUT-DNA',
  },
  {
    id: 815,
    name: 'Not provided',
    value: 'Not provided',
    isSelected: false,
    translate: 'FILTERS.STUDIES.BIOSPECIMENS-RETAINED.NOT-PROVIDED',
  }
];

const StudyFiltersObservational: Array<FiltersSubgroupsInterface> = [
  {
    id: 1,
    subgroupName: 'Observational model',
    checkboxName: 'observational_model',
    isSelected: false,
    translate: 'FILTERS.STUDIES.OBSERVATIONAL-MODELS.TITLE',
    values: observationalModel,
    type: 'study'
  },
  {
    id: 2,
    subgroupName: 'Time perspective',
    checkboxName: 'time_perspective',
    isSelected: false,
    translate: 'FILTERS.STUDIES.TIME-PERSPECTIVE.TITLE',
    values: timePerspective,
    type: 'study'
  },
  {
    id: 3,
    subgroupName: 'Biospecimens retained',
    checkboxName: 'biospecimens_retained',
    isSelected: false,
    translate: 'FILTERS.STUDIES.BIOSPECIMENS-RETAINED.TITLE',
    values: biospecimensRetained,
    type: 'study'
  },
];


export const StudyFilters: Array<FiltersGroupsInterface> = [
  {
    id: 1,
    groupName: 'General studies filter',
    translate: 'FILTERS.STUDIES.GROUPS-TITLES.GENERAL-STUDIES',
    subgroups: StudyFiltersGeneral,
  },
  {
    id: 2,
    groupName: 'Interventional studies filter',
    translate: 'FILTERS.STUDIES.GROUPS-TITLES.INTERVENTIONAL-STUDIES',
    subgroups: StudyFiltersInterventional,
  },
  {
    id: 3,
    groupName: 'Observational studies filters',
    translate: 'FILTERS.STUDIES.GROUPS-TITLES.OBSERVATIONAL-STUDIES',
    subgroups: StudyFiltersObservational,
  }
];
