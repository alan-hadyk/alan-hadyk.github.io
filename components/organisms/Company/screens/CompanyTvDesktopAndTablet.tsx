import React from "react";

import { CompanyDescription } from "components/organisms/CompanyDescription/CompanyDescription";
import { CompanyTimeline } from "components/molecules/CompanyTimeline/CompanyTimeline";
import { Responsive } from "components/layout/Responsive/Responsive";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/Responsive/@types/Responsive";
import {
  companyDesktopCompanyDescriptionContainerDefaultThemeClasses,
  companyDesktopContainerDefaultThemeClasses
} from "components/organisms/Company/styles";
import { CompanyName } from "components/molecules/CompanyName/CompanyName";
import { CompanyNameDevices } from "components/molecules/CompanyName/@types/CompanyName";

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

    <LayoutContainer themeClasses={companyDesktopContainerDefaultThemeClasses}>
      <CompanyName devices={CompanyNameDevices.TvDesktopAndTablet}>
        {name}
      </CompanyName>

      <LayoutContainer
        themeClasses={
          companyDesktopCompanyDescriptionContainerDefaultThemeClasses
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
