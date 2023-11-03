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
      fontSize: "text-32",
      lineHeight: "leading-36",
    },
    [ConsoleTextVariant.Pdf]: {
      color: "text-blue600",
      fontFamily: "font-anonymousPro",
      fontSize: "text-12",
      lineHeight: "leading-16",
      textTransform: "uppercase",
    },
    [ConsoleTextVariant.TvDesktopAndTablet]: {
      fontSize: "text-[6vh]",
      lineHeight: "leading-[7.4vh]",
    },
  };

export { consoleTextDefaultThemeClasses, mapConsoleTextVariantToStyles };
