// MEMO: 分析機器による数値を元に導出した定点データ
export type ReportAnalysisResult = {
  fieldTypeId: number;
  soilTypeId: number;
  ph: number;
  ec: number;
  cao: number;
  mgo: number;
  k2o: number;
  p2o5: number;
  nitro_nn: number;
  cao_saturation: number;
  mgo_saturation: number;
  k2o_saturation: number;
};
