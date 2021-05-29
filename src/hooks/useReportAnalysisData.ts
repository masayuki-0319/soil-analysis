import { useState, useEffect } from 'react';

import { post } from '../api/analysisData';
import { get } from '../api/dataSet';

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
    const { reportAnalysisData } = post(inputAnalysisData);
    const { tableData, chartData } = get(reportAnalysisData);

    setReportAnalysisData(reportAnalysisData);
    setBulletChartData(chartData);
    setTableDataSet(tableData);
  }, [inputAnalysisData]);

  return { reportAnalysisData, tableDataSet, bulletChartData };
};
