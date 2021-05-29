import { useState, useEffect } from 'react';

import { get } from '../api/dataSet';

import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisData } from '../types/ReportAnalysisData';
import { TableDataSet } from '../types/TableDataSet';

export const useDataSet = (reportAnalysisData: ReportAnalysisData) => {
  const [tableDataSet, setTableDataSet] = useState<TableDataSet[]>([]);
  const [bulletChartData, setBulletChartData] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const { tableData, chartData } = get(reportAnalysisData);

    setBulletChartData(chartData);
    setTableDataSet(tableData);
  }, [reportAnalysisData]);

  return { tableDataSet, bulletChartData };
};
