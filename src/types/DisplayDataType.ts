export interface DisplayDataType {
  name: string;
  current: number;
  min: number;
  max: number;
  chartData: ChartDataType;
}

export type ChartDataType = {
  min: number;
  max: number;
};
