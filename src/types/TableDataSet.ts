import { AnalysisDisplayName, AnalysisKeyName } from './AnalysisSchema';

export interface TableDataSet {
  keyName: AnalysisKeyName;
  displayName: AnalysisDisplayName;
  current: number;
  min: number;
  max: number;
}
