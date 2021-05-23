import { VFC, memo, useMemo } from 'react';
import { Grid } from '@material-ui/core';

import { useReportAnalysisResult } from '../../../hooks/useReportAnalysisResult';
import { BulletChart } from '../../molecules/charts/BulletChart';

interface Props {}

export const ReportChart: VFC<Props> = memo(() => {
  const { bulletChartData } = useReportAnalysisResult();

  const data = useMemo(() => {
    return bulletChartData.map((chartData, index) => {
      return (
        <Grid item style={{ width: '800px', height: '100px' }} key={index}>
          <BulletChart chartData={chartData} />
        </Grid>
      );
    });
  }, [bulletChartData]);

  return <Grid container>{data}</Grid>;
});
