import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useInputAnalysisData } from '../store/inputAnalysisDataState';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisData } from '../types/ReportAnalysisData';
import { TableDataSet } from '../types/TableDataSet';

export const useReportAnalysisData = () => {
  const { inputAnalysisData } = useInputAnalysisData();
  const [reportAnalysisResult, setReportAnalysisData] = useState<ReportAnalysisData | null>(null);
  const [tableDataSet, setTableDataSet] = useState<TableDataSet[]>([]);
  const [bulletChartData, setBulletChartData] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const { reportAnalysisResult, tableData, chartData } = post(inputAnalysisData);

    setReportAnalysisData(reportAnalysisResult);
    setBulletChartData(chartData);
    setTableDataSet(tableData);
  }, [inputAnalysisData]);

  return { reportAnalysisResult, tableDataSet, bulletChartData };
};
