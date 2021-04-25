import React, { memo, VFC } from 'react';
import { FormControl, Grid, TextField, Typography } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { analysisResultState } from '../../../store/analysisResultState';
import { analysisItems } from '../../../types/AnalysisResult';

interface Props {}

export const Step2: VFC<Props> = memo(() => {
  const [analysisResult, setAnalysisResultState] = useRecoilState(analysisResultState);

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setAnalysisResultState({ ...analysisResult, [e.target.name]: Number(e.target.value) });
  };

  const fields = analysisItems.map((item, index) => {
    return (
      <Grid item mb={6} xs={6} key={index}>
        <FormControl variant="outlined">
          <TextField
            variant="outlined"
            type="number"
            onChange={handleChange}
            name={item.keyName}
            value={analysisResult[item.keyName]}
            label={item.labelName}
          />
        </FormControl>
      </Grid>
    );
  });

  return (
    <Grid container>
      <Grid item mb={8} xs={12}>
        <Typography variant="h2">土壌分析結果入力</Typography>
        <Typography variant="body1">※ 分析機器による土壌サンプルの分析結果を入力する。</Typography>
      </Grid>
      {fields}
    </Grid>
  );
});
