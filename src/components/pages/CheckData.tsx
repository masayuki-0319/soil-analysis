import { memo, VFC } from 'react';

import { useReportAnalysisData } from '../../hooks/useReportAnalysisData';
import { Step1 } from '../organisms/InputAnalysisData/Step1';
import { Step2 } from '../organisms/InputAnalysisData/Step2';
import { Step3 } from '../organisms/InputAnalysisData/Step3';

export const CheckData: VFC = memo(() => {
  const { reportAnalysisData } = useReportAnalysisData();

  return (
    <>
      <Step1 />
      <Step2 />
      {reportAnalysisData !== null ? <Step3 reportAnalysisData={reportAnalysisData} /> : <div>Null</div>}
    </>
  );
});
