import React, { memo, useRef, useLayoutEffect, Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import PositionContainer from "<layout>/PositionContainer";

import colorPalette from "<styles>/variables/colorPalette";

import {
  FpsChartHorizontalLine,
  FpsChartLabel
} from "<molecules>/__typings__/FpsChart.d.ts";

// TODO - tests after component will be ready
function FpsChart(): JSX.Element {
  const times = useRef([]);
  const points = useRef([]);
  const fps = useRef(null);
  const canvas = useRef(null);

  useLayoutEffect(() => {
    calculateFps();
    window.requestAnimationFrame(renderChart);
  }, []);

  return (
    <PositionContainer
      height="100%"
      position="relative"
    >
      <FpsChart.Container>
        <FpsChart.FPS ref={fps} />
        <FpsChart.Canvas ref={canvas} />
        {renderLines()}
        {renderLabels()}
      </FpsChart.Container>
    </PositionContainer>
  );

  function renderLines(): JSX.Element[] {
    const steps = [15, 30, 45];

    return steps.map(step => (
      <Fragment key={step}>
        <FpsChart.HorizontalLine bottom={`${(step / 60) * 100}%`} />
      </Fragment>
    ));
  }

  function renderLabels(): JSX.Element[] {
    const steps = [0, 15, 30, 45, 60];

    return steps.map(step => (
      <FpsChart.Label
        bottom={`${(step / 60) * 100}%`}
        key={step}
      >
        {step}
      </FpsChart.Label>
    ));
  }

  function renderChart(): void {
    if (points.current.length < 2) {
      window.requestAnimationFrame(renderChart);
      return;
    }

    const lastElement = points.current.slice(-1)[0];

    const maxTime = lastElement.time;
    const { height, width } = canvas.current.getBoundingClientRect();

    canvas.current.width = width;
    canvas.current.height = height;

    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = colorPalette.blue300;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = colorPalette.blue100;
    ctx.shadowBlur = 8;
    ctx.beginPath();

    points.current.forEach(({ time, value }, index) => {
      const nextItem = points.current[index + 1];

      if (!nextItem) {
        return;
      }

      const {
        time: nextItemTime,
        value: nextItemValue
      } = nextItem;

      const left = (time / maxTime) * width;
      const top = ((60 - value) / 60) * height;
      const nextItemLeft = (nextItemTime / maxTime) * width;
      const nextItemTop = ((60 - nextItemValue) / 60) * height;

      ctx.moveTo(left, top);
      ctx.lineTo(nextItemLeft, nextItemTop);
    });

    ctx.stroke();

    window.requestAnimationFrame(renderChart);
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

      points.current.push({
        value: currentFPS
      });

      if (points.current.length > 120) {
        points.current.shift();
      }
      
      points.current = points.current
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

FpsChart.FPS = styled.div`
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
