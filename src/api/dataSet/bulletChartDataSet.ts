import { DataSetDetail } from './../../types/DataSet';
import { BulletChartDataSet, BulletChartDataSetDetail } from '../../types/BulletChartDataSet';
import { TableDataSet } from '../../types/TableDataSet';
import { DataSetKeyName, DataSetKeyNames } from '../../types/AnalysisDataSchema';

export const getChartDataSet = (tableDataSet: TableDataSet): BulletChartDataSet => {
  const bulletChartDataSet = getChartData(tableDataSet);

  return bulletChartDataSet;
};

const getChartData = (tableDataSet: TableDataSet): BulletChartDataSet => {
  const bulletChartDataSet: BulletChartDataSet = DataSetKeyNames.reduce((acc: BulletChartDataSet, keyName: DataSetKeyName) => {
    acc[keyName] = calc(tableDataSet[keyName]);
    return acc;
  }, tableDataSet as BulletChartDataSet);


  return bulletChartDataSet;
};

const calc = (tableDataSet: DataSetDetail): BulletChartDataSetDetail => {
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
