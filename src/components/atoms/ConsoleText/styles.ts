import { ConsoleTextVariant } from "@app/components/atoms/ConsoleText/@types/ConsoleText";
import { IThemeClasses } from "@app/types/theme";

const consoleTextDefaultThemeClasses: IThemeClasses = {
  color: "text-white",
  fontFamily: "font-rajdhani",
  mediaQuery: [
    "msHighContrastNone:font-anonymousPro",
    "msHighContrastActive:font-anonymousPro",
  ],
  textAlign: "text-center",
};

const mapConsoleTextVariantToStyles: Record<ConsoleTextVariant, IThemeClasses> =
  {
    [ConsoleTextVariant.Mobile]: {
      fontSize: "text-28",
      lineHeight: "leading-32",
    },
    [ConsoleTextVariant.TvDesktopAndTablet]: {
      fontSize: "text-48",
      lineHeight: "leading-56",
    },
  };

export { consoleTextDefaultThemeClasses, mapConsoleTextVariantToStyles };
