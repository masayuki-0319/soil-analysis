import { atom } from 'recoil';
import { AnalysisResult } from '../types/AnalysisResult';

const initialState: AnalysisResult = {
  fieldTypeId: '',
  soilTypeId: '',
};

export const analysisResultState = atom({
  key: 'analysisResultStete',
  default: initialState,
});
