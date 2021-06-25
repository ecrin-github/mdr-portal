export interface StudyFiltersParamsInterface {
  id: number;
  value: string;
  name: string;
  isSelected: boolean;
  translate: string;
}

export interface StudyFiltersSubgroupsInterface {
  id: number;
  subgroupName: string;
  checkboxName: string;
  isSelected: boolean;
  translate: string;
  fieldName: string;
  isNested: boolean;
  type: string;
  path: string;
  values: Array<StudyFiltersParamsInterface>;
}

export interface StudyFiltersGroupsInterface {
  id: number;
  groupName: string;
  translate: string;
  subgroups: Array<StudyFiltersSubgroupsInterface>;
}
