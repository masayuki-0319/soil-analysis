import { InputAnalysisData } from '../../types/InputAnalysisData';
import { ReportAnalysisData } from '../../types/ReportAnalysisData';
import { calcRateSaturation } from '../displayDataSet/utilDataCalculator';

export const getReportAnalysisData = (analysisResult: InputAnalysisData) => {
  const cao_saturation = calcRateSaturation(analysisResult.cec, analysisResult['cao'], 'cao');
  const mgo_saturation = calcRateSaturation(analysisResult.cec, analysisResult['mgo'], 'mgo');
  const k2o_saturation = calcRateSaturation(analysisResult.cec, analysisResult['k2o'], 'k2o');
  const base_saturation = Math.ceil((cao_saturation + mgo_saturation + k2o_saturation) * 10) / 10;

  const ratio_mgo_k2o = Math.ceil((analysisResult.mgo / analysisResult.k2o) * 10) / 10;
  const ratio_cao_mgo = Math.ceil((analysisResult.cao / analysisResult.mgo) * 10) / 10;

  const reportAnalysisResult: ReportAnalysisData = {
    base_saturation: base_saturation,
    cao_saturation: cao_saturation,
    mgo_saturation: mgo_saturation,
    k2o_saturation: k2o_saturation,
    ratio_mgo_k2o: ratio_mgo_k2o,
    ratio_cao_mgo: ratio_cao_mgo,
    ...analysisResult,
  };

  return reportAnalysisResult;
};
