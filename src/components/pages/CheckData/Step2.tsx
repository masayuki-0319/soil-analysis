import React, { memo, VFC } from 'react';
import { Grid, Paper } from '@material-ui/core';

import { useInputAnalysisData } from '../../../store/inputAnalysisDataState';
import { PaperInformation } from '../../molecules/PaperInformation';
import { InputAnalysisItems } from '../../organisms/InputAnalysisData/InputAnalysisItems';

export const Step2: VFC = memo(() => {
  const { inputAnalysisData, setInputAnalysisData } = useInputAnalysisData();

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setInputAnalysisData({ ...inputAnalysisData, [e.target.name]: Number(e.target.value) });
  };

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <Grid container>
        <PaperInformation title="分析結果の入力" description="※ 分析機器による土壌サンプルの分析結果を入力する。" />
        <InputAnalysisItems inputAnalysisData={inputAnalysisData} handleChange={handleChange}/>
      </Grid>
    </Paper>
  );
});
