import { TableDataSet } from './TableDataSet';

export type BulletChartDataSet = TableDataSet & {
  chartMin: number;
  chartMax: number;
};
