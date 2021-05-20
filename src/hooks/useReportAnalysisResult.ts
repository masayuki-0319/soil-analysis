import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useAnalysisResult } from '../store/analysisResultState';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';
import { TableDataSet } from '../types/TableDataSet';

export const useReportAnalysisResult = () => {
  const { analysisResult } = useAnalysisResult();
  const [reportAnalysisResult, setReportAnalysisResult] = useState<ReportAnalysisResult | null>(null);
  const [tableDataSet, setTableDataSet] = useState<TableDataSet[]>([]);
  const [bulletChartData, setBulletChartData] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const { reportAnalysisResult, tableData, chartData } = post(analysisResult);

    setReportAnalysisResult(reportAnalysisResult);
    setBulletChartData(chartData);
    setTableDataSet(tableData);
  }, [analysisResult]);

  return { reportAnalysisResult, tableDataSet, bulletChartData };
};
