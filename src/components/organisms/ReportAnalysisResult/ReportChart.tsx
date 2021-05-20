import { VFC } from 'react';
import { Grid } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

import { useReportAnalysisResult } from '../../../hooks/useReportAnalysisResult';

interface Props {}

export const ReportChart: VFC<Props> = () => {
  const { bulletChartData } = useReportAnalysisResult();

  return (
    <Grid container>
      {bulletChartData.map((data, index) => {
        const { chartMin, chartMax } = data;
        return (
          <BarChart
            layout="vertical"
            barGap={0}
            width={800}
            height={80}
            data={[data]}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            key={index}
          >
            <XAxis type="number" domain={[chartMin, chartMax]} allowDataOverflow={true} />
            <YAxis dataKey="displayName" type="category" yAxisId={0} width={150} />
            <YAxis dataKey="name" type="category" yAxisId={1} hide />
            <YAxis dataKey="name" type="category" yAxisId={2} hide />
            <YAxis dataKey="name" type="category" yAxisId={3} hide />

            <Bar dataKey="chartMax" barSize={40} yAxisId={0} fill="red" opacity={0.7} />
            <Bar dataKey="max" barSize={40} yAxisId={1} fill="lightgreen" />
            <Bar dataKey="min" barSize={40} yAxisId={2} fill="yellow" />
            <Bar dataKey="current" barSize={10} yAxisId={3} fill="black" />
          </BarChart>
        );
      })}
    </Grid>
  );
};
