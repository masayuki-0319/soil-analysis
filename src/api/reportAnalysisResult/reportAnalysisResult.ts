import { AnalysisResult } from '../../types/AnalysisResult';
import { ReportAnalysisResult } from '../../types/ReportAnalysisResult';
import { calcRateSaturation } from '../displayDataSet/utilDataCalculator';

export const getReportAnalysisResult = (analysisResult: AnalysisResult) => {
  const cao_saturation = calcRateSaturation(analysisResult.cec, analysisResult['cao'], 'cao');
  const mgo_saturation = calcRateSaturation(analysisResult.cec, analysisResult['mgo'], 'mgo');
  const k2o_saturation = calcRateSaturation(analysisResult.cec, analysisResult['k2o'], 'k2o');
  const base_saturation = cao_saturation + mgo_saturation + k2o_saturation;

  const reportAnalysisResult: ReportAnalysisResult = {
    base_saturation: base_saturation,
    cao_saturation: cao_saturation,
    mgo_saturation: mgo_saturation,
    k2o_saturation: k2o_saturation,
    ...analysisResult,
  };

  return reportAnalysisResult;
};
