import PropTypes from "prop-types";

import HexagonWithDescriptionContent from "UI/molecules/HexagonWithDescription/HexagonWithDescriptionContent";
import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

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
    <Responsive dataTestId="ResponsiveTvDesktop" devices={["tv", "desktop"]}>
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

    <Responsive dataTestId="ResponsiveTablet" devices={["tablet"]}>
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

    <Responsive dataTestId="ResponsiveMobile" devices={["mobile"]}>
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

HexagonWithDescription.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default HexagonWithDescription;
