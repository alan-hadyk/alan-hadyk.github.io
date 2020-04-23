import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import Text from "<atoms>/Text";

import {
  PerformanceItemBarchartProps,
  PerformanceItemProps
} from "<molecules>/__typings__/PerformanceItem.d.ts";

const PerformanceItem = ({ animationDelay, label }: PerformanceItemProps): JSX.Element => (
  <PerformanceItem.Container
    data-testid="PerformanceItem"
  >
    <SpacingContainer
      paddingBottom="spacing2"
      paddingTop="spacing2"
      width="100%"
    >
      <FlexContainer
        flexFlow="row nowrap"
      >
        <FlexItem
          flex="0 1 40%"
        >
          <Text
            color="blue100"
            ellipsis
            fontSize="font8"
            paddingRight="spacing4"
            textAlign="right"
            textTransform="uppercase"
          >
            {label}
          </Text>
        </FlexItem>
        <FlexItem
          flex="0 1 60%"
        >
          <PerformanceItem.Barchart
            animationDelay={animationDelay}
            data-testid="PerformanceItemBarchart"
          />
        </FlexItem>
      </FlexContainer>
    </SpacingContainer>
  </PerformanceItem.Container>
);

PerformanceItem.Barchart = styled.div<PerformanceItemBarchartProps>`
  ${({
    animationDelay,
    theme: {
      colorPalette: { blue300 },
      easing: { easeInOut },
      keyframes: { barChartWidth },
      spacing: { spacing4 },
      transitionTimes: { verySlow }
    }
  }): FlattenSimpleInterpolation => css`
    animation-delay: ${animationDelay};
    animation-duration: ${verySlow};
    animation-iteration-count: infinite;
    animation-name: ${barChartWidth};
    animation-timing-function: ${easeInOut};
    background-color: ${blue300};
    height: ${spacing4};
    padding-right: ${spacing4};
    width: 100%;
  `}
`;

PerformanceItem.Container = styled.div`
  display: none;
  width: 100%;

  @media (min-height: 900px)  {
    &:nth-child(-n+17) {
      display: flex;
    }
  }

  @media (min-height: 800px) and (max-height: 899px) {
    &:nth-child(-n+15) {
      display: flex;
    }
  }

  @media (min-height: 520px) and (max-height: 799px) {
    &:nth-child(-n+10) {
      display: flex;
    }
  }

  @media (min-height: 415px) and (max-height: 519px) {
    &:nth-child(-n+8) {
      display: flex;
    }
  }

  @media (max-height: 414px) {
    &:nth-child(-n+3) {
      display: flex;
    }
  }
`;

export default PerformanceItem;