import React from "react";

import { CompanyDescription } from "components/organisms/CompanyDescription/CompanyDescription";
import { CompanyTimeline } from "components/molecules/CompanyTimeline/CompanyTimeline";
import { Responsive } from "components/layout/Responsive/Responsive";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import {
  CompanyVariant,
  ICompanyProps
} from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/Responsive/@types/Responsive";
import {
  companyDesktopCompanyDescriptionContainerDefaultThemeClasses,
  companyDesktopContainerDefaultThemeClasses
} from "components/organisms/Company/styles";
import { CompanyName } from "components/molecules/CompanyName/CompanyName";
import { CompanyNameDevices } from "components/molecules/CompanyName/@types/CompanyName";
import {
  mapCompanyVariantToCompanyDescriptionVariant,
  mapCompanyVariantToCompanyNameVariant
} from "components/organisms/Company/config";

const CompanyTvDesktopAndTablet: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title,
  variant = CompanyVariant.Blue
}) => (
  <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
    <CompanyTimeline themeClasses={themeClasses?.timeline} />

    <LayoutContainer themeClasses={companyDesktopContainerDefaultThemeClasses}>
      <CompanyName
        devices={CompanyNameDevices.TvDesktopAndTablet}
        variant={mapCompanyVariantToCompanyNameVariant[variant]}
      >
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
          variant={mapCompanyVariantToCompanyDescriptionVariant[variant]}
        />
      </LayoutContainer>
    </LayoutContainer>
  </Responsive>
);

export { CompanyTvDesktopAndTablet };
