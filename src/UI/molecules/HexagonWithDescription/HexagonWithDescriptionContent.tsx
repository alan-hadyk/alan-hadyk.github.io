import React from "react";

import Text from "UI/atoms/Text";
import Hexagon from "UI/molecules/Hexagon";

import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";
import FlexItem from "UI/layout/FlexItem";

import { HexagonWithDescriptionContentProps } from "UI/molecules/HexagonWithDescription/__typings__/HexagonWithDescriptionContent";

const HexagonWithDescriptionContent = ({
  children,
  description,
  flexFlow = "row nowrap",
  lineHeight = "spacing36",
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
      <Hexagon>{children}</Hexagon>
    </SpacingContainer>

    <FlexItem flex="0 1 50%">
      <Text
        color="blue300"
        fontFamily="AnonymousPro"
        fontSize="font20"
        lineHeight={lineHeight}
      >
        {description}
      </Text>
    </FlexItem>
  </FlexContainer>
);

export default HexagonWithDescriptionContent;
