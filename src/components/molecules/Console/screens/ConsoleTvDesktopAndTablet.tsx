import {
  ConsoleTextVariant,
  IConsoleTextProps,
} from "@app/components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "@app/components/atoms/ConsoleText/ConsoleText";
import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  consoleTvDesktopAndTabletDefaultThemeClasses,
  consoleTvDesktopAndTabletInnerWrapperDefaultThemeClasses,
  consoleTvDesktopAndTabletLabelDefaultThemeClasses,
  consoleTvDesktopAndTabletOuterWrapperDefaultThemeClasses,
} from "@app/components/molecules/Console/styles";

const ConsoleTvDesktopAndTablet: React.FC<
  Pick<IConsoleTextProps, "children">
> = ({ children }) => (
  <LayoutContainer themeClasses={consoleTvDesktopAndTabletDefaultThemeClasses}>
    <LayoutContainer
      themeClasses={consoleTvDesktopAndTabletOuterWrapperDefaultThemeClasses}
    >
      <LayoutContainer
        themeClasses={consoleTvDesktopAndTabletInnerWrapperDefaultThemeClasses}
      >
        <Typography
          themeClasses={consoleTvDesktopAndTabletLabelDefaultThemeClasses}
        >
          Hi, I&apos;m Alan
        </Typography>
      </LayoutContainer>

      <ConsoleText variant={ConsoleTextVariant.TvDesktopAndTablet}>
        {children}
      </ConsoleText>
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleTvDesktopAndTablet };
