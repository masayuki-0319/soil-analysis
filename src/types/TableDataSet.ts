import { AnalysisKeyName } from './AnalysisSchema';

export type TableDataSet = {
  keyName: AnalysisKeyName;
  current: number;
  min: number;
  max: number;
};
