export interface ByStudyCharacteristicsRequestInterface {
    page?: number;
    size?: number;
    titleContains: string;
    logicalOperator: string;
    topicsInclude?: string;
}
