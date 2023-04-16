import {
  CompanyNameVariant,
  ICompanyNameProps
} from "components/molecules/CompanyName/@types/CompanyName";
import {
  companyMobileNameDefaultThemeClasses,
  companyTvDesktopAndTabletNameDefaultThemeClasses,
  mapCompanyNameVariantToStyles
} from "components/molecules/CompanyName/styles";
import { IThemeClasses } from "types/theme";

const useCompanyNameThemeClasses = ({
  variant = CompanyNameVariant.Light
}: Pick<ICompanyNameProps, "variant">) => {
  const companyTvDesktopAndTabletNameThemeClasses: IThemeClasses = {
    ...companyTvDesktopAndTabletNameDefaultThemeClasses,
    ...mapCompanyNameVariantToStyles[variant]
  };

  const companyMobileNameThemeClasses: IThemeClasses = {
    ...companyMobileNameDefaultThemeClasses,
    ...mapCompanyNameVariantToStyles[variant]
  };

  return {
    companyMobileNameThemeClasses,
    companyTvDesktopAndTabletNameThemeClasses
  };
};

export { useCompanyNameThemeClasses };
