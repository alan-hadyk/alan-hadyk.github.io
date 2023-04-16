/* eslint-disable import/exports-last */
import { CompanyNameVariant } from "components/molecules/CompanyName/@types/CompanyName";
import { isIE11 } from "helpers/browser/isIE11";
import { IThemeClasses } from "types/theme";

export const companyTvDesktopAndTabletNameContainerDefaultThemeClasses: IThemeClasses =
  {
    flex: "flex-[0_0_50%]",
    paddingRight: "pr-40",
    pseudoClasses: isIE11()
      ? [
          "msHighContrastNone:flex-none",
          "msHighContrastNone:w-50%",
          "msHighContrastActive:flex-none",
          "msHighContrastActive:w-50%"
        ]
      : []
  };

const companyNameCommonThemeClasses: IThemeClasses = {
  fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
  fontSize: "text-48"
};

export const companyTvDesktopAndTabletNameDefaultThemeClasses: IThemeClasses = {
  ...companyNameCommonThemeClasses,
  lineHeight: "leading-56",
  textAlign: "text-right"
};

export const companyMobileNameDefaultThemeClasses: IThemeClasses = {
  ...companyNameCommonThemeClasses,
  lineHeight: "leading-48",
  textAlign: "text-center"
};

export const mapCompanyNameVariantToStyles: Record<
  CompanyNameVariant,
  IThemeClasses
> = {
  [CompanyNameVariant.Dark]: {
    color: "text-blue600"
  },
  [CompanyNameVariant.Light]: {
    color: "text-white"
  }
};
