import { CompanyNameFormat } from "@app/components/molecules/CompanyName/@types/CompanyName";
import {
  companyMobileNameDefaultThemeClasses,
  companyTvDesktopAndTabletNameContainerDefaultThemeClasses,
  companyTvDesktopAndTabletNameDefaultThemeClasses,
  mapCompanyNameFormatToStyles,
} from "@app/components/molecules/CompanyName/styles";
import { IThemeClasses } from "@app/types/theme";

const useCompanyNameThemeClasses = () => {
  const companyTvDesktopAndTabletNameThemeClasses: IThemeClasses = {
    ...companyTvDesktopAndTabletNameDefaultThemeClasses,
    ...mapCompanyNameFormatToStyles[CompanyNameFormat.TvDesktopAndTablet],
  };

  const companyMobileNameThemeClasses: IThemeClasses = {
    ...companyMobileNameDefaultThemeClasses,
    ...mapCompanyNameFormatToStyles[CompanyNameFormat.Mobile],
  };

  const companyTvDesktopAndTabletNameContainerThemeClasses: IThemeClasses = {
    ...companyTvDesktopAndTabletNameContainerDefaultThemeClasses,
  };

  return {
    companyMobileNameThemeClasses,
    companyTvDesktopAndTabletNameContainerThemeClasses,
    companyTvDesktopAndTabletNameThemeClasses,
  };
};

export { useCompanyNameThemeClasses };
