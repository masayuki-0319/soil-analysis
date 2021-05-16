import { ReportAnalysisResult } from './ReportAnalysisResult';

export type AnalysisItem = {
  keyName: keyof ReportAnalysisResult;
  displayName: string;
  unitName: string | null;
};
