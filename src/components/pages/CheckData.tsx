import { memo, VFC } from 'react';
import { Box } from '@material-ui/core';
import { Step1 } from '../organisms/CheckData/Step1';
import { Step2 } from '../organisms/CheckData/Step2';

interface Props {}

export const CheckData: VFC<Props> = memo(() => {
  return (
    <Box>
      <Step1 />
      <Step2 />
    </Box>
  );
});
