import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import isEmpty from "lodash/isEmpty";
import max from "lodash/max";

import {
  Label,
  FpsChartLabelProps,
  FpsChartLabelsProps
} from "<atoms>/__typings__/FpsChartLabels.d.ts";

function FpsChartLabels({ labels }: FpsChartLabelsProps): JSX.Element {
  const maxValue: number = max(labels);

  return !isEmpty(labels) && (
    <Fragment>
      {labels.map((label: Label, index: number): JSX.Element => (
        <FpsChartLabels.Label
          bottom={`${(label / maxValue) * 100}%`}
          data-testid="Label"
          key={label}
          transform={calculateTransform(index)}
        >
          {label}
        </FpsChartLabels.Label>
      ))}
    </Fragment>
  );

  function calculateTransform(index: number): string {
    const isFirstItem: boolean = index === 0;
    const isLastItem: boolean = index === labels.length - 1;

    if (isFirstItem) {
      return "translateX(-100%)";
    } else if (isLastItem) {
      return "translateX(-100%) translateY(100%)";
    } else {
      return "translateX(-100%) translateY(25%)";
    }
  }
}

FpsChartLabels.Label = styled.div<FpsChartLabelProps>`
  ${({
    bottom,
    theme: {
      colorPalette: { blue100 },
      fontSizes: { font8 },
      spacing: { spacing8 }
    },
    transform
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
    transform: ${transform};
  `}
`;

FpsChartLabels.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default FpsChartLabels;