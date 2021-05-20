import { fieldMasterData } from '../../masterData/fieldMasterData';
import { AnalysisItems, AnalysisKeyName, AllKeyNames } from '../../types/AnalysisSchema';
import { FieldMasterData } from '../../types/FieldMasterData';
import { ReportAnalysisResult } from '../../types/ReportAnalysisResult';
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
  keyName: AnalysisKeyName,
  currentData: ReportAnalysisResult,
  masterData: FieldMasterData
): TableDataSet => {
  let min: number, max: number, current: number;
  if (keyName === 'cao' || keyName === 'mgo' || keyName === 'k2o') {
    const minLiteral = `${keyName}_saturation_min` as const;
    const maxLiteral = `${keyName}_saturation_max` as const;
    min = calcAbstSaturation(masterData[minLiteral], keyName);
    max = calcAbstSaturation(masterData[maxLiteral], keyName);
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
    current = calcRateSaturation(currentData[tmpKey], tmpKey);
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
    displayName: AnalysisItems[keyName].displayName,
    current: current,
    min: min,
    max: max,
  };
};

const SaturationCoefficient: { [key in SaturationItem]: number } = {
  cao: 28.04,
  mgo: 20.15,
  k2o: 47.1,
};
const calcAbstSaturation = (practicalData: number, el: SaturationItem) => {
  const cec = 20;
  return Math.ceil(((practicalData * SaturationCoefficient[el]) / 100) * cec);
};
const calcRateSaturation = (practicalData: number, el: SaturationItem) => {
  const cec = 20;
  return Math.ceil(((practicalData / SaturationCoefficient[el]) * 100) / cec);
};

const findMasterData = (fieldTypeId: number, masterData: FieldMasterData[]): FieldMasterData => {
  const resultData = masterData.find((data) => data.id === fieldTypeId);
  if (resultData === undefined) {
    throw new Error('Not found fieldTypeId');
  }

  return resultData;
};
