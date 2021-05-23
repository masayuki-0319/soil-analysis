import { fieldMasterData } from '../masterData/fieldMasterData';
import { AnalysisKeyName, AllKeyNames } from '../../types/AnalysisSchema';
import { FieldMasterData } from '../../types/FieldMasterData';
import { ReportAnalysisResult } from '../../types/ReportAnalysisResult';
import { calcAbstSaturation, calcRateSaturation, findMasterData } from './utilDataCalculator';
import { TableDataSet } from '../../types/TableDataSet';

export const getTableDataSet = (reportAnalysisResult: ReportAnalysisResult): TableDataSet[] => {
  const tableDataSet = displayData(reportAnalysisResult);

  return tableDataSet;
};

const displayData = (reportAnalysisResult: ReportAnalysisResult): TableDataSet[] => {
  return getTableData(reportAnalysisResult);
};

const getTableData = (current: ReportAnalysisResult) => {
  const { fieldTypeId, soilTypeId } = current;
  const standardData = findMasterData(fieldTypeId, fieldMasterData);
  console.log(soilTypeId);

  const tableDataSet = AllKeyNames.map((keyName) => {
    return calc(keyName, current, standardData);
  });
  return tableDataSet;
};

const SaturationType = ['cao', 'mgo', 'k2o'] as const;
type SaturationItem = typeof SaturationType[number];

const calc = (
  keyName: Exclude<AnalysisKeyName, 'cec'>,
  currentData: ReportAnalysisResult,
  masterData: FieldMasterData
): TableDataSet => {
  let min: number, max: number, current: number;
  if (keyName === 'cao' || keyName === 'mgo' || keyName === 'k2o') {
    const minLiteral = `${keyName}_saturation_min` as const;
    const maxLiteral = `${keyName}_saturation_max` as const;
    min = calcAbstSaturation(currentData.cec, masterData[minLiteral], keyName);
    max = calcAbstSaturation(currentData.cec, masterData[maxLiteral], keyName);
    current = currentData[keyName];
  } else if (keyName === 'cao_saturation' || keyName === 'mgo_saturation' || keyName === 'k2o_saturation') {
    const minLiteral = `${keyName}_min` as const;
    const maxLiteral = `${keyName}_max` as const;
    let tmpKey: SaturationItem;
    if (keyName === 'cao_saturation') {
      tmpKey = 'cao';
    } else if (keyName === 'mgo_saturation') {
      tmpKey = 'mgo';
    } else {
      tmpKey = 'k2o';
    }
    min = masterData[minLiteral];
    max = masterData[maxLiteral];
    current = calcRateSaturation(currentData.cec, currentData[tmpKey], tmpKey);
  } else if (keyName === 'ph') {
    const minLiteral = `${keyName}_min` as const;
    const maxLiteral = `${keyName}_max` as const;
    min = masterData[minLiteral];
    max = masterData[maxLiteral];
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
