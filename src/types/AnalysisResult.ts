export type AnalysisResult = {
  fieldTypeId: string;
  soilTypeId: string;
  ph: string;
  ec: string;
  cao: string;
  mgo: string;
  k2o: string;
  p2o5: string;
  no3n: string;
};

type analysisItem = {
  keyName: keyof AnalysisResult;
  labelName: string;
};

export const analysisItems: analysisItem[] = [
  {
    keyName: 'ph',
    labelName: 'pH ( H2O )',
  },
  {
    keyName: 'ec',
    labelName: 'EC',
  },
  {
    keyName: 'cao',
    labelName: 'CaO ( 交換性カルシウム )',
  },
  {
    keyName: 'mgo',
    labelName: 'MgO ( 交換性マグネシウム )',
  },
  {
    keyName: 'k2o',
    labelName: 'K2O ( 交換性カリウム )',
  },
  {
    keyName: 'p2o5',
    labelName: 'P2O5 ( 有効態リン酸 )',
  },
  {
    keyName: 'no3n',
    labelName: 'NO3-N ( 硝酸態窒素 )',
  },
];
