import { isIE11 } from "helpers/browser/isIE11";
import { IThemeClasses } from "types/theme";

export const companyMobileContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-col-nowrap",
  gap: "gap-48",
  maxWidth: "max-w-1056"
};

export const companyDesktopContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-start",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  marginX: "mx-auto",
  marginY: "my-0",
  maxWidth: "max-w-1056"
};

export const companyDesktopCompanyDescriptionContainerDefaultThemeClasses: IThemeClasses =
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
