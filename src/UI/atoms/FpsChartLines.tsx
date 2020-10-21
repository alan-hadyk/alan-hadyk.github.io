import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import {
  FpsChartLinesHorizontalLineProps,
  FpsChartLinesProps
} from "<atoms>/__typings__/FpsChartLines.d.ts";

const FpsChartLines = ({
  lines,
  maxValue = 0
}: FpsChartLinesProps): JSX.Element => (
  <Fragment>
    {lines.map(
      (line: number): JSX.Element => (
        <FpsChartLines.HorizontalLine
          bottom={`${(line / maxValue) * 100}%`}
          data-testid="HorizontalLine"
          key={line}
        />
      )
    )}
  </Fragment>
);

FpsChartLines.HorizontalLine = styled.div<FpsChartLinesHorizontalLineProps>`
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
  `};
`;

export default FpsChartLines;
