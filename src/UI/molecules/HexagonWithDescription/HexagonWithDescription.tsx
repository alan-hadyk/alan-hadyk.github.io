import React from "react";

import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

import HexagonWithDescriptionContent from "UI/molecules/HexagonWithDescription/HexagonWithDescriptionContent";

import { HexagonWithDescriptionProps } from "UI/molecules/HexagonWithDescription/__typings__/HexagonWithDescription";

import isIE11 from "helpers/browser/isIE11";

const HexagonWithDescription = ({
  children,
  description
}: HexagonWithDescriptionProps): JSX.Element => (
  <SpacingContainer
    dataCy="HexagonWithDescription"
    dataTestId="HexagonWithDescription"
    marginLeft="auto"
    marginRight="auto"
    maxWidth="spacing1056"
  >
    <Responsive devices={["tv", "desktop"]}>
      <HexagonWithDescriptionContent
        description={description}
        flexFlow="row nowrap"
        marginRight="spacing48"
        textWidth="50%"
        width="50%"
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive devices={["tablet"]}>
      <HexagonWithDescriptionContent
        description={description}
        flexFlow="column nowrap"
        marginBottom="spacing48"
        textWidth="80%"
        width={isIE11() ? "auto" : "60%"}
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive devices={["mobile"]}>
      <HexagonWithDescriptionContent
        description={description}
        flexFlow="column nowrap"
        lineHeight="spacing28"
        marginBottom="spacing48"
        width={isIE11() ? "auto" : "100%"}
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>
  </SpacingContainer>
);

export default HexagonWithDescription;
