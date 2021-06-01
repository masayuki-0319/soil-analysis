import { VFC } from 'react';
import { Grid } from '@material-ui/core';
import GradientIcon from '@material-ui/icons/Gradient';
import ToysIcon from '@material-ui/icons/Toys';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

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
        <ToysIcon />
        {fieldName?.name}
      </Grid>
      <Grid item>
        <GradientIcon />
        {soilName?.name}
      </Grid>
      <Grid item>
        <CheckBoxOutlineBlankIcon />
        {reportAnalysisData.cec} ( {AnalysisItems.cec.unitName} )
      </Grid>
    </Grid>
  );
};
