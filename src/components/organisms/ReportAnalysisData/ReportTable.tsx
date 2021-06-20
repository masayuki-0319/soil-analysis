import { memo, VFC } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import { TableDataSet } from '../../../types/TableDataSet';
import { AnalysisItems } from '../../../types/AnalysisDataSchema';
import { DataSetDetail } from '../../../types/DataSet';

type Props = {
  tableDataSet: TableDataSet;
};

export const ReportTable: VFC<Props> = memo((props) => {
  const { tableDataSet } = props;

  const checkDataStyle = (dataSetDetail: DataSetDetail): React.CSSProperties => {
    const { current, min, max } = dataSetDetail;

    if (current >= min && current <= max) {
      return { backgroundColor: 'white' };
    } else if (current > max) {
      return { backgroundColor: '#FF9999', fontWeight: 'bold' };
    } else {
      return { backgroundColor: '#FFFF99', fontWeight: 'bold' };
    }
  };
  const tableDataSets = Object.values(tableDataSet);

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
          <TableBody>
            {tableDataSets.map((row, index) => (
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
});
