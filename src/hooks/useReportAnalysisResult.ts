import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useInputAnalysisData } from '../store/inputAnalysisDataState';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';
import { TableDataSet } from '../types/TableDataSet';

export const useReportAnalysisResult = () => {
  const { inputAnalysisData } = useInputAnalysisData();
  const [reportAnalysisResult, setReportAnalysisResult] = useState<ReportAnalysisResult | null>(null);
  const [tableDataSet, setTableDataSet] = useState<TableDataSet[]>([]);
  const [bulletChartData, setBulletChartData] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const { reportAnalysisResult, tableData, chartData } = post(inputAnalysisData);

    setReportAnalysisResult(reportAnalysisResult);
    setBulletChartData(chartData);
    setTableDataSet(tableData);
  }, [inputAnalysisData]);

  return { reportAnalysisResult, tableDataSet, bulletChartData };
};
