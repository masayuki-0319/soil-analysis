import { BulletChartDataSet } from '../../types/BulletChartDataSet';
import { TableDataSet } from '../../types/TableDataSet';

export const getChartDataSet = (tableDataSet: TableDataSet[]): BulletChartDataSet[] => {
  const bulletChartDataSet = displayData(tableDataSet);

  return bulletChartDataSet;
};

const displayData = (tableDataSet: TableDataSet[]): BulletChartDataSet[] => {
  return getChartData(tableDataSet);
};

const getChartData = (tableDataSet: TableDataSet[]) => {
  const BulletChartDataSet = tableDataSet.map((tableData) => {
    return calc(tableData);
  });
  return BulletChartDataSet;
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
