import { isIE11 } from "helpers/browser/isIE11";
import { IThemeClasses, TMediaQuery } from "types/theme";

export const hexagonDefaultThemeClasses: IThemeClasses = {
  position: "relative"
};

export const hexagonContentDefaultThemeClasses: IThemeClasses = {
  left: "left-50%",
  mediaQuery: [
    ...(isIE11()
      ? ["screenMd:left-[48%]", "screenMd:top-[53%]", "screenMd:w-[90%]"]
      : [])
  ] as TMediaQuery[],
  position: "absolute",
  top: "top-50%",
  translate: ["translate-x-negative50%", "translate-y-negative50%"],
  width: "w-100%"
};

export const hexagonSolidImageDefaultThemeClasses: IThemeClasses = {
  height: isIE11() ? "h-16" : "h-auto"
};
