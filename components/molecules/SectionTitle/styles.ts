import { isIE11 } from "helpers/browser/isIE11";
import { IThemeClasses } from "types/theme";

export const sectionTitleTypographyDefaultThemeClasses: IThemeClasses = {
  color: "text-blue100",
  fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
  lineHeight: "leading-80",
  textAlign: "text-center",
  textTransform: isIE11() ? "uppercase" : "lowercase"
};
