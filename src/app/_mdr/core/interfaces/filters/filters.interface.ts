export interface FiltersParamsInterface {
  id: number;
  value: string;
  name: string;
  isSelected: boolean;
  translate: string;
}

export interface FiltersSubgroupsInterface {
  id: number;
  subgroupName: string;
  checkboxName: string;
  isSelected: boolean;
  translate: string;
  type: string;
  values: Array<FiltersParamsInterface>;
}

export interface FiltersGroupsInterface {
  id: number;
  groupName: string;
  translate: string;
  subgroups: Array<FiltersSubgroupsInterface>;
}


export interface FiltersRequestInterface {
  studyTypes: number[];
  studyStatuses: number[];
  studyGenderEligibility: number[];
  studyFeatureValues: number[];
  objectTypes: number[];
  objectAccessTypes: number[];
}
