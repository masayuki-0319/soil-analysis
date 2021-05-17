import { fieldMasterData } from '../masterData/fieldMasterData';
import { AnalysisResult } from '../types/AnalysisResult';
import { AnalysisItems, AnalysisKeyName, analysisKeyNames } from '../types/AnalysisSchema';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { FieldMasterData } from '../types/FieldMasterData';

// MEMO: 暫定対応として、ビジネスロジックを切り出し
export const post = (analysisResult: AnalysisResult) => {
  return getBulletChartData(analysisResult);
};

const getBulletChartData = (current: AnalysisResult): BulletChartDataSet[] => {
  const { fieldTypeId, soilTypeId, ...currentData } = current;
  const standardData = findMasterData(fieldTypeId, fieldMasterData);

  const data = analysisKeyNames.map((keyName) => {
    return calc(keyName, currentData, standardData);
  });
  return data;
};

const calc = (
  keyName: AnalysisKeyName,
  currentData: Pick<AnalysisResult, AnalysisKeyName>,
  masterData: FieldMasterData
): BulletChartDataSet => {
  var min, max, chartMin, chartMax: number;
  if (keyName === 'cao' || keyName === 'mgo' || keyName === 'k2o') {
    const minLiteral = `${keyName}_saturation_min` as const;
    const maxLiteral = `${keyName}_saturation_max` as const;
    min = calcSaturation(masterData[minLiteral], keyName);
    max = calcSaturation(masterData[maxLiteral], keyName);
  } else if (keyName === 'ph') {
    const minLiteral = `${keyName}_min` as const;
    const maxLiteral = `${keyName}_max` as const;
    min = masterData[minLiteral];
    max = masterData[maxLiteral];
  } else {
    const minLiteral = `${keyName}_min` as const;
    const maxLiteral = `${keyName}_max` as const;
    min = masterData[minLiteral];
    max = masterData[maxLiteral];
  }

  if (keyName === 'ph') {
    chartMin = 0;
    chartMax = 14;
  } else {
    chartMin = 0;
    chartMax = max * 1.25;
  }

  return {
    displayName: AnalysisItems[keyName].displayName,
    current: currentData[keyName],
    min: min,
    max: max,
    chartMin: chartMin,
    chartMax: chartMax,
  };
};

const SaturationType = ['cao', 'mgo', 'k2o'] as const;
type SaturationItem = typeof SaturationType[number];
const SaturationCoefficient: { [key in SaturationItem]: number } = {
  cao: 28.04,
  mgo: 20.15,
  k2o: 47.1,
};
const calcSaturation = (data: number, el: SaturationItem) => {
  const cec = 20;
  return Math.ceil((data * SaturationCoefficient[el] * cec) / 100);
};

const findMasterData = (fieldTypeId: number, masterData: FieldMasterData[]): FieldMasterData => {
  const resultData = masterData.find((data) => data.id === fieldTypeId);
  if (resultData === undefined) {
    throw new Error('Not found fieldTypeId');
  }

  return resultData;
};
