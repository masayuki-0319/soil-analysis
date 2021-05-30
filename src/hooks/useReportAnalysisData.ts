import { useEffect } from 'react';

import { post } from '../api/analysisData';
import { useInputAnalysisData } from '../store/inputAnalysisDataState';
import { useReportAnalysisDataState } from '../store/reportAnalysisDataState';

export const useReportAnalysisData = () => {
  const { inputAnalysisData } = useInputAnalysisData();

  const { reportAnalysisData, setReportAnalysisData } = useReportAnalysisDataState();

  useEffect(() => {
    const { reportAnalysisData } = post(inputAnalysisData);

    setReportAnalysisData(reportAnalysisData);
  }, [inputAnalysisData, setReportAnalysisData]);

  return { reportAnalysisData };
};
