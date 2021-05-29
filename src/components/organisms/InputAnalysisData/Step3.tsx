import { memo, useState, VFC } from 'react';
import { Box, Tab, Tabs, Paper } from '@material-ui/core';
import { ReportTable } from '../ReportAnalysisResult/ReportTable';
import { ReportChart } from '../ReportAnalysisResult/ReportChart';
import { PaperInformation } from '../../molecules/PaperInformation';

export const Step3: VFC = memo(() => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <PaperInformation title="土壌分析結果" description="※ 前ページの入力結果を出力する。" />
      <Box sx={{ borderBottom: 4, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} centered>
          <Tab label="テーブル" />
          <Tab label="チャート" />
        </Tabs>
      </Box>
      <Box display="flex" justifyContent="center" m={1} p={1}>
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
