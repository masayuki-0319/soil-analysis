import { ReportAnalysisData } from './ReportAnalysisData';
import { AnalysisKeyName, RateKeyName, SaturationKeyName } from './AnalysisSchema';

type TmpType = Exclude<AnalysisKeyName, SaturationKeyName | RateKeyName>;

// MEMO: 分析機器による解析結果
export type InputAnalysisData = Pick<ReportAnalysisData, 'fieldTypeId' | 'soilTypeId' | TmpType>;
