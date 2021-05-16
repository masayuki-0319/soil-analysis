import { memo, VFC } from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { useReportAnalysisResult } from '../../../hooks/useReportAnalysisResult';
import { ChartDataSet } from '../../../types/ChartDataSet';

interface Props {}

export const ReportTable: VFC<Props> = memo(() => {
  const { rowReportAnalysisResult } = useReportAnalysisResult();

  const checkDataStyle = (displayData: ChartDataSet): React.CSSProperties => {
    const { current, min, max } = displayData;

    if (current >= min && current <= max) {
      return { backgroundColor: 'white' };
    } else if (current > max) {
      return { backgroundColor: '#FF9999', fontWeight: 'bold' };
    } else {
      return { backgroundColor: '#FFFF99', fontWeight: 'bold' };
    }
  };

  const tableDataSet = rowReportAnalysisResult.map((row, index) => (
    <TableRow key={index} style={checkDataStyle(row)}>
      <TableCell component='th' scope='row'>
        {row.displayName}
      </TableCell>
      <TableCell align='right'>{row.current}</TableCell>
      <TableCell align='right'>{row.min}</TableCell>
      <TableCell align='right'>{row.max}</TableCell>
    </TableRow>
  ));

  return (
    <Grid container>
      <TableContainer>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <TableCell>分析項目</TableCell>
              <TableCell align='right'>測定値</TableCell>
              <TableCell align='right'>目標値 ( Min )</TableCell>
              <TableCell align='right'>目標値 ( Max )</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableDataSet}</TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
});
