import { memo, VFC } from 'react';
import { Step1 } from '../organisms/AnalysisResult/Step1';
import { Step2 } from '../organisms/AnalysisResult/Step2';
import { Step3 } from '../organisms/AnalysisResult/Step3';

export const CheckData: VFC = memo(() => {
  return (
    <>
      <Step1 />
      <Step2 />
      <Step3 />
    </>
  );
});
