export type ChartDetails = {
  title: string;
  categories: string[];
  series: ChartData[];
};
export type ChartData = {
  name: string;
  data: number[];
};