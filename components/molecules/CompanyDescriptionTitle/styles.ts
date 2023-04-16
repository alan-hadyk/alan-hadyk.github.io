import { CompanyDescriptionTitleVariant } from "components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import { IThemeClasses } from "types/theme";

export const companyDescriptionTitleDefaultThemeClasses: IThemeClasses = {
  fontFamily: "font-anonymousPro",
  fontSize: "text-36",
  lineHeight: "leading-56",
  textAlign: "text-left"
};

export const mapCompanyDescriptionTitleVariantToStyles: Record<
  CompanyDescriptionTitleVariant,
  IThemeClasses
> = {
  [CompanyDescriptionTitleVariant.Dark]: {
    color: "text-blue600"
  },
  [CompanyDescriptionTitleVariant.Light]: {
    color: "text-white"
  }
};
