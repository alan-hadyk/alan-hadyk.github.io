import React from "react";
import PropTypes from "prop-types";

import { iconNames } from "UI/atoms/Icon";
import FlexContainer from "UI/layout/FlexContainer";
import PositionContainer from "UI/layout/PositionContainer";
import CompanyTvDesktopAndTablet from "UI/organisms/Company/CompanyTvDesktopAndTablet";
import CompanyMobile from "UI/organisms/Company/CompanyMobile";

import colorPalette from "styles/variables/colorPalette";
import spacing from "styles/variables/spacing";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

const Company = ({
  companyMobilePaddingBottom,
  dataCy,
  dataTestId,
  date,
  iconsWithLabels,
  logo,
  responsibilities,
  timelineBottom,
  title
}: CompanyProps): JSX.Element => (
  <FlexContainer dataCy={dataCy} dataTestId={dataTestId || "Company"}>
    <PositionContainer
      dataTestId="CompanyPositionContainer"
      position="relative"
      width="100%"
    >
      <CompanyTvDesktopAndTablet
        date={date}
        iconsWithLabels={iconsWithLabels}
        logo={logo}
        responsibilities={responsibilities}
        timelineBottom={timelineBottom}
        title={title}
      />

      <CompanyMobile
        date={date}
        iconsWithLabels={iconsWithLabels}
        logo={logo}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={companyMobilePaddingBottom}
        title={title}
      />
    </PositionContainer>
  </FlexContainer>
);

Company.propTypes = {
  companyMobilePaddingBottom: PropTypes.oneOf([...Object.keys(spacing)]),
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  date: PropTypes.string.isRequired,
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
      size: PropTypes.oneOf(["small", "medium", "large"])
    })
  ).isRequired,
  logo: PropTypes.string.isRequired,
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

export default Company;
