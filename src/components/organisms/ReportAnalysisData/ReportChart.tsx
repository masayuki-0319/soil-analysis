import { VFC, memo, useMemo } from 'react';
import { Grid } from '@material-ui/core';

import { BulletChart } from '../../molecules/charts/BulletChart';
import { BulletChartDataSet } from '../../../types/BulletChartDataSet';

type Props = {
  bulletChartData: BulletChartDataSet[];
};

export const ReportChart: VFC<Props> = memo((props) => {
  const { bulletChartData } = props;

  const data = useMemo(() => {
    return bulletChartData.map((chartData, index) => {
      return (
        <Grid item style={{ width: '800px', height: '80px' }} key={index}>
          <BulletChart chartData={chartData} />
        </Grid>
      );
    });
  }, [bulletChartData]);

  return <Grid>{data}</Grid>;
});
