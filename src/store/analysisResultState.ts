import { atom } from 'recoil';
import { AnalysisResult } from '../types/AnalysisResult';

const initialState: AnalysisResult = {
  fieldTypeId: '',
  soilTypeId: '',
  ph: '',
  ec: '',
  cao: '',
  mgo: '',
  k2o: '',
  p2o5: '',
  no3n: '',
};

export const analysisResultState = atom({
  key: 'analysisResultStete',
  default: initialState,
});
