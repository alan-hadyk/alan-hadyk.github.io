import {
  CompanyNameFormat,
  CompanyNameSize,
  CompanyNameVariant,
  ICompanyNameProps
} from "components/molecules/CompanyName/@types/CompanyName";
import {
  companyMobileNameDefaultThemeClasses,
  companyTvDesktopAndTabletNameContainerDefaultThemeClasses,
  companyTvDesktopAndTabletNameDefaultThemeClasses,
  mapCompanyNameSizeToContainerStyles,
  mapCompanyNameSizeToNameStyles,
  mapCompanyNameVariantToStyles
} from "components/molecules/CompanyName/styles";
import { IThemeClasses } from "types/theme";

const useCompanyNameThemeClasses = ({
  size = CompanyNameSize.Large,
  variant = CompanyNameVariant.Light
}: Pick<ICompanyNameProps, "size" | "variant">) => {
  const companyTvDesktopAndTabletNameThemeClasses: IThemeClasses = {
    ...companyTvDesktopAndTabletNameDefaultThemeClasses,
    ...mapCompanyNameSizeToNameStyles[size][
      CompanyNameFormat.TvDesktopAndTablet
    ],
    ...mapCompanyNameVariantToStyles[variant]
  };

  const companyMobileNameThemeClasses: IThemeClasses = {
    ...companyMobileNameDefaultThemeClasses,
    ...mapCompanyNameSizeToNameStyles[size][CompanyNameFormat.Mobile],
    ...mapCompanyNameVariantToStyles[variant]
  };

  const companyTvDesktopAndTabletNameContainerThemeClasses: IThemeClasses = {
    ...companyTvDesktopAndTabletNameContainerDefaultThemeClasses,
    ...mapCompanyNameSizeToContainerStyles[size]
  };

  return {
    companyMobileNameThemeClasses,
    companyTvDesktopAndTabletNameContainerThemeClasses,
    companyTvDesktopAndTabletNameThemeClasses
  };
};

export { useCompanyNameThemeClasses };
