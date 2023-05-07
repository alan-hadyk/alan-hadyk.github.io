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
  CompanyNameFormat,
  CompanyNameSize
} from "components/molecules/CompanyName/@types/CompanyName";
import {
  mapCompanyVariantToCompanyDescriptionVariant,
  mapCompanyVariantToCompanyNameVariant
} from "components/organisms/Company/config";
import { IThemeClasses } from "types/theme";
import { CompanyDescriptionSize } from "components/organisms/CompanyDescription/@types/CompanyDescription";

const CompanyPdf: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title,
  variant = CompanyVariant.Dark
}) => {
  const companyTimelineThemeClasses: IThemeClasses = {
    ...companyPdfCompanyTimelineDefaultThemeClasses,
    ...themeClasses?.timeline
  };

  return (
    <>
      <CompanyTimeline themeClasses={companyTimelineThemeClasses} />

      <LayoutContainer themeClasses={companyBasicContainerDefaultThemeClasses}>
        <CompanyName
          format={CompanyNameFormat.Pdf}
          size={CompanyNameSize.Medium}
          variant={mapCompanyVariantToCompanyNameVariant[variant]}
        >
          {name}
        </CompanyName>

        <LayoutContainer
          themeClasses={
            companyPdfCompanyDescriptionContainerDefaultThemeClasses
          }
        >
          <CompanyDescription
            date={date}
            iconsWithLabels={iconsWithLabels}
            link={link}
            responsibilities={responsibilities}
            size={CompanyDescriptionSize.Medium}
            themeClasses={themeClasses?.companyDescription}
            title={title}
            variant={mapCompanyVariantToCompanyDescriptionVariant[variant]}
          />
        </LayoutContainer>
      </LayoutContainer>
    </>
  );
};

export { CompanyPdf };
