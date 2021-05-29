import { useState, useEffect } from 'react';

import { post } from '../api/analysisData';
import { useInputAnalysisData } from '../store/inputAnalysisDataState';
import { ReportAnalysisData } from '../types/ReportAnalysisData';

export const useReportAnalysisData = () => {
  const { inputAnalysisData } = useInputAnalysisData();

  const [reportAnalysisData, setReportAnalysisData] = useState<ReportAnalysisData | null>(null);

  useEffect(() => {
    const { reportAnalysisData } = post(inputAnalysisData);

    setReportAnalysisData(reportAnalysisData);
  }, [inputAnalysisData]);

  return { reportAnalysisData };
};
