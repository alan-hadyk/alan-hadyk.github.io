import React from "react";

import { Typography } from "components/atoms/Typography/Typography";
import { CompanyDescription } from "components/organisms/CompanyDescription/CompanyDescription";
import { CompanyTimeline } from "components/molecules/CompanyTimeline/CompanyTimeline";
import { Responsive } from "components/layout/Responsive/Responsive";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/Responsive/@types/Responsive";
import {
  companyTvDesktopAndTabletCompanyDescriptionContainerDefaultThemeClasses,
  companyTvDesktopAndTabletContainerDefaultThemeClasses,
  companyTvDesktopAndTabletNameContainerDefaultThemeClasses,
  companyTvDesktopAndTabletNameDefaultThemeClasses
} from "components/organisms/Company/styles";

const CompanyTvDesktopAndTablet: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title
}) => (
  <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
    <CompanyTimeline themeClasses={themeClasses?.timeline} />

    <LayoutContainer
      themeClasses={companyTvDesktopAndTabletContainerDefaultThemeClasses}
    >
      <LayoutContainer
        themeClasses={companyTvDesktopAndTabletNameContainerDefaultThemeClasses}
      >
        <Typography
          themeClasses={companyTvDesktopAndTabletNameDefaultThemeClasses}
        >
          {name}
        </Typography>
      </LayoutContainer>

      <LayoutContainer
        themeClasses={
          companyTvDesktopAndTabletCompanyDescriptionContainerDefaultThemeClasses
        }
      >
        <CompanyDescription
          date={date}
          iconsWithLabels={iconsWithLabels}
          link={link}
          responsibilities={responsibilities}
          themeClasses={themeClasses?.companyDescription}
          title={title}
        />
      </LayoutContainer>
    </LayoutContainer>
  </Responsive>
);

export { CompanyTvDesktopAndTablet };
