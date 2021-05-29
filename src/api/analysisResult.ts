import { InputAnalysisData } from '../types/InputAnalysisData';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';
import { getReportAnalysisResult } from './reportAnalysisResult/reportAnalysisResult';
import { getTableDataSet } from './displayDataSet/tableDataSet';
import { getChartDataSet } from './displayDataSet/bulletChartDataSet';

// MEMO: 暫定対応として、ビジネスロジックを切り出し
export const post = (analysisResult: InputAnalysisData) => {
  return getBulletChartData(analysisResult);
};

const getBulletChartData = (current: InputAnalysisData) => {
  const reportAnalysisResult: ReportAnalysisResult = getReportAnalysisResult(current);

  const tableData = getTableDataSet(reportAnalysisResult);
  const chartData = getChartDataSet(tableData);

  return { reportAnalysisResult, tableData, chartData };
};
