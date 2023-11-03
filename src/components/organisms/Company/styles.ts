import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";

export const companyMobileContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-col-nowrap",
  gap: "gap-48",
  maxWidth: "max-w-1056",
};

export const companyBasicContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-start",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  marginX: "mx-auto",
  marginY: "my-0",
  maxWidth: "max-w-1056",
  position: "relative",
};

export const companyDesktopCompanyDescriptionContainerDefaultThemeClasses: IThemeClasses =
  {
    flex: "flex-[0_0_75%]",
    paddingLeft: "pl-40",
    pseudoClasses: isIE11()
      ? [
          "msHighContrastNone:flex-none",
          "msHighContrastNone:w-75%",
          "msHighContrastActive:flex-none",
          "msHighContrastActive:w-75%",
        ]
      : [],
  };
