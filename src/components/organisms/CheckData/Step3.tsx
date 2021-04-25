import { memo, VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { analysisResultState } from '../../../store/analysisResultState';

interface Props {}

export const Step3: VFC<Props> = memo(() => {
  const analysisResult = useRecoilValue(analysisResultState);

  return (
    <Grid container>
      <Grid item mb={8} xs={12}>
        <Typography variant="h2">土壌分析結果入力</Typography>
        <Typography variant="body1">※ 前ページの入力結果を出力する。</Typography>
      </Grid>
    </Grid>
  );
});
