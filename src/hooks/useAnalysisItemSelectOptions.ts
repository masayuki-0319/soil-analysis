import { fieldTypeData } from '../api/masterData/fiedlTypeData';
import { soilTypeData } from '../api/masterData/soilTypeData';

export const useAnalysisItemSelectOptions = () => {
  return { fieldTypeData, soilTypeData };
};
