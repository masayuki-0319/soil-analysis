import { VFC, memo, useMemo } from 'react';
import { Grid } from '@material-ui/core';

import { BulletChart } from '../../molecules/charts/BulletChart';
import { BulletChartDataSet } from '../../../types/BulletChartDataSet';

type Props = {
  bulletChartData: BulletChartDataSet;
};

export const ReportChart: VFC<Props> = memo((props) => {
  const { bulletChartData } = props;

  const chartDataSets = Object.values(bulletChartData);

  const data = useMemo(() => {
    return chartDataSets.map((chartData, index) => {
      return (
        <Grid item style={{ width: '800px', height: '80px' }} key={index}>
          <BulletChart chartData={chartData} />
        </Grid>
      );
    });
  }, [chartDataSets]);

  return <Grid>{data}</Grid>;
});
