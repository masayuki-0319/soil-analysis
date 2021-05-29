import { memo, VFC } from 'react';
import { Step1 } from '../organisms/InputAnalysisData/Step1';
import { Step2 } from '../organisms/InputAnalysisData/Step2';
import { Step3 } from '../organisms/InputAnalysisData/Step3';

export const CheckData: VFC = memo(() => {
  return (
    <>
      <Step1 />
      <Step2 />
      <Step3 />
    </>
  );
});
