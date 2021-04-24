import React, { memo, VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { analysisResultState } from '../../../store/analysisResultState';

interface Props {}

export const Step2: VFC<Props> = memo(() => {
  const [analysisResult, setAnalysisResultState] = useRecoilState(analysisResultState);

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setAnalysisResultState({ ...analysisResult, [e.target.name]: e.target.value });
  };

  return (
    <Grid container>
      <Grid item mb={8} xs={12}>
        <Typography variant="h2">土壌分析結果入力</Typography>
        <Typography variant="body1">※ 分析機器による土壌サンプルの分析結果を入力する。</Typography>
      </Grid>
    </Grid>
  );
});
