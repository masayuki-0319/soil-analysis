import { AnalysisResult } from '../../types/AnalysisResult';
import { ReportAnalysisResult } from '../../types/ReportAnalysisResult';

export const getReportAnalysisResult = (analysisResult: AnalysisResult) => {
  const reportAnalysisResult: ReportAnalysisResult = {
    cao_saturation: calcAbstSaturation(analysisResult.cec, analysisResult['cao'], 'cao'),
    mgo_saturation: calcAbstSaturation(analysisResult.cec, analysisResult['mgo'], 'mgo'),
    k2o_saturation: calcAbstSaturation(analysisResult.cec, analysisResult['k2o'], 'k2o'),
    ...analysisResult,
  };
  return reportAnalysisResult;
};

const SaturationItems = ['cao', 'mgo', 'k2o'] as const;
type SaturationType = typeof SaturationItems[number];

const SaturationCoefficient: { [key in SaturationType]: number } = {
  cao: 28.04,
  mgo: 20.15,
  k2o: 47.1,
};
const calcAbstSaturation = (cec: number, practicalData: number, el: SaturationType) => {
  return Math.ceil(((practicalData * SaturationCoefficient[el]) / 100) * cec);
};
