import { VFC, memo, useMemo } from 'react';
import { Grid } from '@material-ui/core';

import { useReportAnalysisResult } from '../../../hooks/useReportAnalysisResult';
import { BulletChart } from '../../molecules/charts/BulletChart';

export const ReportChart: VFC = memo(() => {
  const { bulletChartData } = useReportAnalysisResult();

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
