/* eslint-disable import/exports-last */
import { CompanyNameFormat } from "@app/components/molecules/CompanyName/@types/CompanyName";
import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";

export const companyTvDesktopAndTabletNameContainerDefaultThemeClasses: IThemeClasses =
  {
    flex: "flex-[0_0_25%]",
    paddingRight: "pr-40",
    pseudoClasses: isIE11()
      ? [
          "msHighContrastNone:flex-none",
          "msHighContrastNone:w-50%",
          "msHighContrastActive:flex-none",
          "msHighContrastActive:w-50%",
        ]
      : [],
  };

const companyNameCommonThemeClasses: IThemeClasses = {
  color: "text-white",
  fontFamily: isIE11() ? "font-anonymousPro" : "font-rajdhani",
};

export const companyTvDesktopAndTabletNameDefaultThemeClasses: IThemeClasses = {
  ...companyNameCommonThemeClasses,
  lineHeight: "leading-56",
  textAlign: "text-right",
};

export const companyMobileNameDefaultThemeClasses: IThemeClasses = {
  ...companyNameCommonThemeClasses,
  lineHeight: "leading-48",
  textAlign: "text-center",
};

export const mapCompanyNameFormatToStyles: Record<
  CompanyNameFormat,
  IThemeClasses
> = {
  [CompanyNameFormat.Mobile]: {
    fontSize: "text-48",
    lineHeight: "leading-48",
  },
  [CompanyNameFormat.TvDesktopAndTablet]: {
    fontSize: "text-48",
    lineHeight: "leading-56",
  },
};
