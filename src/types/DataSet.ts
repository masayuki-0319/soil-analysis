import { DataSetKeyName } from './AnalysisSchema';

export type DataSet = {
  keyName: DataSetKeyName;
  current: number;
  min: number;
  max: number;
};
