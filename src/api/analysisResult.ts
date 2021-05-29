import { InputAnalysisData } from '../types/InputAnalysisData';
import { ReportAnalysisData } from '../types/ReportAnalysisData';
import { getReportAnalysisData } from './reportAnalysisData/reportAnalysisData';
import { get } from './dataSet';

export const post = (analysisResult: InputAnalysisData) => {
  return getBulletChartData(analysisResult);
};

const getBulletChartData = (current: InputAnalysisData) => {
  const reportAnalysisData: ReportAnalysisData = getReportAnalysisData(current);
  const { tableData, chartData } = get(reportAnalysisData);

  return { reportAnalysisData, tableData, chartData };
};
