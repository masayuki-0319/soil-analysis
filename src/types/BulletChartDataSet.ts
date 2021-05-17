import { AnalysisDisplayName } from './AnalysisSchema';

export interface BulletChartDataSet {
  displayName: AnalysisDisplayName;
  current: number;
  min: number;
  max: number;
  chartMin: number;
  chartMax: number;
}
