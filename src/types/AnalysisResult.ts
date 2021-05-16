import { ReportAnalysisResult } from './ReportAnalysisResult';
import { AnalysisKeyName } from './AnalysisSchema';

// MEMO: 分析機器による解析結果
export type AnalysisResult = Pick<
  ReportAnalysisResult,
  'fieldTypeId' | 'soilTypeId' | AnalysisKeyName
>;
