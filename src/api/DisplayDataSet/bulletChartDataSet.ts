import { fieldMasterData } from '../../masterData/fieldMasterData';
import { AnalysisItems, AnalysisKeyName, AllKeyNames } from '../../types/AnalysisSchema';
import { FieldMasterData } from '../../types/FieldMasterData';
import { ReportAnalysisResult } from '../../types/ReportAnalysisResult';
import { calcAbstSaturation, calcRateSaturation, findMasterData } from './utilDataCalculator'
import { BulletChartDataSet } from '../../types/BulletChartDataSet';

export const getChartDataSet = (reportAnalysisResult: ReportAnalysisResult): BulletChartDataSet[] => {
  const bulletChartDataSet = displayData(reportAnalysisResult);

  return bulletChartDataSet;
};

const displayData = (reportAnalysisResult: ReportAnalysisResult): BulletChartDataSet[] => {
  return getChartData(reportAnalysisResult);
};

const getChartData = (current: ReportAnalysisResult) => {
  const { fieldTypeId, soilTypeId } = current;
  const standardData = findMasterData(fieldTypeId, fieldMasterData);
  console.log(soilTypeId);

  const BulletChartDataSet = AllKeyNames.map((keyName) => {
    return calc(keyName, current, standardData);
  });
  return BulletChartDataSet;
};

const SaturationType = ['cao', 'mgo', 'k2o'] as const;
type SaturationItem = typeof SaturationType[number];

const calc = (
  keyName: AnalysisKeyName,
  currentData: ReportAnalysisResult,
  masterData: FieldMasterData
): BulletChartDataSet => {
  let min: number, max: number, current: number, chartMin: number, chartMax: number;
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

  if (keyName === 'ph') {
    chartMin = 0;
    chartMax = 14;
  } else if (keyName === 'cao_saturation' || keyName === 'mgo_saturation' || keyName === 'k2o_saturation') {
    chartMin = 0;
    chartMax = 100;
  } else {
    chartMin = 0;
    chartMax = max * 1.25;
  }

  return {
    keyName: keyName,
    displayName: AnalysisItems[keyName].displayName,
    current: current,
    min: min,
    max: max,
    chartMin: chartMin,
    chartMax: chartMax,
  };
};
