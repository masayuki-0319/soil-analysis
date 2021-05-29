import { memo, useState, VFC } from 'react';
import { Box, Tab, Tabs, Paper } from '@material-ui/core';
import { ReportChart } from '../ReportAnalysisData/ReportChart';
import { ReportTable } from '../ReportAnalysisData/ReportTable';
import { PaperInformation } from '../../molecules/PaperInformation';

import { useDataSet } from '../../../hooks/useDataSet';
import { ReportAnalysisData } from '../../../types/ReportAnalysisData';

type Props = {
  reportAnalysisData: ReportAnalysisData;
};

export const Step3: VFC<Props> = memo((props) => {
  const { reportAnalysisData } = props;
  const { tableDataSet, bulletChartData } = useDataSet(reportAnalysisData);

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
          <ReportTable tableDataSet={tableDataSet} />
        </Box>
        <Box hidden={tabValue !== 1}>
          <ReportChart bulletChartData={bulletChartData} />
        </Box>
      </Box>
    </Paper>
  );
});
