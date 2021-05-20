import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useAnalysisResult } from '../store/analysisResultState';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';
import { TableDataSet } from '../types/TableDataSet';

export const useReportAnalysisResult = () => {
  const { analysisResult } = useAnalysisResult();
  const [reportAnalysisResult, setReportAnalysisResult] = useState<ReportAnalysisResult>();
  const [tableDataSet, setTableDataSet] = useState<TableDataSet[]>([]);
  const [bulletChartData, setBulletChartData] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const { reportAnalysisResult, tableData, bulletChartData } = post(analysisResult);

    setReportAnalysisResult(reportAnalysisResult);
    setBulletChartData(bulletChartData);
    setTableDataSet(tableData);
  }, [analysisResult]);

  return { reportAnalysisResult, tableDataSet, bulletChartData };
};
