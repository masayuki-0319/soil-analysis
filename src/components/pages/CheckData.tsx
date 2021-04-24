import React, { memo, VFC } from 'react';
import { FormControl, Grid, Typography } from '@material-ui/core';
import SelectSoilType from '../organisms/CheckData/SelectSoilType';
import SelectFieldType from '../organisms/CheckData/SelectFieldType';
import { useRecoilState } from 'recoil';
import { analysisResultState } from '../../store/analysisResultState';

interface Props {}

export const CheckData: VFC<Props> = memo(() => {
  const [analysisResult, setAnalysisResultState] = useRecoilState(analysisResultState);

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setAnalysisResultState({ ...analysisResult, [e.target.name]: e.target.value });
  };

  return (
    <Grid container>
      <Grid item mb={8} xs={12}>
        <Typography variant="h2">ほ場データ入力</Typography>
        <Typography variant="body1">ほ場の種類と、土壌種類を入力する。</Typography>
      </Grid>
      <Grid item mb={4} xs={12}>
        <Typography variant="h3">ほ場の種類</Typography>
        <FormControl variant="outlined">
          <SelectFieldType defaultValue={analysisResult.fieldTypeId} onChange={handleChange} />
        </FormControl>
      </Grid>
      <Grid item mb={4} xs={12}>
        <Typography variant="h3">土壌の種類</Typography>
        <FormControl variant="outlined">
          <SelectSoilType defaultValue={analysisResult.soilTypeId} onChange={handleChange} />
        </FormControl>
      </Grid>
    </Grid>
  );
});
