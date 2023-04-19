import React from "react";

import { CompanyDescription } from "components/organisms/CompanyDescription/CompanyDescription";
import { CompanyTimeline } from "components/molecules/CompanyTimeline/CompanyTimeline";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import {
  CompanyVariant,
  ICompanyProps
} from "components/organisms/Company/@types/Company";
import {
  companyBasicContainerDefaultThemeClasses,
  companyPdfCompanyTimelineDefaultThemeClasses,
  companyPdfCompanyDescriptionContainerDefaultThemeClasses
} from "components/organisms/Company/styles";
import { CompanyName } from "components/molecules/CompanyName/CompanyName";
import {
  CompanyNameDevices,
  CompanyNameSize
} from "components/molecules/CompanyName/@types/CompanyName";
import {
  mapCompanyVariantToCompanyDescriptionVariant,
  mapCompanyVariantToCompanyNameVariant
} from "components/organisms/Company/config";

const CompanyPdf: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title,
  variant = CompanyVariant.Dark
}) => (
  <>
    <CompanyTimeline
      themeClasses={{
        ...companyPdfCompanyTimelineDefaultThemeClasses,
        ...themeClasses?.timeline
      }}
    />

    <LayoutContainer themeClasses={companyBasicContainerDefaultThemeClasses}>
      <CompanyName
        devices={CompanyNameDevices.TvDesktopAndTablet}
        size={CompanyNameSize.Medium}
        variant={mapCompanyVariantToCompanyNameVariant[variant]}
      >
        {name}
      </CompanyName>

      <LayoutContainer
        themeClasses={companyPdfCompanyDescriptionContainerDefaultThemeClasses}
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
  </>
);

export { CompanyPdf };
