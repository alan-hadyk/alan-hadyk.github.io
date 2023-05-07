import {
  ConsoleTextVariant,
  IConsoleTextProps
} from "components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  consoleMobileConsoleTextWrapperDefaultThemeClasses,
  consoleMobileDefaultThemeClasses
} from "components/molecules/Console/styles";

const ConsoleMobile: React.FC<Pick<IConsoleTextProps, "children">> = ({
  children
}) => (
  <LayoutContainer themeClasses={consoleMobileDefaultThemeClasses}>
    <LayoutContainer
      themeClasses={consoleMobileConsoleTextWrapperDefaultThemeClasses}
    >
      <ConsoleText variant={ConsoleTextVariant.Mobile}>{children}</ConsoleText>
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleMobile };
