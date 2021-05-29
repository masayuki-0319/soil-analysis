import { InputAnalysisData } from '../types/InputAnalysisData';
import { ReportAnalysisData } from '../types/ReportAnalysisData';
import { getReportAnalysisData } from './reportAnalysisData/reportAnalysisData';
import { getTableDataSet } from './displayDataSet/tableDataSet';
import { getChartDataSet } from './displayDataSet/bulletChartDataSet';

// MEMO: 暫定対応として、ビジネスロジックを切り出し
export const post = (analysisResult: InputAnalysisData) => {
  return getBulletChartData(analysisResult);
};

const getBulletChartData = (current: InputAnalysisData) => {
  const reportAnalysisResult: ReportAnalysisData = getReportAnalysisData(current);

  const tableData = getTableDataSet(reportAnalysisResult);
  const chartData = getChartDataSet(tableData);

  return { reportAnalysisResult, tableData, chartData };
};
