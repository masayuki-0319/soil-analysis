import { VFC } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@material-ui/core';
import { ReportAnalysisData } from '../../../types/ReportAnalysisData';
import { useAnalysisItemSelectOptions } from '../../../hooks/useAnalysisItemSelectOptions';
import { AnalysisItems } from '../../../types/AnalysisDataSchema';

type Props = {
  reportAnalysisData: ReportAnalysisData;
};

export const BaseData: VFC<Props> = (props) => {
  const { reportAnalysisData } = props;

  const { fieldTypeData, soilTypeData } = useAnalysisItemSelectOptions();
  const fieldName = fieldTypeData.find((master) => master.id === reportAnalysisData.fieldTypeId);
  const soilName = soilTypeData.find((master) => master.id === reportAnalysisData.soilTypeId);

  return (
    <Grid container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Grid item>
        <TableContainer>
          <Table style={{ width: 'auto' }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">ほ場種類</TableCell>
                <TableCell align="center">土壌分類</TableCell>
                <TableCell align="center">CEC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{fieldName?.name}</TableCell>
                <TableCell>{soilName?.name}</TableCell>
                <TableCell>
                  {reportAnalysisData.cec} ( {AnalysisItems.cec.unitName} )
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
