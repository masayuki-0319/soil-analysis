import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useAnalysisResult } from '../store/analysisResultState';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';

export const useReportAnalysisResult = () => {
  const { analysisResult } = useAnalysisResult();
  const [reportAnalysisResult, setReportAnalysisResult] = useState<ReportAnalysisResult>();
  const [bulletChartData, setBulletChartData] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const { reportAnalysisResult, bulletChartData } = post(analysisResult);

    setReportAnalysisResult(reportAnalysisResult);
    setBulletChartData(bulletChartData);
  }, [analysisResult]);

  return { reportAnalysisResult, bulletChartData };
};
