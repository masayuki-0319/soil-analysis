import { atom } from 'recoil';
import { AnalysisResult } from '../types/AnalysisResult';

const initialState: AnalysisResult = {
  fieldTypeId: 0,
  soilTypeId: 0,
  ph: 0,
  ec: 0,
  cao: 0,
  mgo: 0,
  k2o: 0,
  p2o5: 0,
  no3n: 0,
};

export const analysisResultState = atom({
  key: 'analysisResultStete',
  default: initialState,
});
