import { TableDataSet } from './TableDataSet';

export interface BulletChartDataSet extends TableDataSet {
  chartMin: number;
  chartMax: number;
}
