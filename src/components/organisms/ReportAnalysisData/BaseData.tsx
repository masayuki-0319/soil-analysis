import { VFC } from 'react';
import { Grid, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faTeeth, faRulerVertical } from '@fortawesome/free-solid-svg-icons';

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
      <Grid item m={2} style={{ display: 'flex' }}>
        <Box>
          <FontAwesomeIcon icon={faSolarPanel} />
        </Box>
        <Box>{fieldName?.name}</Box>
      </Grid>
      <Grid item m={2} style={{ display: 'flex' }}>
        <Box>
          <FontAwesomeIcon icon={faTeeth} />
        </Box>
        <Box> {soilName?.name}</Box>
      </Grid>
      <Grid item m={2} style={{ display: 'flex' }}>
        <Box>
          <FontAwesomeIcon icon={faRulerVertical} />
        </Box>
        <Box>
          {reportAnalysisData.cec} ( {AnalysisItems.cec.unitName} )
        </Box>
      </Grid>
    </Grid>
  );
};
