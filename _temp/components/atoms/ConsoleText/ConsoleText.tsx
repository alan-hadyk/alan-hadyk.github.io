import { IConsoleTextProps } from "components/atoms/ConsoleText/@types/ConsoleText";
import { IThemeClasses, TClassStyleUtility } from "types/theme";
import { convertObjectValuesToArray } from "helpers/arrays/convertObjectValuesToArray";
import {
  consoleTextDefaultThemeClasses,
  mapConsoleTextVariantToStyles
} from "components/atoms/ConsoleText/styles";

const ConsoleText: React.FC<IConsoleTextProps> = ({ children, variant }) => {
  const consoleTextThemeClasses: IThemeClasses = {
    ...consoleTextDefaultThemeClasses,
    ...mapConsoleTextVariantToStyles[variant]
  };

  const consoleTexClassNames: TClassStyleUtility[] = convertObjectValuesToArray(
    {
      ...consoleTextThemeClasses,
      className: "console-text"
    }
  );

  return <div className={consoleTexClassNames.join(" ")}>{children}</div>;
};

export { ConsoleText };
