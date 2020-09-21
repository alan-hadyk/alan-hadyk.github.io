import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import HexagonWithDescriptionImage from "<molecules>/HexagonWithDescription//HexagonWithDescriptionImage";
import HexagonWithDescriptionContent from "<molecules>/HexagonWithDescription/HexagonWithDescriptionContent";

import {
  HexagonWithDescriptionProps
} from "<molecules>/HexagonWithDescription/__typings__/HexagonWithDescription.d.ts";

const HexagonWithDescriptionTvAndDesktop = ({
  children,
  description
}: HexagonWithDescriptionProps): JSX.Element => (
  <Responsive devices={["tv", "desktop"]}>
    <FlexContainer
      alignItems="center"
      flexFlow="row nowrap"
    >
      <SpacingContainer
        dataTestId="DescriptionSpacingContainer"
        marginRight="spacing48"
        width="50%"
      >
        <HexagonWithDescriptionImage>
          {children}
        </HexagonWithDescriptionImage>
      </SpacingContainer>

      <HexagonWithDescriptionContent description={description} />
    </FlexContainer>

  </Responsive>
);

export default HexagonWithDescriptionTvAndDesktop;
