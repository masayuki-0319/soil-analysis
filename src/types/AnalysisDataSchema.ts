export type AnalysisKeyName = keyof typeof AnalysisItems;
export const DataSetKeyNames = [
  'ph',
  'ec',
  'cao',
  'mgo',
  'k2o',
  'p2o5',
  'nitro_nn',
  'base_saturation',
  'cao_saturation',
  'mgo_saturation',
  'k2o_saturation',
  'ratio_mgo_k2o',
  'ratio_cao_mgo',
] as const;
export type DataSetKeyName = typeof DataSetKeyNames[number];
export type SaturationKeyName = ['cao', 'mgo', 'k2o'][number];
export type RateSaturationKeyName = [
  'base_saturation',
  'cao_saturation',
  'mgo_saturation',
  'k2o_saturation'
][number];
export type RateKeyName = ['ratio_mgo_k2o', 'ratio_cao_mgo'][number];

export const AnalysisItems = {
  ph: {
    keyName: 'ph',
    displayName: 'pH',
    displayName_i18n: '水素イオン指数',
    fieldName: 'pH ( 水素イオン指数 )',
    unitName: null,
  },
  ec: {
    keyName: 'ec',
    displayName: 'EC',
    displayName_i18n: '電気伝導度',
    fieldName: 'EC ( 電気伝導度 )',
    unitName: 'mS / cm',
  },
  cao: {
    keyName: 'cao',
    displayName: 'CaO',
    displayName_i18n: '交換性カルシウム',
    fieldName: 'CaO ( 交換性カルシウム )',
    unitName: 'mg / 100g',
  },
  mgo: {
    keyName: 'mgo',
    displayName: 'MgO',
    displayName_i18n: '交換性マグネシウム',
    fieldName: 'MgO ( 交換性マグネシウム )',
    unitName: 'mg / 100g',
  },
  k2o: {
    keyName: 'k2o',
    displayName: 'K2O',
    displayName_i18n: '交換性カリウム',
    fieldName: 'K2O ( 交換性カリウム )',
    unitName: 'mg / 100g',
  },
  p2o5: {
    keyName: 'p2o5',
    displayName: 'P2O5',
    displayName_i18n: '有効態リン酸',
    fieldName: 'P2O5 ( 有効態リン酸 )',
    unitName: 'mg / 100g',
  },
  nitro_nn: {
    keyName: 'nitro_nn',
    displayName: 'NO3-N',
    displayName_i18n: '硝酸態窒素',
    fieldName: 'NO3-N ( 硝酸態窒素 )',
    unitName: 'mg / 100g',
  },
  cec: {
    keyName: 'cec',
    displayName: 'CEC',
    displayName_i18n: '陽イオン交換容量',
    fieldName: 'CEC ( 陽イオン交換容量 )',
    unitName: 'meq / 100g',
  },
  base_saturation: {
    keyName: 'base_saturation',
    displayName: 'Base Saturation',
    displayName_i18n: '塩基飽和度',
    fieldName: 'Base Saturation ( 塩基飽和度 )',
    unitName: '%',
  },
  cao_saturation: {
    keyName: 'cao_saturation',
    displayName: 'CaO Saturation',
    displayName_i18n: '石灰飽和度',
    fieldName: 'CaO Saturation ( 石灰飽和度 )',
    unitName: '%',
  },
  mgo_saturation: {
    keyName: 'mgo_saturation',
    displayName: 'MgO Saturation',
    displayName_i18n: '苦土飽和度',
    fieldName: 'MgO Saturation ( 苦土飽和度 )',
    unitName: '%',
  },
  k2o_saturation: {
    keyName: 'k2o_saturation',
    displayName: 'K2O Saturation',
    displayName_i18n: '加里飽和度',
    fieldName: 'K2O Saturation ( 加里飽和度 )',
    unitName: '%',
  },
  ratio_mgo_k2o: {
    keyName: 'ratio_mgo_k2o',
    displayName: 'MgO / K20',
    displayName_i18n: '苦土加里比',
    fieldName: 'MgO / K2O ( 苦土加里比 )',
    unitName: '%',
  },
  ratio_cao_mgo: {
    keyName: 'ratio_cao_mgo',
    displayName: 'CaO / MgO',
    displayName_i18n: '石灰苦土比',
    fieldName: 'CaO / MgO ( 石灰苦土比 )',
    unitName: '%',
  },
} as const;
