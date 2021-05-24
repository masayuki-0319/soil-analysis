import { AnalysisFieldName, AnalysisKeyName, SaturationKeyName } from './AnalysisSchema';

export type AnalysisItem = {
  keyName: Exclude<AnalysisKeyName, SaturationKeyName>;
  displayName: Exclude<
    AnalysisFieldName,
    | 'Base Saturation ( 塩基飽和度 )'
    | 'CaO Saturation ( 石灰飽和度 )'
    | 'MgO Saturation ( 苦土飽和度 )'
    | 'K2O Saturation ( 加里飽和度 )'
  >;
  unitName: string | null;
};
