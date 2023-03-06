import { IConsoleTextProps } from "components/atoms/ConsoleText/@types/ConsoleText";
import { TClassStyleUtility } from "types/theme";
import { convertObjectValuesToArray } from "helpers/arrays/convertObjectValuesToArray";
import {
  consoleTextDefaultThemeClasses,
  mapConsoleTextVariantToStyles
} from "components/atoms/ConsoleText/styles";

const HERO_DESCRIPTION =
  "Vision driven change agent with career-long record of front-end user strategy and UI development";

const ConsoleText: React.FC<IConsoleTextProps> = ({ variant }) => {
  const consoleTextThemeClasses = {
    ...consoleTextDefaultThemeClasses,
    ...mapConsoleTextVariantToStyles[variant]
  };

  const classNames: TClassStyleUtility[] = convertObjectValuesToArray(
    consoleTextThemeClasses
  );

  return <div className={classNames.join(" ")}>{HERO_DESCRIPTION}</div>;
};

export { ConsoleText, HERO_DESCRIPTION as hero };
