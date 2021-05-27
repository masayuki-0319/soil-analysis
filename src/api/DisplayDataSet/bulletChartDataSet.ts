import { BulletChartDataSet } from '../../types/BulletChartDataSet';
import { TableDataSet } from '../../types/TableDataSet';

export const getChartDataSet = (tableDataSet: TableDataSet[]): BulletChartDataSet[] => {
  const bulletChartDataSet = getChartData(tableDataSet);

  return bulletChartDataSet;
};

const getChartData = (tableDataSet: TableDataSet[]): BulletChartDataSet[] => {
  const bulletChartDataSet = tableDataSet.map((tableData) => {
    return calc(tableData);
  });

  return bulletChartDataSet;
};

const calc = (tableDataSet: TableDataSet): BulletChartDataSet => {
  let chartMin: number, chartMax: number;

  if (tableDataSet.keyName === 'ph') {
    chartMin = 0;
    chartMax = 14;
  } else if (
    tableDataSet.keyName === 'cao_saturation' ||
    tableDataSet.keyName === 'mgo_saturation' ||
    tableDataSet.keyName === 'k2o_saturation'
  ) {
    chartMin = 0;
    chartMax = 100;
  } else {
    chartMin = 0;
    chartMax = tableDataSet.max * 1.25;
  }

  return {
    chartMin: chartMin,
    chartMax: chartMax,
    ...tableDataSet,
  };
};
