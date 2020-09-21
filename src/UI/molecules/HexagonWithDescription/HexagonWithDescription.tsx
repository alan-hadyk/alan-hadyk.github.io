import React from "react";

import HexagonWithDescriptionTvAndDesktop from "<molecules>/HexagonWithDescription/HexagonWithDescriptionTvAndDesktop";
import HexagonWithDescriptionTabletAndMobile from "<molecules>/HexagonWithDescription/HexagonWithDescriptionTabletAndMobile";

import SpacingContainer from "<layout>/SpacingContainer";

import {
  HexagonWithDescriptionProps
} from "<molecules>/HexagonWithDescription/__typings__/HexagonWithDescription.d.ts";

const HexagonWithDescription = ({
  children,
  description
}: HexagonWithDescriptionProps): JSX.Element => (
  <SpacingContainer
    dataTestId="HexagonWithDescription"
    marginLeft="auto"
    marginRight="auto"
    maxWidth="spacing1056"
  >
    <HexagonWithDescriptionTvAndDesktop
      description={description}
    >
      {children}
    </HexagonWithDescriptionTvAndDesktop>
    <HexagonWithDescriptionTabletAndMobile
      description={description}
    >
      {children}
    </HexagonWithDescriptionTabletAndMobile>
  </SpacingContainer>
);

export default HexagonWithDescription;
