import { DataSet } from './DataSet';

export type BulletChartDataSet = DataSet & {
  chartMin: number;
  chartMax: number;
};
