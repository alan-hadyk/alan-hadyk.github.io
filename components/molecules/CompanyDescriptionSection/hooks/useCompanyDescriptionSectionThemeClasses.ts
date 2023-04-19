import {
  CompanyDescriptionSectionSize,
  CompanyDescriptionSectionVariant
} from "components/molecules/CompanyDescriptionSection/@types/CompanyDescriptionSection";
import {
  companyDescriptionSectionTitleDefaultThemeClasses,
  mapCompanyDescriptionSectionSizeToContentWrapperStyles,
  mapCompanyDescriptionSectionSizeToTitleStyles
} from "components/molecules/CompanyDescriptionSection/styles";
import { IThemeClasses } from "types/theme";

const useCompanyDescriptionSectionThemeClasses = ({
  size = CompanyDescriptionSectionSize.Large,
  variant = CompanyDescriptionSectionVariant.Blue
}) => {
  const companyDescriptionSectionTitleThemeClasses: IThemeClasses = {
    ...companyDescriptionSectionTitleDefaultThemeClasses,
    ...mapCompanyDescriptionSectionSizeToTitleStyles[size],
    color:
      variant === CompanyDescriptionSectionVariant.Blue
        ? "text-blue100"
        : "text-blue600"
  };

  const companyDescriptionSectionContentWrapperThemeClasses: IThemeClasses =
    mapCompanyDescriptionSectionSizeToContentWrapperStyles[size];

  return {
    companyDescriptionSectionContentWrapperThemeClasses,
    companyDescriptionSectionTitleThemeClasses
  };
};

export { useCompanyDescriptionSectionThemeClasses };
