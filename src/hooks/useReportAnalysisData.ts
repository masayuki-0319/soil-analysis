import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useInputAnalysisData } from '../store/inputAnalysisDataState';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisData } from '../types/ReportAnalysisData';
import { TableDataSet } from '../types/TableDataSet';

export const useReportAnalysisData = () => {
  const { inputAnalysisData } = useInputAnalysisData();

  const [reportAnalysisData, setReportAnalysisData] = useState<ReportAnalysisData | null>(null);
  const [tableDataSet, setTableDataSet] = useState<TableDataSet[]>([]);
  const [bulletChartData, setBulletChartData] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const { reportAnalysisData, tableData, chartData } = post(inputAnalysisData);

    setReportAnalysisData(reportAnalysisData);
    setBulletChartData(chartData);
    setTableDataSet(tableData);
  }, [inputAnalysisData]);

  return { reportAnalysisData, tableDataSet, bulletChartData };
};
