export interface DataObjectFiltersParams {
  id: number;
  value: string;
  name: string;
  isSelected: boolean;
  translate: string;
}

export interface DataObjectFiltersSubGroups {
  id: number;
  subgroup_name: string;
  checkbox_name: string;
  isSelected: boolean;
  translate: string;
  fieldName: string;
  isNested: boolean;
  type: string;
  path: string;
  values: DataObjectFiltersParams[];
}

export interface DataObjectFiltersGroups {
  id: number;
  group_name: string;
  translate: string;
  subgroups: DataObjectFiltersSubGroups[];
}
