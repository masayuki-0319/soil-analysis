import { atom, useRecoilState } from 'recoil';
import { InputAnalysisData } from '../types/InputAnalysisData';

const initialState: InputAnalysisData = {
  fieldTypeId: 1,
  soilTypeId: 1,
  ph: 5.3,
  ec: 0.62,
  cao: 248,
  mgo: 13,
  k2o: 98,
  p2o5: 59,
  nitro_nn: 1.0,
  cec: 20,
};

const analysisResultState = atom<InputAnalysisData>({
  key: 'analysisResultStete',
  default: initialState,
});

export const useAnalysisResult = () => {
  const [analysisResult, setAnalysisResult] = useRecoilState(analysisResultState);

  return {
    analysisResult: analysisResult,
    setAnalysisResult: setAnalysisResult,
  };
};
