import { FieldMasterData } from '../../types/FieldMasterData';

const SaturationType = ['cao', 'mgo', 'k2o'] as const;
type SaturationItem = typeof SaturationType[number];

const SaturationCoefficient: { [key in SaturationItem]: number } = {
  cao: 28.04,
  mgo: 20.15,
  k2o: 47.1,
};

export const calcAbstSaturation = (cec: number, practicalData: number, el: SaturationItem) => {
  return Math.ceil(((practicalData * SaturationCoefficient[el]) / 100) * cec * 10) / 10;
};

export const calcRateSaturation = (cec: number, practicalData: number, el: SaturationItem) => {
  return Math.ceil((((practicalData / SaturationCoefficient[el]) * 100) / cec) * 10) / 10;
};

export const findMasterData = (fieldTypeId: number, masterData: FieldMasterData[]): FieldMasterData => {
  const resultData = masterData.find((data) => data.id === fieldTypeId);
  if (resultData === undefined) {
    throw new Error('Not found fieldTypeId');
  }

  return resultData;
};
