import { fieldMasterData } from '../masterData/fieldMasterData';
import { AnalysisResult } from '../types/AnalysisResult';
import { AnalysisItems, AnalysisKeyName, AllKeyNames } from '../types/AnalysisSchema';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { FieldMasterData } from '../types/FieldMasterData';
import { ReportAnalysisResult } from '../types/ReportAnalysisResult';
import { getReportAnalysisResult } from './reportAnalysisResult/reportAnalysisResult';

// MEMO: 暫定対応として、ビジネスロジックを切り出し
export const post = (analysisResult: AnalysisResult) => {
  return getBulletChartData(analysisResult);
};

type TmpAnalysisResult = Exclude<AnalysisResult, 'fieldTypeId' | 'soilTypeId'>;

const getBulletChartData = (current: AnalysisResult) => {
  const { fieldTypeId, soilTypeId, ...currentData } = current;
  const standardData = findMasterData(fieldTypeId, fieldMasterData);

  const reportAnalysisResult: ReportAnalysisResult = getReportAnalysisResult(current);

  const bulletChartData = AllKeyNames.map((keyName) => {
    return calc(keyName, currentData as TmpAnalysisResult, standardData);
  });
  return { reportAnalysisResult, bulletChartData };
};

const SaturationType = ['cao', 'mgo', 'k2o'] as const;
type SaturationItem = typeof SaturationType[number];

function isSaturation(arg: any): arg is SaturationItem {
  return arg.foo !== undefined;
}

const calc = (
  keyName: AnalysisKeyName,
  currentData: TmpAnalysisResult,
  masterData: FieldMasterData
): BulletChartDataSet => {
  let min: number, max: number, current: number, chartMin: number, chartMax: number;
  if (isSaturation(keyName)) {
    const minLiteral = `${keyName}_saturation_min` as const;
    const maxLiteral = `${keyName}_saturation_max` as const;
    min = calcAbstSaturation(masterData[minLiteral], keyName);
    max = calcAbstSaturation(masterData[maxLiteral], keyName);
    current = currentData[keyName]
  } else if (keyName === 'cao_saturation' || keyName === 'mgo_saturation' || keyName === 'k2o_saturation') {
    const minLiteral = `${keyName}_min` as const;
    const maxLiteral = `${keyName}_max` as const;
    let tmpKey: SaturationItem;
    if (keyName === 'cao_saturation') {
      tmpKey = 'cao'
    } else if (keyName === 'mgo_saturation') {
      tmpKey = 'mgo'
    } else {
      tmpKey = 'k2o'
    }
    min = masterData[minLiteral];
    max = masterData[maxLiteral];
    current = calcRateSaturation(currentData[tmpKey], tmpKey)
  } else if (keyName === 'ph') {
    const minLiteral = `${keyName}_min` as const;
    const maxLiteral = `${keyName}_max` as const;
    min = masterData[minLiteral];
    max = masterData[maxLiteral];
    current = currentData[keyName]
  } else {
    const minLiteral = `${keyName}_min` as const;
    const maxLiteral = `${keyName}_max` as const;
    min = masterData[minLiteral];
    max = masterData[maxLiteral];
    current = currentData[keyName]
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
    current: current,
    min: min,
    max: max,
    chartMin: chartMin,
    chartMax: chartMax,
  };
};

const SaturationCoefficient: { [key in SaturationItem]: number } = {
  cao: 28.04,
  mgo: 20.15,
  k2o: 47.1,
};
const calcAbstSaturation = (practicalData: number, el: SaturationItem) => {
  const cec = 20;
  return Math.ceil((practicalData * SaturationCoefficient[el]) / 100 * cec);
};
const calcRateSaturation = (practicalData: number, el: SaturationItem) => {
  const cec = 20;
  return Math.ceil((practicalData / SaturationCoefficient[el]) * 100 / cec);
};

const findMasterData = (fieldTypeId: number, masterData: FieldMasterData[]): FieldMasterData => {
  const resultData = masterData.find((data) => data.id === fieldTypeId);
  if (resultData === undefined) {
    throw new Error('Not found fieldTypeId');
  }

  return resultData;
};
