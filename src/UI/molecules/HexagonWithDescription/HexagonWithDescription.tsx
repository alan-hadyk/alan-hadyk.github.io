import React from "react";

import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import HexagonWithDescriptionContent from "<molecules>/HexagonWithDescription/HexagonWithDescriptionContent";

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
    <Responsive devices={["tv", "desktop"]}>
      <HexagonWithDescriptionContent
        description={description}
        flexFlow="row nowrap"
        marginRight="spacing48"
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
        width="60%"
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive devices={["mobile"]}>
      <HexagonWithDescriptionContent
        description={description}
        flexFlow="column nowrap"
        marginBottom="spacing48"
        width="100%"
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>
  </SpacingContainer>
);

export default HexagonWithDescription;
