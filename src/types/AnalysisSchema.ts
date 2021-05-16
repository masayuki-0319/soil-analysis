export type AnalysisKeyName = keyof typeof AnalysisItems;
export type AnalysisDisplayName = typeof AnalysisItems[AnalysisKeyName]['displayName'];

const AnalysisItems = {
  ph: {
    keyName: 'ph',
    displayName: 'pH ( 水素イオン指数 )',
    unitName: null,
  },
  ec: {
    keyName: 'ec',
    displayName: 'EC ( 電気伝導度 )',
    unitName: 'mS / cm',
  },
  cao: {
    keyName: 'cao',
    displayName: 'CaO ( 交換性カルシウム )',
    unitName: 'mg / 100g',
  },
  mgo: {
    keyName: 'mgo',
    displayName: 'MgO ( 交換性マグネシウム )',
    unitName: 'mg / 100g',
  },
  k2o: {
    keyName: 'k2o',
    displayName: 'K2O ( 交換性カリウム )',
    unitName: 'mg / 100g',
  },
  p2o5: {
    keyName: 'p2o5',
    displayName: 'P2O5 ( 有効態リン酸 )',
    unitName: 'mg / 100g',
  },
  nitro_nn: {
    keyName: 'nitro_nn',
    displayName: 'NO3-N ( 硝酸態窒素 )',
    unitName: 'mg / 100g',
  },
} as const
