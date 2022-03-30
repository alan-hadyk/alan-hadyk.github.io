import React from "react";
import PropTypes from "prop-types";

import { iconNames } from "UI/atoms/Icon";
import Text from "UI/atoms/Text";
import CompanyDescription from "UI/organisms/CompanyDescription";
import FlexContainer from "UI/layout/FlexContainer";
import Responsive from "UI/layout/Responsive";

import isIE11 from "helpers/browser/isIE11";

import colorPalette from "styles/variables/colorPalette";
import spacing from "styles/variables/spacing";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

const CompanyMobile = ({
  date,
  iconsWithLabels,
  name,
  responsibilities,
  responsibilitiesPaddingBottom,
  title
}: CompanyProps): JSX.Element => (
  <Responsive dataTestId="CompanyMobile" devices={["mobile"]}>
    <FlexContainer
      alignItems="center"
      dataTestId="CompanyMobileFlexContainer"
      flexFlow="column nowrap"
      gap="spacing48"
      maxWidth="spacing1056"
    >
      <Text
        color="white"
        dataTestId="CompanyMobileName"
        fontFamily={isIE11() ? "AnonymousPro" : "Exan"}
        fontSize="font48"
        lineHeight="spacing48"
        textAlign="right"
      >
        {name}
      </Text>

      <CompanyDescription
        date={date}
        iconsWithLabels={iconsWithLabels}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={responsibilitiesPaddingBottom}
        textAlign="center"
        title={title}
      />
    </FlexContainer>
  </Responsive>
);

CompanyMobile.propTypes = {
  date: PropTypes.string.isRequired,
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
      size: PropTypes.oneOf(["small", "medium", "large"])
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string
    ])
  ).isRequired,
  responsibilitiesPaddingBottom: PropTypes.oneOf([...Object.keys(spacing)]),
  title: PropTypes.string.isRequired
};

export default CompanyMobile;
