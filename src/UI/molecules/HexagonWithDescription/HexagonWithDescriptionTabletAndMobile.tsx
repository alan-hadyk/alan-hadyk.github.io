import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import HexagonWithDescriptionImage from "<molecules>/HexagonWithDescription//HexagonWithDescriptionImage";
import HexagonWithDescriptionContent from "<molecules>/HexagonWithDescription/HexagonWithDescriptionContent";

import {
  HexagonWithDescriptionProps
} from "<molecules>/HexagonWithDescription/__typings__/HexagonWithDescription.d.ts";

const HexagonWithDescriptionTabletAndMobile = ({
  children,
  description
}: HexagonWithDescriptionProps): JSX.Element => (
  <Responsive devices={["tablet", "mobile"]}>
    <FlexContainer
      alignItems="center"
      flexFlow="column nowrap"
    >
      <SpacingContainer
        dataTestId="DescriptionSpacingContainer"
        marginBottom="spacing48"
        width="100%"
      >
        <HexagonWithDescriptionImage>
          {children}
        </HexagonWithDescriptionImage>
      </SpacingContainer>

      <HexagonWithDescriptionContent description={description} />
    </FlexContainer>
  </Responsive>
);

export default HexagonWithDescriptionTabletAndMobile;
