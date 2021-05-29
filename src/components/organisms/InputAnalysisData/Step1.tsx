import React, { memo, VFC } from 'react';
import { Grid, Paper } from '@material-ui/core';

import { PaperInformation } from '../../molecules/PaperInformation';
import { SelectBox } from '../../molecules/SelectBox';
import { SelectOptions } from '../../molecules/SelectOptions';
import { useInputAnalysisData } from '../../../store/inputAnalysisDataState';
import { useAnalysisItemSelectOptions } from '../../../hooks/useAnalysisItemSelectOptions';

export const Step1: VFC = memo(() => {
  const { inputAnalysisData, setInputAnalysisData } = useInputAnalysisData();
  const { fieldTypeData, soilTypeData } = useAnalysisItemSelectOptions();

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setInputAnalysisData({ ...inputAnalysisData, [e.target.name]: Number(e.target.value) });
  };

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <Grid container>
        <PaperInformation title="ほ場データ入力" description="※ ほ場の基本データを入力してください。" />
        <Grid item container>
          <Grid item md={6} xs={12} style={{ marginBottom: 12 }}>
            <SelectBox
              displayName="ほ場の種類"
              keyName="fieldTypeId"
              defaultValue={inputAnalysisData.fieldTypeId}
              onChange={handleChange}
            >
              {SelectOptions({ options: fieldTypeData, nameKey: 'name', valueKey: 'id' })}
            </SelectBox>
          </Grid>
          <Grid item md={6} xs={12} style={{ marginBottom: 12 }}>
            <SelectBox
              displayName="土壌の種類"
              keyName="soilTypeId"
              defaultValue={inputAnalysisData.soilTypeId}
              onChange={handleChange}
            >
              {SelectOptions({ options: soilTypeData, nameKey: 'name', valueKey: 'id' })}
            </SelectBox>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});
