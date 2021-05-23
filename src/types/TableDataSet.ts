import { AnalysisKeyName } from './AnalysisSchema';

export interface TableDataSet {
  keyName: AnalysisKeyName;
  current: number;
  min: number;
  max: number;
}
