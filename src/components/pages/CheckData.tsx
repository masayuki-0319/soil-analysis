import { memo, VFC } from 'react';
import { Step1 } from '../organisms/CheckData/Step1';
import { Step2 } from '../organisms/CheckData/Step2';
import { Step3 } from '../organisms/CheckData/Step3';

interface Props {}

export const CheckData: VFC<Props> = memo(() => {
  return (
    <>
      <Step1 />
      <Step2 />
      <Step3 />
    </>
  );
});
