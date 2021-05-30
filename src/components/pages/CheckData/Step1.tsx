import React, { memo, VFC } from 'react';
import { Grid, Paper } from '@material-ui/core';

import { PaperInformation } from '../../molecules/PaperInformation';
import { useInputAnalysisData } from '../../../store/inputAnalysisDataState';
import { SelectFieldTypeId } from '../../organisms/InputAnalysisData/SelectFieldTypeId';
import { SelectSoilTypeId } from '../../organisms/InputAnalysisData/SelectSoilTypeId';

export const Step1: VFC = memo(() => {
  const { inputAnalysisData, setInputAnalysisData } = useInputAnalysisData();

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setInputAnalysisData({ ...inputAnalysisData, [e.target.name]: Number(e.target.value) });
  };

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <Grid container>
        <PaperInformation title="ほ場データ入力" description="※ ほ場の基本データを入力してください。" />
        <Grid item container>
          <Grid item md={6} xs={12} style={{ marginBottom: 12 }}>
            <SelectFieldTypeId inputAnalysisData={inputAnalysisData} handleChange={handleChange} />
          </Grid>
          <Grid item md={6} xs={12} style={{ marginBottom: 12 }}>
            <SelectSoilTypeId  inputAnalysisData={inputAnalysisData} handleChange={handleChange} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});
