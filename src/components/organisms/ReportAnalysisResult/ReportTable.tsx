import { memo, VFC } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import { useReportAnalysisResult } from '../../../hooks/useReportAnalysisResult';
import { TableDataSet } from '../../../types/TableDataSet';
import { AnalysisItems } from '../../../types/AnalysisSchema';

export const ReportTable: VFC = memo(() => {
  const { tableDataSet } = useReportAnalysisResult();

  const checkDataStyle = (displayData: TableDataSet): React.CSSProperties => {
    const { current, min, max } = displayData;

    if (current >= min && current <= max) {
      return { backgroundColor: 'white' };
    } else if (current > max) {
      return { backgroundColor: '#FF9999', fontWeight: 'bold' };
    } else {
      return { backgroundColor: '#FFFF99', fontWeight: 'bold' };
    }
  };

  const tableRows = tableDataSet.map((row, index) => (
    <TableRow key={index} style={checkDataStyle(row)}>
      <TableCell component="th" scope="row">
        {AnalysisItems[row.keyName].displayName_i18n}
      </TableCell>
      <TableCell component="th" scope="row">
        {AnalysisItems[row.keyName].displayName}
      </TableCell>
      <TableCell>{row.current}</TableCell>
      <TableCell>
        {row.min} ~ {row.max}
      </TableCell>
      <TableCell>{AnalysisItems[row.keyName].unitName}</TableCell>
    </TableRow>
  ));

  return (
    <Grid container>
      <TableContainer>
        <Table style={{ width: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                分析項目
              </TableCell>
              <TableCell align="center">測定結果</TableCell>
              <TableCell align="center">ほ場の適正範囲</TableCell>
              <TableCell align="center">単位</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
});
