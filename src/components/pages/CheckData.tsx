import React, { useState, memo, VFC } from 'react';
import { FormControl, Grid, Typography } from '@material-ui/core';
import SelectSoilType from '../organisms/CheckData/SelectSoilType';
import SelectFieldType from '../organisms/CheckData/SelectFieldType';

interface Props {}

export const CheckData: VFC<Props> = memo(() => {
  const [fieldType, setFieldType] = useState('');
  const [soilType, setSoilType] = useState('');

  const handleChangeFieldType = (e: React.ChangeEvent<{ value: string }>) => {
    setFieldType(e.target.value);
  };
  const handleChangeSoilType = (e: React.ChangeEvent<{ value: string }>) => {
    setSoilType(e.target.value);
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
          <SelectFieldType defaultValue={fieldType} onChange={handleChangeFieldType} />
        </FormControl>
      </Grid>
      <Grid item mb={4} xs={12}>
        <Typography variant="h3">土壌の種類</Typography>
        <FormControl variant="outlined">
          <SelectSoilType defaultValue={soilType} onChange={handleChangeSoilType} />
        </FormControl>
      </Grid>
    </Grid>
  );
});
