import { memo, VFC } from 'react';
import { Box } from '@material-ui/core';
import { Step1 } from '../organisms/CheckData/Step1';

interface Props {}

export const CheckData: VFC<Props> = memo(() => {
  return (
    <Box>
      <Step1 />
    </Box>
  );
});
