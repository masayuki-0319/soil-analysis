import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult';
import { useAnalysisResult } from '../store/analysisResultState';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';

export const useReportAnalysisResult = () => {
  const { analysisResult } = useAnalysisResult();
  const [rowReportAnalysisResult, setReportAnalysisResult] = useState<BulletChartDataSet[]>([]);
  const [result, setResult] = useState<ReportAnalysisResult>();

  useEffect(() => {
    const { result, data } = post(analysisResult);

    setResult(result);
    setReportAnalysisResult(data);
  }, [analysisResult]);

  return { result, rowReportAnalysisResult };
};
