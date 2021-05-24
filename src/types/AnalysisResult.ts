import { ReportAnalysisResult } from './ReportAnalysisResult';
import { AnalysisKeyName, SaturationKeyName } from './AnalysisSchema';

type TmpType = Exclude<AnalysisKeyName, SaturationKeyName>;

// MEMO: 分析機器による解析結果
export type AnalysisResult = Pick<ReportAnalysisResult, 'fieldTypeId' | 'soilTypeId' | TmpType>;
