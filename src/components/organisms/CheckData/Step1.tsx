import React, { memo, VFC } from 'react';
import { Grid, Paper } from '@material-ui/core';

import SelectSoilType from './SelectSoilType';
import SelectFieldType from './SelectFieldType';
import { useAnalysisResult } from '../../../store/analysisResultState';
import { FormTopInfo } from '../../molecules/FormTopInfo';

interface Props {}

export const Step1: VFC<Props> = memo(() => {
  const { analysisResult, setAnalysisResult } = useAnalysisResult();

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setAnalysisResult({ ...analysisResult, [e.target.name]: Number(e.target.value) });
  };

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <Grid container>
        <FormTopInfo title="ほ場データ入力" description="※ ほ場の基本データを入力してください。" />
        <Grid item container>
          <Grid item md={6} xs={12} style={{ marginBottom: 12 }}>
            <SelectFieldType defaultValue={analysisResult.fieldTypeId} onChange={handleChange} />
          </Grid>
          <Grid item md={6} xs={12} style={{ marginBottom: 12 }}>
            <SelectSoilType defaultValue={analysisResult.soilTypeId} onChange={handleChange} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});
