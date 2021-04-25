import { useState } from 'react';
import { fieldMasterData } from '../masterData/fieldMasterData';
import { AnalysisResult } from '../types/AnalysisResult';
import { FieldMasterData } from '../types/FieldMasterData';

export interface DisplayDataType {
  name: string;
  current: number;
  min: number;
  max: number;
}

export const useReportAnalysisResult = () => {
  const [rowReportAnalysisResult, setReportAnalysisResult] = useState<DisplayDataType[]>([]);

  const getReportAnalysisResult = (analysisResult: AnalysisResult) => {
    const data = displayData(analysisResult);
    setReportAnalysisResult(data);
  };

  return { rowReportAnalysisResult, getReportAnalysisResult };
};

const displayData = (current: AnalysisResult): DisplayDataType[] => {
  const currentData = current;
  const standardData = findMasterData(currentData.fieldTypeId, fieldMasterData);

  return [
    createData('pH (H2O)', currentData.ph, standardData.pH_MIN, standardData.pH_MAX),
    createData('EC', currentData.ec, 0, 0.35),
    createData(
      'CaO (交換性石灰)',
      currentData.cao,
      calcCaO(standardData.CaO_saturation_MIN),
      calcCaO(standardData.CaO_saturation_MAX)
    ),
    createData(
      'MgO (交換性苦土)',
      currentData.mgo,
      calcMgO(standardData.MgO_saturation_MIN),
      calcMgO(standardData.MgO_saturation_MAX)
    ),
    createData(
      'K2O (交換性加里)',
      currentData.k2o,
      calcK2O(standardData.K2O_saturation_MIN),
      calcK2O(standardData.K2O_saturation_MAX)
    ),
    createData('P2O5(有効態リン酸)', currentData.p2o5, standardData.P2O5_MIN, standardData.P2O5_MAX),
    createData('NO3-N (硝酸態窒素)', currentData.no3n, standardData.NO3_N_MIN, standardData.NO3_N_MAX),
  ];
};

const createData = (name: string, current: number, min: number, max: number): DisplayDataType => {
  return { name, current, min, max };
};

const calcCaO = (data: number): number => {
  const cec = 20;
  return (data * 28.04 * cec) / 100;
};
const calcMgO = (data: number): number => {
  const cec = 20;
  return (data * 20.15 * cec) / 100;
};
const calcK2O = (data: number): number => {
  const cec = 20;
  return (data * 47.1 * cec) / 100;
};

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}

const findMasterData = (currentFieldType: number, masterData: FieldMasterData[]): FieldMasterData => {
  const resultData = masterData.find((data) => data.id === currentFieldType);
  assertIsDefined(resultData);

  return resultData;
};
