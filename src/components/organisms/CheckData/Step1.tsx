import React, { memo, VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
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
    <Grid container>
      <Grid item mb={12} xs={12}>
        <Typography variant="h2">ほ場データ入力</Typography>
        <Typography variant="body1">ほ場の種類と、土壌種類を入力する。</Typography>
      </Grid>
      <Grid item mb={6} xs={6}>
        <SelectFieldType defaultValue={analysisResult.fieldTypeId} onChange={handleChange} />
      </Grid>
      <Grid item mb={6} xs={6}>
        <SelectSoilType defaultValue={analysisResult.soilTypeId} onChange={handleChange} />
      </Grid>
    </Grid>
  );
});
