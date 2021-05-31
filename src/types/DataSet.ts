import { DataSetKeyName } from './AnalysisDataSchema';

export type DataSetDetail = {
  keyName: DataSetKeyName;
  current: number;
  min: number;
  max: number;
};

export type DataSet = {
  [K in DataSetKeyName]: DataSetDetail;
}
