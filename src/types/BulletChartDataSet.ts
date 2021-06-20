import { DataSetDetail } from './DataSet';
import { DataSetKeyName } from './AnalysisDataSchema';

export type BulletChartDataSetDetail = DataSetDetail & {
  chartMin: number;
  chartMax: number;
};

export type BulletChartDataSet = {
  [K in DataSetKeyName]: BulletChartDataSetDetail;
};
