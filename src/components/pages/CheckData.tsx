import React, { memo, useState, VFC } from 'react';
import { Box, Tab, Tabs } from '@material-ui/core';
import { Step1 } from '../organisms/CheckData/Step1';
import { Step2 } from '../organisms/CheckData/Step2';
import { Step3 } from '../organisms/CheckData/Step3';
import ReportChart from '../organisms/CheckData/ReportChart';

interface Props {}

export const CheckData: VFC<Props> = memo(() => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Step1 />
      <Step2 />
      <Box sx={{ borderBottom: 4, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="土壌分析結果 ( テーブル )" />
          <Tab label="土壌分析結果 ( チャート )" />
        </Tabs>
      </Box>
      <Box>
        <Box hidden={value !== 0}>
          <Step3 />
        </Box>
        <Box hidden={value !== 1}>
          <ReportChart />
        </Box>
      </Box>
    </Box>
  );
});
