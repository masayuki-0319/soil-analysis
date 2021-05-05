import { AnalysisItem } from '../types/AnalysisItem';

export const analysisItems: AnalysisItem[] = [
  {
    keyName: 'ph',
    labelName: 'pH ( H2O )',
    unitName: null,
  },
  {
    keyName: 'ec',
    labelName: 'EC',
    unitName: 'mS / cm',
  },
  {
    keyName: 'cao',
    labelName: 'CaO ( 交換性カルシウム )',
    unitName: 'mg / 100g',
  },
  {
    keyName: 'mgo',
    labelName: 'MgO ( 交換性マグネシウム )',
    unitName: 'mg / 100g',
  },
  {
    keyName: 'k2o',
    labelName: 'K2O ( 交換性カリウム )',
    unitName: 'mg / 100g',
  },
  {
    keyName: 'p2o5',
    labelName: 'P2O5 ( 有効態リン酸 )',
    unitName: 'mg / 100g',
  },
  {
    keyName: 'no3n',
    labelName: 'NO3-N ( 硝酸態窒素 )',
    unitName: 'mg / 100g',
  },
];
