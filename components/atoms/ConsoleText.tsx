import { IConsoleTextProps } from "components/atoms/@types/ConsoleText";

const HERO_DESCRIPTION =
  "Vision driven change agent with career-long record of front-end user strategy and UI development";

const DEFAULT_CLASS_NAMES = [
  "text-white",
  "font-exan",
  "text-center",
  "lowercase",
  "msHighContrastNone:font-anonymousPro",
  "msHighContrastNone:uppercase",
  "msHighContrastActive:font-anonymousPro",
  "msHighContrastActive:uppercase",
  "after:animate-blink-slow",
  "after:bg-blue100",
  "after:content-['']",
  "after:inline-block",
  "after:ml-8"
];

const ConsoleText: React.FC<IConsoleTextProps> = ({ themeClasses }) => {
  const classNames = [...DEFAULT_CLASS_NAMES];

  themeClasses &&
    Object.values(themeClasses).forEach(
      (themeClass) => themeClass && classNames.push(themeClass)
    );

  return <div className={classNames.join(" ")}>{HERO_DESCRIPTION}</div>;
};

export { ConsoleText, HERO_DESCRIPTION as hero };
