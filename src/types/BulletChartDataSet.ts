import { AnalysisDisplayName, AnalysisKeyName } from './AnalysisSchema';

export interface BulletChartDataSet {
  keyName: AnalysisKeyName;
  displayName: AnalysisDisplayName;
  current: number;
  min: number;
  max: number;
  chartMin: number;
  chartMax: number;
}
