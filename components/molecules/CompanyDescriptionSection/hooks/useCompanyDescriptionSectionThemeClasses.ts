import {
  CompanyDescriptionSectionSize,
  CompanyDescriptionSectionVariant
} from "components/molecules/CompanyDescriptionSection/@types/CompanyDescriptionSection";
import {
  companyDescriptionSectionDefaultThemeClasses,
  mapCompanyDescriptionSectionSizeToContentWrapperStyles,
  mapCompanyDescriptionSectionSizeToTitleStyles,
  mapCompanyDescriptionSectionVariantToTitleStyles
} from "components/molecules/CompanyDescriptionSection/styles";
import { IThemeClasses } from "types/theme";

const useCompanyDescriptionSectionThemeClasses = ({
  size = CompanyDescriptionSectionSize.Large,
  variant = CompanyDescriptionSectionVariant.Blue
}) => {
  const companyDescriptionSectionThemeClasses: Record<
    "title" | "contentWrapper",
    IThemeClasses
  > = {
    contentWrapper:
      mapCompanyDescriptionSectionSizeToContentWrapperStyles[size],
    title: {
      ...companyDescriptionSectionDefaultThemeClasses.title,
      ...mapCompanyDescriptionSectionSizeToTitleStyles[size],
      ...mapCompanyDescriptionSectionVariantToTitleStyles[variant]
    }
  };

  return {
    companyDescriptionSectionThemeClasses
  };
};

export { useCompanyDescriptionSectionThemeClasses };
