import { ReportAnalysisResult } from './ReportAnalysisResult';
import { AnalysisKeyName } from './AnalysisSchema';

type TmpType = Exclude<AnalysisKeyName, 'cao_saturation' | 'mgo_saturation' | 'k2o_saturation'>;

// MEMO: 分析機器による解析結果
export type AnalysisResult = Pick<ReportAnalysisResult, 'fieldTypeId' | 'soilTypeId' | TmpType>;
