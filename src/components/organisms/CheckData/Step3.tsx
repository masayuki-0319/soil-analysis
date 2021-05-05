import { memo, useEffect, VFC } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { analysisResultState } from '../../../store/analysisResultState';
import { useReportAnalysisResult, DisplayDataType } from '../../../hooks/useReportAnalysisResult';
import { FormTopInfo } from '../../molecules/FormTopInfo';

interface Props {}

export const Step3: VFC<Props> = memo(() => {
  const analysisResult = useRecoilValue(analysisResultState);
  const { getReportAnalysisResult, rowReportAnalysisResult } = useReportAnalysisResult();

  useEffect(() => getReportAnalysisResult(analysisResult), [analysisResult]);

  const checkDataStyle = (displayData: DisplayDataType): React.CSSProperties => {
    const { current, min, max } = displayData;

    if (current > min && current < max) {
      return { backgroundColor: 'white' };
    } else if (current > max) {
      return { backgroundColor: '#FF9999', fontWeight: 'bold' };
    } else {
      return { backgroundColor: '#FFFF99', fontWeight: 'bold' };
    }
  };

  const tableDataSet = rowReportAnalysisResult.map((row, index) => (
    <TableRow key={index} style={checkDataStyle(row)}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.current}</TableCell>
      <TableCell align="right">{row.min}</TableCell>
      <TableCell align="right">{row.max}</TableCell>
    </TableRow>
  ));

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <Grid container>
        <FormTopInfo title="土壌分析結果 ( テーブル )" description="※ 前ページの入力結果を出力する。" />
        <Grid item mb={12} xs={12}>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>分析項目</TableCell>
                  <TableCell align="right">測定値</TableCell>
                  <TableCell align="right">目標値 ( Min )</TableCell>
                  <TableCell align="right">目標値 ( Max )</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{tableDataSet}</TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
});
