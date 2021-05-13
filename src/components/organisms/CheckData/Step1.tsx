import React, { memo, VFC } from 'react';
import { Grid, Paper } from '@material-ui/core';

import { FormTopInfo } from '../../molecules/FormTopInfo';
import { SelectBox } from '../../molecules/SelectBox';
import { useAnalysisResult } from '../../../store/analysisResultState';
import { fieldTypeData } from '../../../masterData/fiedlTypeData';
import { soilTypeData } from '../../../masterData/soilTypeData';

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
            <SelectBox
              selectOptions={fieldTypeData}
              labelName="ほ場の種類"
              keyName="fieldTypeId"
              defaultValue={analysisResult.fieldTypeId}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12} style={{ marginBottom: 12 }}>
            <SelectBox
              selectOptions={soilTypeData}
              labelName="土壌の種類"
              keyName="soilTypeId"
              defaultValue={analysisResult.soilTypeId}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});
