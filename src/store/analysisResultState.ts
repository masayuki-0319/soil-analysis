import { atom } from 'recoil';
import { AnalysisResult } from '../types/AnalysisResult';

const initialState: AnalysisResult = {
  fieldTypeId: 1,
  soilTypeId: 1,
  ph: 5.3,
  ec: 0.62,
  cao: 248,
  mgo: 13,
  k2o: 98,
  p2o5: 59,
  no3n: 1.0,
};

export const analysisResultState = atom({
  key: 'analysisResultStete',
  default: initialState,
});
