import { AnalysisDisplayName } from './AnalysisSchema';

export interface ChartDataSet {
  displayName: AnalysisDisplayName;
  current: number;
  min: number;
  max: number;
  chartMin: number;
  chartMax: number;
}
