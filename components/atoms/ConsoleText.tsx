import { IConsoleTextProps } from "components/atoms/@types/ConsoleText";
import { IThemeClasses, TClassStyleUtility } from "types/theme";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const HERO_DESCRIPTION =
  "Vision driven change agent with career-long record of front-end user strategy and UI development";

const defaultThemeClasses: IThemeClasses = {
  after: [
    "after:animate-blink-slow",
    "after:bg-blue100",
    "after:content-['']",
    "after:inline-block",
    "after:ml-8"
  ],
  color: "text-white",
  fontFamily: "font-exan",
  mediaQuery: [
    "msHighContrastNone:font-anonymousPro",
    "msHighContrastNone:uppercase",
    "msHighContrastActive:font-anonymousPro",
    "msHighContrastActive:uppercase"
  ],
  textAlign: "text-center",
  textTransform: "lowercase"
};

const ConsoleText: React.FC<IConsoleTextProps> = ({ themeClasses }) => {
  const classNames: TClassStyleUtility[] = [];

  classNames.push(convertObjectValuesToString(defaultThemeClasses));
  classNames.push(convertObjectValuesToString(themeClasses));

  return <div className={classNames.join(" ")}>{HERO_DESCRIPTION}</div>;
};

export { ConsoleText, HERO_DESCRIPTION as hero };
