import React, { memo, useRef, useLayoutEffect } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import PositionContainer from "<layout>/PositionContainer";

import useLineChart from "<hooks>/useLineChart";

import {
  FpsChartHorizontalLine,
  FpsChartLabel
} from "<molecules>/__typings__/FpsChart.d.ts";
import { LineChartData } from "<hooks>/__typings__/useLineChart.d.ts";

// TODO - tests after component will be ready
function FpsChart(): JSX.Element {
  const times = useRef([]);
  const chartData = useRef<LineChartData[]>([]);
  const fps = useRef(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useLineChart({
    canvas,
    chartData
  });

  useLayoutEffect(() => {
    calculateFps();
  }, []);

  return (
    <PositionContainer
      height="100%"
      position="relative"
    >
      <FpsChart.Container>
        <FpsChart.FpsCounter ref={fps} />
        <FpsChart.Canvas ref={canvas} />
        {renderLines()}
        {renderLabels()}
      </FpsChart.Container>
    </PositionContainer>
  );

  function renderLines(): JSX.Element[] {
    return [15, 30, 45].map(step => (
      <FpsChart.HorizontalLine 
        bottom={`${(step / 60) * 100}%`} 
        key={step}
      />
    ));
  }

  function renderLabels(): JSX.Element[] {
    return [0, 15, 30, 45, 60].map(label => (
      <FpsChart.Label
        bottom={`${(label / 60) * 100}%`}
        key={label}
      >
        {label}
      </FpsChart.Label>
    ));
  }

  function calculateFps(): void {
    window.requestAnimationFrame(() => {
      const now = performance.now();

      while (times.current.length > 0 && times.current[0] <= now - 1000) {
        times.current.shift();
      }
  
      times.current.push(now);

      const currentFPS = times.current.length > 60 ? 60 : times.current.length;

      fps.current.textContent = currentFPS;

      chartData.current.push({
        time: 0,
        value: currentFPS
      });

      if (chartData.current.length > 120) {
        chartData.current.shift();
      }
      
      chartData.current = chartData.current
        .map(({ value }, index) => ({
          time: index,
          value
        }));

      calculateFps();
    });
  }
}

FpsChart.Container = styled.div`
  ${({
    theme: {
      colorPalette: { blue400 }
    }
  }): FlattenSimpleInterpolation => css`
    border: thin solid ${blue400};
    height: 100%;
  `}
`;

FpsChart.FpsCounter = styled.div`
  ${({
    theme: {
      colorPalette: { blue100 },
      fontSizes: { font16 },
      spacing: { spacing36 }
    }
  }): FlattenSimpleInterpolation => css`
    color: ${blue100};
    font-size: ${font16};
    line-height: ${spacing36};
    position:absolute;
    right: 0;
    text-align: right;
    top: 0;
    transform: translateY(-${spacing36});
  `}
`;

FpsChart.HorizontalLine = styled.div<FpsChartHorizontalLine>`
  ${({
    bottom,
    theme: {
      colorPalette: { blue400 },
      spacing: { spacing1 }
    }
  }): FlattenSimpleInterpolation => css`
    border: thin solid ${transparentize(0.75, blue400)};
    bottom: ${bottom};
    height: ${spacing1};
    left: 0;
    position: absolute;
    right: 0;
  `}
`;

FpsChart.Label = styled.div<FpsChartLabel>`
  ${({
    bottom,
    theme: {
      colorPalette: { blue100 },
      fontSizes: { font8 },
      spacing: { spacing8 }
    }
  }): FlattenSimpleInterpolation => css`
    bottom: ${bottom};
    color: ${blue100};
    display: inline-block;
    font-size: ${font8};
    left: 0;
    line-height: ${spacing8};
    padding-right: ${spacing8};
    position: absolute;
    text-align: right;
    transform: translateX(-100%) translateY(25%);
  `}
`;

FpsChart.Canvas = styled.canvas`
  height: 100%;
  width: 100%;
`;
  
export default memo(FpsChart);
