import { ConsoleTextVariant } from "components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  consoleTvDesktopAndTabletDefaultThemeClasses,
  consoleTvDesktopAndTabletInnerWrapperDefaultThemeClasses,
  consoleTvDesktopAndTabletLabelDefaultThemeClasses,
  consoleTvDesktopAndTabletOuterWrapperDefaultThemeClasses
} from "components/molecules/Console/styles";

const ConsoleTvDesktopAndTablet: React.FC = () => (
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
          GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)
        </Typography>
      </LayoutContainer>

      <ConsoleText variant={ConsoleTextVariant.TvDesktopAndTablet} />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleTvDesktopAndTablet };
