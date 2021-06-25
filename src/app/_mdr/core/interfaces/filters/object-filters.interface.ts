export interface DataObjectFiltersParamsInterface {
  id: number;
  value: string;
  name: string;
  isSelected: boolean;
  translate: string;
}

export interface DataObjectFiltersSubgroupsInterface {
  id: number;
  subgroupName: string;
  checkboxName: string;
  isSelected: boolean;
  translate: string;
  fieldName: string;
  isNested: boolean;
  type: string;
  path: string;
  values: Array<DataObjectFiltersParamsInterface>;
}

export interface DataObjectFiltersGroupsInterface {
  id: number;
  groupName: string;
  translate: string;
  subgroups: Array<DataObjectFiltersSubgroupsInterface>;
}
