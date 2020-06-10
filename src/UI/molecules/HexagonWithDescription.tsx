import React, { useCallback } from "react";

import Text from "<atoms>/Text";
import Hexagon from "<molecules>/Hexagon";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import {
  HexagonWithDescriptionProps
} from "<molecules>/__typings__/HexagonWithDescription.d.ts";

function HexagonWithDescription({
  children,
  description
}: HexagonWithDescriptionProps): JSX.Element {
  return (
    <SpacingContainer
      dataTestId="HexagonWithDescription"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="spacing1056"
    >
      <FlexContainer
        alignItems="center"
        flexFlow="row nowrap"
      >
        {renderImage()}

        {renderDescription()}
      </FlexContainer>
    </SpacingContainer>
  );

  function renderImage(): JSX.Element {
    return (
      <FlexItem
        flex="0 1 50%"
      >
        <Hexagon width="75%">
          {children}
        </Hexagon>
      </FlexItem>
    );
  }

  function renderDescription(): JSX.Element  {
    return (
      <FlexItem
        flex="0 1 50%"
      >
        <SpacingContainer
          dataTestId="DescriptionSpacingContainer"
          marginLeft="spacing48"
        >
          <Text
            color="blue300"
            fontFamily="AnonymousPro"
            fontSize="font20"
            lineHeight="spacing36"
          >
            {description}
          </Text>
        </SpacingContainer>
      </FlexItem>
    );
  }
} 

export default HexagonWithDescription;
