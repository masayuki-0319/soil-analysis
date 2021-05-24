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
  cec: number;
  base_saturation: number;
  cao_saturation: number;
  mgo_saturation: number;
  k2o_saturation: number;
  ratio_mgo_k2o: number;
  ratio_cao_mgo: number;
};
