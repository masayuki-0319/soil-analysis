import { AnalysisResult } from '../types/AnalysisResult';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';
import { getReportAnalysisResult } from './reportAnalysisResult/reportAnalysisResult';
import { getTableDataSet } from './displayDataSet/tableDataSet';
import { getChartDataSet } from './displayDataSet/bulletChartDataSet';

// MEMO: 暫定対応として、ビジネスロジックを切り出し
export const post = (analysisResult: AnalysisResult) => {
  return getBulletChartData(analysisResult);
};

const getBulletChartData = (current: AnalysisResult) => {
  const reportAnalysisResult: ReportAnalysisResult = getReportAnalysisResult(current);

  const tableData = getTableDataSet(reportAnalysisResult);
  const chartData = getChartDataSet(tableData);

  return { reportAnalysisResult, tableData, chartData };
};
