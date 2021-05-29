import { AnalysisKeyName } from './AnalysisSchema';

export type DataSet = {
  keyName: AnalysisKeyName;
  current: number;
  min: number;
  max: number;
};
