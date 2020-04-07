import {
  LineChartData
} from "<hooks>/__typings__/useLineChart.d.ts";

export interface UseFpsCounter {
  chartData: MutableRefObject<LineChartData[]>;
  fpsContainer: MutableRefObject<HTMLDivElement>;
}