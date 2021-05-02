import React, { memo, VFC } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useRecoilState } from 'recoil';

import SelectSoilType from './SelectSoilType';
import SelectFieldType from './SelectFieldType';
import { analysisResultState } from '../../../store/analysisResultState';

interface Props {}

export const Step1: VFC<Props> = memo(() => {
  const [analysisResult, setAnalysisResultState] = useRecoilState(analysisResultState);

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setAnalysisResultState({ ...analysisResult, [e.target.name]: Number(e.target.value) });
  };

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <Grid container>
        <Grid
          item
          container
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 21 }}
        >
          <Grid>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }} gutterBottom>
              ほ場データ入力
            </Typography>
            <Typography variant="body1" gutterBottom>
              ※ ほ場の基本データを入力してください。
            </Typography>
          </Grid>
        </Grid>
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
