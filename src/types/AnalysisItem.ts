import { AnalysisKeyName, SaturationKeyName, RateKeyName, AnalysisItems } from './AnalysisSchema';

type KeyName = Exclude<AnalysisKeyName, SaturationKeyName | RateKeyName>;
type DisplayName = typeof AnalysisItems[KeyName]['fieldName'];
type UnitName = typeof AnalysisItems[KeyName]['unitName'];

export type AnalysisItem = {
  keyName: KeyName;
  displayName: DisplayName;
  unitName: UnitName;
};

// ref: http://www.hiryou.hokuren.or.jp/analyze/index05.html
// ref: https://www.researchgate.net/figure/Multiple-regression-analysis-for-soil-nitrate-NN-ammonium-AN-and-total-nitrogen-TN_tbl2_332069893
