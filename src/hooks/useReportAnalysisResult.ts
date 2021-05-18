import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useAnalysisResult } from '../store/analysisResultState';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';

export const useReportAnalysisResult = () => {
  const { analysisResult } = useAnalysisResult();
  const [result, setResult] = useState<ReportAnalysisResult>();
  const [bulletChartData, setBulletChartData] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const { result, bulletChartData } = post(analysisResult);

    setResult(result);
    setBulletChartData(bulletChartData);
  }, [analysisResult]);

  return { result, bulletChartData };
};
