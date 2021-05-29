import { InputAnalysisData } from '../types/InputAnalysisData';
import { ReportAnalysisData } from '../types/ReportAnalysisData';
import { getReportAnalysisData } from './reportAnalysisData/reportAnalysisData';

export const post = (inputAnalysisData: InputAnalysisData) => {
  const reportAnalysisData: ReportAnalysisData = getReportAnalysisData(inputAnalysisData);

  return { reportAnalysisData };
};
