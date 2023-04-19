import {
  CompanyDescriptionTitleSize,
  CompanyDescriptionTitleVariant,
  ICompanyDescriptionTitleProps
} from "components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import {
  companyDescriptionTitleDefaultThemeClasses,
  mapCompanyDescriptionTitleSizeToStyles,
  mapCompanyDescriptionTitleVariantToStyles
} from "components/molecules/CompanyDescriptionTitle/styles";
import { IThemeClasses } from "types/theme";

const useCompanyDescriptionTitleThemeClasses = ({
  size = CompanyDescriptionTitleSize.Large,
  themeClasses,
  variant = CompanyDescriptionTitleVariant.Light
}: Pick<
  ICompanyDescriptionTitleProps,
  "size" | "variant" | "themeClasses"
>) => {
  const companyDescriptionTitleThemeClasses: IThemeClasses = {
    ...companyDescriptionTitleDefaultThemeClasses,
    ...mapCompanyDescriptionTitleVariantToStyles[variant],
    ...mapCompanyDescriptionTitleSizeToStyles[size],
    ...themeClasses
  };

  return { companyDescriptionTitleThemeClasses };
};

export { useCompanyDescriptionTitleThemeClasses };
