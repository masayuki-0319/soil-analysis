import { ReportAnalysisData } from './ReportAnalysisData';
import {
  AnalysisKeyName,
  RateKeyName,
  RateSaturationKeyName,
} from './AnalysisDataSchema';

type InputElement =
  | 'fieldTypeId'
  | 'soilTypeId'
  | Exclude<AnalysisKeyName, RateSaturationKeyName | RateKeyName>;

// MEMO: 分析機器による解析結果
export type InputAnalysisData = Pick<ReportAnalysisData, InputElement>;
