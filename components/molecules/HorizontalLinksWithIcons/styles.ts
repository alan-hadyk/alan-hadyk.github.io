import { isIE11 } from "helpers/browser/isIE11";
import { IThemeClasses } from "types/theme";

export const horizontalLinksWithIconsIconDefaultThemeClasses: IThemeClasses = {
  height: "h-48",
  width: isIE11() ? "w-48" : "w-auto"
};
