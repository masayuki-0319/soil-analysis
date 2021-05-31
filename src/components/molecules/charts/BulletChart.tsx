import { VFC } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

import { BulletChartDataSetDetail } from '../../../types/BulletChartDataSet';
import { AnalysisItems } from '../../../types/AnalysisDataSchema';

type Props = {
  chartData: BulletChartDataSetDetail;
};

export const BulletChart: VFC<Props> = (props) => {
  const { chartData } = props;
  const { chartMin, chartMax } = chartData;
  const argChartData = [chartData];

  return (
    <BarChart
      layout="vertical"
      barGap={0}
      width={800}
      height={80}
      data={argChartData}
      margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
    >
      <XAxis type="number" domain={[chartMin, chartMax]} allowDataOverflow={true} />
      <YAxis
        dataKey={(obj: typeof argChartData[number]) => AnalysisItems[obj.keyName].fieldName}
        width={200}
        tick={{ fontWeight: 'bold' }}
        type="category"
        yAxisId={0}
      />
      <YAxis dataKey="name" type="category" yAxisId={1} hide />
      <YAxis dataKey="name" type="category" yAxisId={2} hide />
      <YAxis dataKey="name" type="category" yAxisId={3} hide />

      <Bar dataKey="chartMax" barSize={40} yAxisId={0} fill="red" opacity={0.7} />
      <Bar dataKey="max" barSize={40} yAxisId={1} fill="lightgreen" />
      <Bar dataKey="min" barSize={40} yAxisId={2} fill="yellow" />
      <Bar dataKey="current" barSize={10} yAxisId={3} fill="black" />
    </BarChart>
  );
};
