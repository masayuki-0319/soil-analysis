import { memo, useEffect, VFC } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { analysisResultState } from '../../../store/analysisResultState';
import { useReportAnalysisResult } from '../../../hooks/useReportAnalysisResult';

interface Props {}

export const Step3: VFC<Props> = memo(() => {
  const analysisResult = useRecoilValue(analysisResultState);
  const { getReportAnalysisResult, rowReportAnalysisResult } = useReportAnalysisResult();

  useEffect(() => getReportAnalysisResult(analysisResult), [analysisResult]);

  const tableDataSet = rowReportAnalysisResult.map((row, index) => (
    <TableRow key={index}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.current}</TableCell>
      <TableCell align="right">{row.min}</TableCell>
      <TableCell align="right">{row.max}</TableCell>
    </TableRow>
  ));

  return (
    <Grid container>
      <Grid item mb={8} xs={12}>
        <Typography variant="h2">土壌分析結果入力</Typography>
        <Typography variant="body1">※ 前ページの入力結果を出力する。</Typography>
      </Grid>
      <Grid item mb={12} xs={12}>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Elements</TableCell>
                <TableCell align="right">Current</TableCell>
                <TableCell align="right">Target ( Min )</TableCell>
                <TableCell align="right">Target ( Max )</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{tableDataSet}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
});
