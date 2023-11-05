import {
  ConsoleTextVariant,
  IConsoleTextProps,
} from "@app/components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "@app/components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  consoleDesktopDefaultThemeClasses,
  consoleDesktopWrapperDefaultThemeClasses,
} from "@app/components/molecules/Console/styles";

export const ConsoleDesktop: React.FC<Pick<IConsoleTextProps, "children">> = ({
  children,
}) => (
  <LayoutContainer themeClasses={consoleDesktopDefaultThemeClasses}>
    <LayoutContainer themeClasses={consoleDesktopWrapperDefaultThemeClasses}>
      <ConsoleText variant={ConsoleTextVariant.TvDesktopAndTablet}>
        {children}
      </ConsoleText>
    </LayoutContainer>
  </LayoutContainer>
);
