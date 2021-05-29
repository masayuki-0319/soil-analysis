import { ReportAnalysisData } from '../types/ReportAnalysisData';
import { getTableDataSet } from './dataSet/tableDataSet';
import { getChartDataSet } from './dataSet/bulletChartDataSet';

// MEMO: 暫定対応として、ビジネスロジックを切り出し
export const get = (reportAnalysisData: ReportAnalysisData) => {
  const tableData = getTableDataSet(reportAnalysisData);
  const chartData = getChartDataSet(tableData);

  return { tableData, chartData };
};
