import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { iconNames } from "UI/atoms/Icon";
import Text from "UI/atoms/Text";
import CompanyDescription from "UI/organisms/CompanyDescription";
import CompanyTimeline from "UI/organisms/Company/CompanyTimeline";
import FlexContainer from "UI/layout/FlexContainer";
import FlexItem from "UI/layout/FlexItem";
import Responsive from "UI/layout/Responsive";

import isIE11 from "helpers/browser/isIE11";

import colorPalette from "styles/variables/colorPalette";
import spacing from "styles/variables/spacing";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

function CompanyTvDesktopAndTablet({
  date,
  iconsWithLabels,
  name,
  responsibilities,
  timelineBottom,
  title
}: CompanyProps): JSX.Element {
  const renderCompanyTimeline = useCallback(
    () => <CompanyTimeline timelineBottom={timelineBottom} />,
    [timelineBottom]
  );

  const renderCompanyLogo = useCallback(
    () => (
      <FlexItem
        flex="0 0 50%"
        paddingRight="spacing40"
        shouldApplyWidth={isIE11()}
      >
        <Text
          color="white"
          dataTestId="CompanyTvDesktopAndTabletName"
          fontFamily={isIE11() ? "AnonymousPro" : "Exan"}
          fontSize="font48"
          lineHeight="spacing48"
          textAlign="right"
        >
          {name}
        </Text>
      </FlexItem>
    ),
    [name]
  );

  return (
    <Responsive
      dataTestId="CompanyTvDesktopTablet"
      devices={["tv", "desktop", "tablet"]}
    >
      {renderCompanyTimeline()}

      <FlexContainer
        alignItems="flex-start"
        dataTestId="CompanyTvDesktopAndTabletFlexContainer"
        flexFlow="row nowrap"
        margin="0 auto"
        maxWidth="spacing1056"
      >
        {renderCompanyLogo()}

        <FlexItem
          flex="0 0 50%"
          paddingLeft="spacing40"
          shouldApplyWidth={isIE11()}
        >
          <CompanyDescription
            date={date}
            iconsWithLabels={iconsWithLabels}
            responsibilities={responsibilities}
            title={title}
          />
        </FlexItem>
      </FlexContainer>
    </Responsive>
  );
}

CompanyTvDesktopAndTablet.propTypes = {
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
  timelineBottom: PropTypes.oneOf([...Object.keys(spacing)]),
  title: PropTypes.string.isRequired
};

export default CompanyTvDesktopAndTablet;
