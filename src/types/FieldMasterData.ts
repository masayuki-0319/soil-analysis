export interface FieldMasterData {
  id: number;
  fieldTypeId: number;
  ph_min: number;
  ph_max: number;
  ec_min: number;
  ec_max: number;
  p2o5_min: number;
  p2o5_max: number;
  nitro_nn_min: number;
  nitro_nn_max: number;
  k2o_saturation_min: number;
  k2o_saturation_max: number;
  k2o_saturation_max_power: number;
  cao_saturation_min: number;
  cao_saturation_max: number;
  mgo_saturation_min: number;
  mgo_saturation_max: number;
  ratio_mgo_k2o_min: number;
  ratio_mgo_k2o_max: number;
  base_saturation_min: number;
  base_saturation_max: number;
  sio2_min: number;
  sio2_max?: number;
  ratio_cao_mgo_min: number;
  ratio_cao_mgo_max: number;
}
