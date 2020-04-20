import { useLayoutEffect, useRef, useCallback } from "react";

import {
  LineChartData
} from "<hooks>/__typings__/useLineChart.d.ts";
import {
  UseFpsCounter
} from "<hooks>/__typings__/useFpsCounter.d.ts";

export default function useFpsCounter({
  chartData,
  fpsContainer
}: UseFpsCounter): void {
  const times = useRef<number[]>([]);
  const calculateFps = useCallback<() => void>(_calculateFps, [_calculateFps]);

  useLayoutEffect(() => {
    calculateFps();
  }, [calculateFps]);

  function _calculateFps(): void {
    window.requestAnimationFrame((): void => {
      const now: number = performance.now();

      while (times.current.length > 0 && times.current[0] <= now - 1000) {
        times.current.shift();
      }
  
      times.current.push(now);

      const currentFPS: number = times.current.length > 60 ? 60 : times.current.length;

      fpsContainer.current.textContent = String(currentFPS);

      chartData.current.push({
        time: 0,
        value: currentFPS
      });

      if (chartData.current.length > 120) {
        chartData.current.shift();
      }
      
      chartData.current = chartData.current
        .map(({ value }: LineChartData, index: number) => ({
          time: index,
          value
        }));

      calculateFps();
    });
  }
}