import { AnalysisItem } from '../../types/AnalysisItem';

export const analysisItems: AnalysisItem[] = [
  {
    keyName: 'ph',
    displayName: 'pH ( 水素イオン指数 )',
    unitName: null,
  },
  {
    keyName: 'ec',
    displayName: 'EC ( 電気伝導度 )',
    unitName: 'mS / cm',
  },
  {
    keyName: 'cao',
    displayName: 'CaO ( 交換性カルシウム )',
    unitName: 'mg / 100g',
  },
  {
    keyName: 'mgo',
    displayName: 'MgO ( 交換性マグネシウム )',
    unitName: 'mg / 100g',
  },
  {
    keyName: 'k2o',
    displayName: 'K2O ( 交換性カリウム )',
    unitName: 'mg / 100g',
  },
  {
    keyName: 'p2o5',
    displayName: 'P2O5 ( 有効態リン酸 )',
    unitName: 'mg / 100g',
  },
  {
    keyName: 'nitro_nn',
    displayName: 'NO3-N ( 硝酸態窒素 )',
    unitName: 'mg / 100g',
  },
];

// ref: http://www.hiryou.hokuren.or.jp/analyze/index05.html
// ref: https://www.researchgate.net/figure/Multiple-regression-analysis-for-soil-nitrate-NN-ammonium-AN-and-total-nitrogen-TN_tbl2_332069893