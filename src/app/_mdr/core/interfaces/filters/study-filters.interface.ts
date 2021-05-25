export interface StudyFiltersParams {
  id: number;
  value: string;
  name: string;
  isSelected: boolean;
  translate: string;
}

export interface StudyFiltersSubGroups {
  id: number;
  subgroup_name: string;
  checkbox_name: string;
  isSelected: boolean;
  translate: string;
  fieldName: string;
  isNested: boolean;
  type: string;
  path: string;
  values: StudyFiltersParams[];
}

export interface StudyFiltersGroups {
  id: number;
  group_name: string;
  translate: string;
  subgroups: StudyFiltersSubGroups[];
}
