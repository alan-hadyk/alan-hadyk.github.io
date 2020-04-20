import { useLayoutEffect, useCallback } from "react";

import colorPalette from "<styles>/variables/colorPalette";

import {
  ClearCanvas,
  GetLineCoordinates,
  GetLineCoordinatesResult,
  LineChartData,
  UseLineChart
} from "<hooks>/__typings__/useLineChart.d.ts";

export default function useLineChart({
  canvas,
  chartData
}: UseLineChart): void {
  const drawChart = useCallback<() => void>(_drawChart, [_drawChart]);

  useLayoutEffect(() => {
    window.requestAnimationFrame(drawChart);
  }, [canvas, chartData, drawChart]);

  function _drawChart(): void {
    if (chartData.current.length < 2 || !canvas.current) {
      window.requestAnimationFrame(drawChart);

      return;
    }

    const lastItem: LineChartData = chartData.current.slice(-1)[0];
    const maxTime: number = lastItem.time;

    const { height, width }: DOMRect = canvas.current.getBoundingClientRect();
    const context: CanvasRenderingContext2D = canvas.current.getContext("2d");

    clearCanvas({
      canvas: canvas.current,
      context,
      height,
      width
    });

    chartData.current.forEach(({ time, value }: LineChartData, index: number) => {
      const nextItem: LineChartData = chartData.current[index + 1];

      if (!nextItem) {
        return;
      }

      const {
        x1,
        x2,
        y1,
        y2
      }: GetLineCoordinatesResult = getLineCoordinates({
        height,
        maxTime,
        nextItem,
        time,
        value,
        width
      });

      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
    });

    context.stroke();

    window.requestAnimationFrame(drawChart);
  }

  function clearCanvas({
    canvas,
    context,
    height,
    width
  }: ClearCanvas): void {
    canvas.width = width;
    canvas.height = height;

    context.clearRect(0, 0, width, height);
    context.strokeStyle = colorPalette.blue300;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowColor = colorPalette.blue100;
    context.shadowBlur = 8;
    context.beginPath();
  }

  function getLineCoordinates({
    height,
    maxTime,
    nextItem,
    time,
    value,
    width
  }: GetLineCoordinates): GetLineCoordinatesResult {
    const {
      time: nextItemTime,
      value: nextItemValue
    }: LineChartData = nextItem;

    const x1: number = (time / maxTime) * width;
    const y1: number = ((60 - value) / 60) * height;
    const x2: number = (nextItemTime / maxTime) * width;
    const y2: number = ((60 - nextItemValue) / 60) * height;

    return {
      x1,
      x2,
      y1,
      y2
    };
  }
}