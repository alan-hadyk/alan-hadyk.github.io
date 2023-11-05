import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";

export const sectionTitleTypographyDefaultThemeClasses: IThemeClasses = {
  color: "text-blue100",
  fontFamily: isIE11() ? "font-anonymousPro" : "font-rajdhani",
  textAlign: "text-center",
  textTransform: "uppercase",
};

export const mapDeviceToTitleTypographyStyles: Record<
  "mobile" | "tvDesktopAndTablet",
  IThemeClasses
> = {
  mobile: {
    fontSize: "text-48",
    lineHeight: "leading-80",
  },
  tvDesktopAndTablet: {
    fontSize: "text-72",
    lineHeight: "leading-80",
  },
};

export const mapDeviceToWrapperStyles: Record<
  "mobile" | "tvDesktopAndTablet",
  IThemeClasses
> = {
  mobile: {
    marginBottom: "mb-48",
  },
  tvDesktopAndTablet: {
    marginBottom: "mb-96",
  },
};
