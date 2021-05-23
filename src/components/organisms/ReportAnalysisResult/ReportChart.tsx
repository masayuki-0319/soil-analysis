import { VFC } from 'react';
import { Grid } from '@material-ui/core';

import { useReportAnalysisResult } from '../../../hooks/useReportAnalysisResult';
import { BulletChart } from '../../molecules/charts/BulletChart';

interface Props {}

export const ReportChart: VFC<Props> = () => {
  const { bulletChartData } = useReportAnalysisResult();

  return (
    <Grid container>
      {bulletChartData.map((chartData, index) => {
        return <BulletChart chartData={chartData} key={index} />;
      })}
    </Grid>
  );
};
