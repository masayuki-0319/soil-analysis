import { useEffect, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { Paper, Grid } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

import { FormTopInfo } from '../../molecules/FormTopInfo';
import { analysisResultState } from '../../../store/analysisResultState';
import { useReportAnalysisResult, DisplayDataType } from '../../../hooks/useReportAnalysisResult';

interface Props {}

const ReportChart: VFC<Props> = () => {
  const analysisResult = useRecoilValue(analysisResultState);
  const { getReportAnalysisResult, rowReportAnalysisResult } = useReportAnalysisResult();

  useEffect(() => getReportAnalysisResult(analysisResult), [analysisResult]);

  const rawData = rowReportAnalysisResult;

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <Grid container>
        <FormTopInfo title="土壌分析結果 ( チャート )" description="" />
        <Grid item>
          {rawData.map((data: DisplayDataType, index: number) => {
            const { min, max } = data.chartData;
            return (
              <BarChart
                layout="vertical"
                barGap={0}
                width={800}
                height={100}
                data={[data]}
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                key={index}
              >
                <XAxis type="number" domain={[min, max]} allowDataOverflow={true} />
                <YAxis dataKey="name" type="category" yAxisId={0} width={150} />
                <YAxis dataKey="name" type="category" yAxisId={1} hide />
                <YAxis dataKey="name" type="category" yAxisId={2} hide />
                <YAxis dataKey="name" type="category" yAxisId={3} hide />

                <Bar dataKey="chartData['max']" barSize={40} yAxisId={0} fill="red" opacity={0.7} />
                <Bar dataKey="max" barSize={40} yAxisId={1} fill="lightgreen" />
                <Bar dataKey="min" barSize={40} yAxisId={2} fill="yellow" />
                <Bar dataKey="current" barSize={10} yAxisId={3} fill="black" />
              </BarChart>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ReportChart;
