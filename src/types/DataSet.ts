import { DataSetKeyName } from './AnalysisDataSchema';

export type DataSet = {
  keyName: DataSetKeyName;
  current: number;
  min: number;
  max: number;
};
