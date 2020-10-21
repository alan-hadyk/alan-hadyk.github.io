import { useLayoutEffect, useRef, useCallback, useState } from "react";

import { LineChartData } from "<hooks>/__typings__/useLineChart.d.ts";
import {
  UseFpsCounter,
  UseFpsCounterResult
} from "<hooks>/__typings__/useFpsCounter.d.ts";

export default function useFpsCounter({
  chartData,
  fpsContainer
}: UseFpsCounter): UseFpsCounterResult {
  const times = useRef<number[]>([]);
  const [isPerformanceLow, setIsPerformanceLow] = useState<boolean>(false);

  const calculateFps = useCallback<() => void>((): void => {
    window.requestAnimationFrame((): void => {
      const now: number = performance.now();

      while (times.current.length > 0 && times.current[0] <= now - 1000) {
        times.current.shift();
      }

      times.current.push(now);

      const currentFPS: number =
        times.current.length > 60 ? 60 : times.current.length;

      if (fpsContainer && fpsContainer.current) {
        fpsContainer.current.textContent = String(currentFPS);
      }

      if (chartData && chartData.current) {
        chartData.current.push({
          time: 0,
          value: currentFPS
        });

        if (chartData.current.length > 120) {
          chartData.current.shift();
        }

        chartData.current = chartData.current.map(
          ({ value }: LineChartData, index: number) => ({
            time: index,
            value
          })
        );
      }

      if (!isPerformanceLow && currentFPS < 25) {
        setIsPerformanceLow(true);
      } else if (isPerformanceLow && currentFPS > 25) {
        setIsPerformanceLow(false);
      }

      calculateFps();
    });
  }, [chartData, fpsContainer, isPerformanceLow]);

  useLayoutEffect((): void => {
    calculateFps();
  }, [calculateFps]);

  return { isPerformanceLow };
}
