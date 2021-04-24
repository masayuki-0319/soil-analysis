import { atom } from 'recoil';
import { AnalysisResult } from '../types/AnalysisResult';

const initialState: AnalysisResult = {
  fieldTypeId: '',
  soilTypeId: '',
  ph: '',
};

export const analysisResultState = atom({
  key: 'analysisResultStete',
  default: initialState,
});
