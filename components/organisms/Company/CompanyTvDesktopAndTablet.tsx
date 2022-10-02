import React from "react";

import { Text } from "components/atoms/Text";
import { CompanyDescription } from "components/organisms/CompanyDescription";
import { CompanyTimeline } from "components/molecules/CompanyTimeline";
import { Responsive } from "components/layout/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { LayoutContainer } from "components/layout/LayoutContainer";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/@types/Responsive";

const CompanyTvDesktopAndTablet: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  responsibilitiesPaddingBottom,
  timelineBottom,
  title
}) => (
  <Responsive
    dataCy="CompanyTvDesktopTablet"
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
          dataCy="CompanyTvDesktopAndTabletName"
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
          link={link}
          responsibilities={responsibilities}
          responsibilitiesPaddingBottom={responsibilitiesPaddingBottom}
          title={title}
        />
      </LayoutContainer>
    </LayoutContainer>
  </Responsive>
);

export { CompanyTvDesktopAndTablet };
