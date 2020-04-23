import { MutableRefObject } from "react";

export interface LineChartData {
  time: number;
  value: number;
}

export interface UseLineChart {
  canvas: MutableRefObject<HTMLCanvasElement>;
  chartData: MutableRefObject<LineChartData[]>;
}

export interface ClearCanvas {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  height: number;
  width: number;
}

export interface GetLineCoordinates {
  height: number;
  maxTime: number;
  nextItem: LineChartData;
  time: number;
  value: number;
  width: number;
}

export interface GetLineCoordinatesResult {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}