import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";
import Text from "<atoms>/Text";

import {
  PerformanceItemProps
} from "<molecules>/__typings__/PerformanceItem.d.ts";

function PerformanceItem({ title }: PerformanceItemProps): JSX.Element {

  return (
    <SpacingContainer
      paddingBottom="spacing4"
      paddingTop="spacing4"
      width="100%"
    >
      <FlexContainer>
        <FlexItem
          flex="1 1 20%"
        >
          <Text
            color="blue100"
            fontSize="font8"
            textTransform="uppercase"
          >
            {title}
          </Text>
        </FlexItem>
        <FlexItem
          flex="0 1 80%"
        >
          <PerformanceItem.Barchart />
        </FlexItem>
      </FlexContainer>
    </SpacingContainer>
  );
}

PerformanceItem.Barchart = styled.div`
  ${({
  theme: {
    colorPalette: { blue300 },
    spacing: { spacing4 }
  }
}): FlattenSimpleInterpolation => css`
      background-color: ${blue300};
      height: ${spacing4};
      padding-right: ${spacing4};
      width: 100%;
    `}
  `;

export default memo(PerformanceItem);