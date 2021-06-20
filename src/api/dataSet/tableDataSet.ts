import { fieldMasterData } from '../masterData/fieldMasterData';
import { calcAbstSaturation, findMasterData } from './utilDataCalculator';
import { DataSetKeyName, DataSetKeyNames } from '../../types/AnalysisDataSchema';
import { FieldMasterData } from '../../types/FieldMasterData';
import { ReportAnalysisData } from '../../types/ReportAnalysisData';
import { DataSet, DataSetDetail } from '../../types/DataSet';

export const getTableDataSet = (reportAnalysisResult: ReportAnalysisData): DataSet => {
  const tableDataSet = getTableData(reportAnalysisResult);

  return tableDataSet;
};

const getTableData = (current: ReportAnalysisData) => {
  const { fieldTypeId, soilTypeId } = current;
  console.log(soilTypeId);

  const standardData = findMasterData(fieldTypeId, fieldMasterData);

  const tableDataSet: DataSet = DataSetKeyNames.reduce((acc: DataSet, keyName: DataSetKeyName) => {
    acc[keyName] = calc(keyName, current, standardData);
    return acc;
  }, {} as DataSet);

  return tableDataSet;
};

const calc = (keyName: DataSetKeyName, currentData: ReportAnalysisData, masterData: FieldMasterData): DataSetDetail => {
  let min: number, max: number, current: number;

  if (keyName === 'cao' || keyName === 'mgo' || keyName === 'k2o') {
    const minLiteral = `${keyName}_saturation_min` as const;
    const maxLiteral = `${keyName}_saturation_max` as const;

    min = calcAbstSaturation(currentData.cec, masterData[minLiteral], keyName);
    max = calcAbstSaturation(currentData.cec, masterData[maxLiteral], keyName);
    current = currentData[keyName];
  } else {
    const minLiteral = `${keyName}_min` as const;
    const maxLiteral = `${keyName}_max` as const;

    min = masterData[minLiteral];
    max = masterData[maxLiteral];
    current = currentData[keyName];
  }

  return {
    keyName: keyName,
    current: current,
    min: min,
    max: max,
  };
};
