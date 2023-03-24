import { isIE11 } from "helpers/browser/isIE11";
import { IThemeClasses } from "types/theme";

export const companyMobileContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-col-nowrap",
  maxWidth: "max-w-1056",
  pseudoClasses: ["directChildren:mt-48", "firstdirectChild:mt-48"]
};

export const companyMobileNameDefaultThemeClasses: IThemeClasses = {
  color: "text-white",
  fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
  fontSize: "text-48",
  lineHeight: "leading-48",
  textAlign: "text-center"
};

export const companyTvDesktopAndTabletContainerDefaultThemeClasses: IThemeClasses =
  {
    alignItems: "items-start",
    display: "flex",
    flexFlow: "flex-row-nowrap",
    marginX: "mx-auto",
    marginY: "my-0",
    maxWidth: "max-w-1056"
  };

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

export const companyTvDesktopAndTabletNameDefaultThemeClasses: IThemeClasses = {
  color: "text-white",
  fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
  fontSize: "text-48",
  lineHeight: "leading-56",
  textAlign: "text-right"
};

export const companyTvDesktopAndTabletCompanyDescriptionContainerDefaultThemeClasses: IThemeClasses =
  {
    flex: "flex-[0_0_50%]",
    paddingLeft: "pl-40",
    pseudoClasses: isIE11()
      ? [
          "msHighContrastNone:flex-none",
          "msHighContrastNone:w-50%",
          "msHighContrastActive:flex-none",
          "msHighContrastActive:w-50%"
        ]
      : []
  };
