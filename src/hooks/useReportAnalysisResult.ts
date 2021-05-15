import { useState, useEffect } from 'react';

import { post } from '../api/analysisResult'
import { useAnalysisResult } from '../store/analysisResultState';
import { ChartDataSet } from '../types/ChartDataSet';

export const useReportAnalysisResult = () => {
  const { analysisResult } = useAnalysisResult();
  const [rowReportAnalysisResult, setReportAnalysisResult] = useState<ChartDataSet[]>([]);

  useEffect(() => {
    const data = post(analysisResult);

    setReportAnalysisResult(data);
  }, [analysisResult]);

  return { rowReportAnalysisResult };
};
