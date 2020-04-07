import React, { memo, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import FpsChartLabels from "<atoms>/FpsChartLabels";
import FpsChartLines from "<atoms>/FpsChartLines";
import PositionContainer from "<layout>/PositionContainer";

import useLineChart from "<hooks>/useLineChart";
import useFpsCounter from "<hooks>/useFpsCounter";

import { LineChartData } from "<hooks>/__typings__/useLineChart.d.ts";

// TODO - tests after component will be ready
function FpsChart(): JSX.Element {
  const chartData = useRef<LineChartData[]>([]);
  const fpsContainer = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useFpsCounter({
    chartData,
    fpsContainer
  });

  useLineChart({
    canvas,
    chartData
  });

  return (
    <PositionContainer
      height="100%"
      position="relative"
    >
      <FpsChart.Container>
        <FpsChart.FpsCounter ref={fpsContainer} />
        <FpsChart.Canvas ref={canvas} />
        <FpsChartLines 
          lines={[15, 30, 45]} 
          maxValue={60}
        />
        <FpsChartLabels labels={[0, 15, 30, 45, 60]} />
      </FpsChart.Container>
    </PositionContainer>
  );
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

FpsChart.Canvas = styled.canvas`
  height: 100%;
  width: 100%;
`;
  
export default memo(FpsChart);
