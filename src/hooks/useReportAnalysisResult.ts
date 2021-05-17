import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useAnalysisResult } from '../store/analysisResultState';
import { BulletChartDataSet } from '../types/BulletBulletChartDataSet';

export const useReportAnalysisResult = () => {
  const { analysisResult } = useAnalysisResult();
  const [rowReportAnalysisResult, setReportAnalysisResult] = useState<BulletChartDataSet[]>([]);

  useEffect(() => {
    const data = post(analysisResult);

    setReportAnalysisResult(data);
  }, [analysisResult]);

  return { rowReportAnalysisResult };
};
