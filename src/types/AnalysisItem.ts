import { AnalysisFieldName, AnalysisKeyName, SaturationKeyName, RateKeyName } from './AnalysisSchema';

export type AnalysisItem = {
  keyName: Exclude<AnalysisKeyName, SaturationKeyName | RateKeyName>;
  displayName: Exclude<
    AnalysisFieldName,
    | 'Base Saturation ( 塩基飽和度 )'
    | 'CaO Saturation ( 石灰飽和度 )'
    | 'MgO Saturation ( 苦土飽和度 )'
    | 'K2O Saturation ( 加里飽和度 )'
    | 'MgO / K2O ( 苦土加里比 )'
    | 'CaO / MgO ( 石灰苦土比 )'
  >;
  unitName: string | null;
};
