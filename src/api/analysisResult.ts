import { fieldMasterData } from '../masterData/fieldMasterData';
import { AnalysisResult } from '../types/AnalysisResult';
import { AnalysisDisplayName } from '../types/AnalysisSchema';
import { ChartDataSet } from '../types/ChartDataSet';
import { FieldMasterData } from '../types/FieldMasterData';

// MEMO: 暫定対応として、ビジネスロジックを切り出し
export const post = (props: AnalysisResult) => {
  return displayData(props);
};

const displayData = (current: AnalysisResult): ChartDataSet[] => {
  const {fieldTypeId, soilTypeId,  ...currentData} = current;
  const standardData = findMasterData(fieldTypeId, fieldMasterData);

  return [
    createData(
      'pH ( 水素イオン指数 )',
      currentData.ph,
      standardData.pH_MIN,
      standardData.pH_MAX,
      0.0,
      14.0
    ),
    createData('EC ( 電気伝導度 )', currentData.ec, 0, 0.35, 0.0, 4.0),
    createData(
      'CaO ( 交換性カルシウム )',
      currentData.cao,
      calcCaO(standardData.CaO_saturation_MIN),
      calcCaO(standardData.CaO_saturation_MAX),
      0,
      calcCaO(standardData.CaO_saturation_MAX) * 1.25
    ),
    createData(
      'MgO ( 交換性マグネシウム )',
      currentData.mgo,
      calcMgO(standardData.MgO_saturation_MIN),
      calcMgO(standardData.MgO_saturation_MAX),
      0,
      calcMgO(standardData.MgO_saturation_MAX) * 1.25
    ),
    createData(
      'K2O ( 交換性カリウム )',
      currentData.k2o,
      calcK2O(standardData.K2O_saturation_MIN),
      calcK2O(standardData.K2O_saturation_MAX),
      0,
      calcK2O(standardData.K2O_saturation_MAX) * 1.25
    ),
    createData(
      'P2O5 ( 有効態リン酸 )',
      currentData.p2o5,
      standardData.P2O5_MIN,
      standardData.P2O5_MAX,
      0,
      standardData.P2O5_MAX * 1.25
    ),
    createData(
      'NO3-N ( 硝酸態窒素 )',
      currentData.nitro_nn,
      standardData.NO3_N_MIN,
      standardData.NO3_N_MAX,
      0,
      standardData.NO3_N_MAX * 1.25
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
): ChartDataSet => {
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

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}

const findMasterData = (
  currentFieldTypeId: number,
  masterData: FieldMasterData[]
): FieldMasterData => {
  const resultData = masterData.find((data) => data.id === currentFieldTypeId);
  assertIsDefined(resultData);

  return resultData;
};
