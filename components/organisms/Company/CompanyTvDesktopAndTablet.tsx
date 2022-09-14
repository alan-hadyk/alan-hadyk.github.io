import React from "react";
import PropTypes from "prop-types";

import { iconNames } from "components/atoms/Icon";
import { Text } from "components/atoms/Text";
import { CompanyDescription } from "components/organisms/CompanyDescription";
import { CompanyTimeline } from "components/molecules/CompanyTimeline";
import { Responsive } from "components/layout/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { LayoutContainer } from "components/layout/LayoutContainer";
import { spacingPropType } from "helpers/propTypes/spacing";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/@types/Responsive";

const CompanyTvDesktopAndTablet: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  name,
  responsibilities,
  timelineBottom,
  title
}) => (
  <Responsive
    dataTestId="CompanyTvDesktopTablet"
    devices={[Device.TV, Device.DESKTOP, Device.TABLET]}
  >
    <CompanyTimeline timelineBottom={timelineBottom} />

    <LayoutContainer
      alignItems="items-start"
      className=" max-w-1056"
      display="flex"
      flexFlow="flex-row flex-nowrap"
      marginBottom="mb-0"
      marginLeft="ml-auto"
      marginRight="mr-auto"
      marginTop="mt-0"
    >
      <LayoutContainer
        className={
          isIE11()
            ? `
              msHighContrastNone:flex-none msHighContrastNone:w-50%
              msHighContrastActive:flex-none msHighContrastActive:w-50%
            `
            : ""
        }
        flex="flex-[0_0_50%]"
        paddingRight="pr-40"
      >
        <Text
          color="text-white"
          dataTestId="CompanyTvDesktopAndTabletName"
          fontFamily={isIE11() ? "font-anonymousPro" : "font-exan"}
          fontSize="text-48"
          lineHeight="leading-56"
          textAlign="text-right"
        >
          {name}
        </Text>
      </LayoutContainer>

      <LayoutContainer
        className={
          isIE11()
            ? `
              msHighContrastNone:flex-none msHighContrastNone:w-50%
              msHighContrastActive:flex-none msHighContrastActive:w-50%
            `
            : ""
        }
        flex="flex-[0_0_50%]"
        paddingLeft="pl-40"
      >
        <CompanyDescription
          date={date}
          iconsWithLabels={iconsWithLabels}
          responsibilities={responsibilities}
          title={title}
        />
      </LayoutContainer>
    </LayoutContainer>
  </Responsive>
);

CompanyTvDesktopAndTablet.propTypes = {
  date: PropTypes.string.isRequired,
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  name: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string
    ])
  ).isRequired,
  timelineBottom: spacingPropType("bottom"),
  title: PropTypes.string.isRequired
};

export { CompanyTvDesktopAndTablet };
