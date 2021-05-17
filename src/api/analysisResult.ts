import { fieldMasterData } from '../masterData/fieldMasterData';
import { AnalysisResult } from '../types/AnalysisResult';
import { AnalysisDisplayName } from '../types/AnalysisSchema';
import { BulletChartDataSet } from '../types/BulletChartDataSet';
import { FieldMasterData } from '../types/FieldMasterData';

// MEMO: 暫定対応として、ビジネスロジックを切り出し
export const post = (analysisResult: AnalysisResult) => {
  return getBulletChartData(analysisResult);
};

const getBulletChartData = (current: AnalysisResult): BulletChartDataSet[] => {
  const { fieldTypeId, soilTypeId, ...currentData } = current;
  const standardData = findMasterData(fieldTypeId, fieldMasterData);

  return [
    createData('pH ( 水素イオン指数 )', currentData.ph, standardData.ph_min, standardData.ph_max, 0.0, 14.0),
    createData('EC ( 電気伝導度 )', currentData.ec, 0, 0.35, 0.0, 4.0),
    createData(
      'CaO ( 交換性カルシウム )',
      currentData.cao,
      calcCaO(standardData.cao_saturation_min),
      calcCaO(standardData.cao_saturation_max),
      0,
      calcCaO(standardData.cao_saturation_max) * 1.25
    ),
    createData(
      'MgO ( 交換性マグネシウム )',
      currentData.mgo,
      calcMgO(standardData.mgo_saturation_min),
      calcMgO(standardData.mgo_saturation_max),
      0,
      calcMgO(standardData.mgo_saturation_max) * 1.25
    ),
    createData(
      'K2O ( 交換性カリウム )',
      currentData.k2o,
      calcK2O(standardData.k2o_saturation_min),
      calcK2O(standardData.k2o_saturation_max),
      0,
      calcK2O(standardData.k2o_saturation_max) * 1.25
    ),
    createData(
      'P2O5 ( 有効態リン酸 )',
      currentData.p2o5,
      standardData.p2o5_min,
      standardData.p2o5_max,
      0,
      standardData.p2o5_max * 1.25
    ),
    createData(
      'NO3-N ( 硝酸態窒素 )',
      currentData.nitro_nn,
      standardData.nitro_nn_min,
      standardData.nitro_nn_max,
      0,
      standardData.nitro_nn_max * 1.25
    ),
  ];
};

const createData = (
  displayName: AnalysisDisplayName,
  current: number,
  min: number,
  max: number,
  chartMin: number,
  chartMax: number
): BulletChartDataSet => {
  return { displayName, current, min, max, chartMin, chartMax };
};

const calcCaO = (data: number): number => {
  const cec = 20;
  return Math.ceil((data * 28.04 * cec) / 100);
};
const calcMgO = (data: number): number => {
  const cec = 20;
  return Math.ceil((data * 20.15 * cec) / 100);
};
const calcK2O = (data: number): number => {
  const cec = 20;
  return Math.ceil((data * 47.1 * cec) / 100);
};

const findMasterData = (fieldTypeId: number, masterData: FieldMasterData[]): FieldMasterData => {
  const resultData = masterData.find((data) => data.id === fieldTypeId);
  if (resultData === undefined) {
    throw new Error('Not found fieldTypeId');
  }

  return resultData;
};
