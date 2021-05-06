import { memo, useState, VFC } from 'react';
import { Box, Tab, Tabs, Paper } from '@material-ui/core';
import { ReportTable } from './/ReportTable';
import { ReportChart } from './ReportChart';
import { FormTopInfo } from '../../molecules/FormTopInfo';

interface Props {}

export const Step3: VFC<Props> = memo(() => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <FormTopInfo title="土壌分析結果" description="※ 前ページの入力結果を出力する。" />
      <Box sx={{ borderBottom: 4, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} centered>
          <Tab label="テーブル" />
          <Tab label="チャート" />
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
    </Paper>
  );
});
