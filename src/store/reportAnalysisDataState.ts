import { atom, useRecoilState } from 'recoil';
import { ReportAnalysisData } from '../types/ReportAnalysisData';

const initialState: ReportAnalysisData | null = null;

const reportAnalysisDataState = atom<ReportAnalysisData | null>({
  key: 'reportAnalysisDataState',
  default: initialState,
});

export const useReportAnalysisDataState = () => {
  const [reportAnalysisData, setReportAnalysisData] = useRecoilState(reportAnalysisDataState);

  return {
    reportAnalysisData: reportAnalysisData,
    setReportAnalysisData: setReportAnalysisData,
  };
};
