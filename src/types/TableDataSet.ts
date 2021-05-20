import { AnalysisDisplayName } from './AnalysisSchema';

export interface TableDataSet {
  displayName: AnalysisDisplayName;
  current: number;
  min: number;
  max: number;
}

