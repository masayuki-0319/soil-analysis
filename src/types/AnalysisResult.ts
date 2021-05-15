import { ReportAnalysisResult } from './ReportAnalysisResult';

// MEMO: 分析機器による解析結果
export type AnalysisResult = Pick<
  ReportAnalysisResult,
  'fieldTypeId' | 'soilTypeId' | 'ph' | 'ec' | 'cao' | 'mgo' | 'k2o' | 'p2o5' | 'no3n'
>;
