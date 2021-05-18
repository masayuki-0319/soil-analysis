import { AnalysisDisplayName, AnalysisKeyName } from './AnalysisSchema';

export type AnalysisItem = {
  keyName: Exclude<AnalysisKeyName, 'cao_saturation' | 'mgo_saturation' | 'k2o_saturation'>;
  displayName: Exclude<AnalysisDisplayName, 'CaO Saturation ( 石灰飽和度 )' | 'MgO Saturation ( 苦土飽和度 )' | 'K2O Saturation ( 加里飽和度 )'>;
  unitName: string | null;
};
