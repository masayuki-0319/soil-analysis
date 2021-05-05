import { memo, useState, VFC } from 'react';
import { Box, Tab, Tabs } from '@material-ui/core';
import { ReportTable } from './/ReportTable';
import ReportChart from './ReportChart';

interface Props {}

export const Step3: VFC<Props> = memo(() => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 4, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} centered>
          <Tab label="土壌分析結果 ( テーブル )" />
          <Tab label="土壌分析結果 ( チャート )" />
        </Tabs>
      </Box>
      <Box>
        <Box hidden={tabValue !== 0}>
          <ReportTable />
        </Box>
        <Box hidden={tabValue !== 1}>
          <ReportChart />
        </Box>
      </Box>
    </>
  );
});
