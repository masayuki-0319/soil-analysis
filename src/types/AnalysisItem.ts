import { ReportAnalysisResult } from './ReportAnalysisResult';

export type AnalysisItem = {
  keyName: keyof ReportAnalysisResult;
  labelName: string;
  unitName: string | null;
};
