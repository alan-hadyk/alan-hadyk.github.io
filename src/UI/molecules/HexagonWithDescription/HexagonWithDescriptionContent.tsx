import React from "react";

import Text from "<atoms>/Text";
import Hexagon from "<molecules>/Hexagon";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";
import FlexItem from "<layout>/FlexItem";

import {
  HexagonWithDescriptionContentProps
} from "<molecules>/HexagonWithDescription/__typings__/HexagonWithDescriptionContent.d.ts";

const HexagonWithDescriptionContent = ({
  children,
  description,
  flexFlow = "row nowrap",
  marginBottom = "spacing0",
  marginRight = "spacing0",
  width
}: HexagonWithDescriptionContentProps): JSX.Element => (
  <FlexContainer
    alignItems="center"
    dataTestId="HexagonWithDescriptionContent"
    flexFlow={flexFlow}
  >
    <SpacingContainer
      dataTestId="DescriptionSpacingContainer"
      marginBottom={marginBottom}
      marginRight={marginRight}
      width={width}
    >
      <FlexItem
        flex="0 1 50%"
      >
        <Hexagon contentWidth="75%">
          {children}
        </Hexagon>
      </FlexItem>
    </SpacingContainer>

    <FlexItem
      flex="0 1 50%"
    >
      <Text
        color="blue300"
        fontFamily="AnonymousPro"
        fontSize="font20"
        lineHeight="spacing36"
      >
        {description}
      </Text>
    </FlexItem>
  </FlexContainer>
);

export default HexagonWithDescriptionContent;
