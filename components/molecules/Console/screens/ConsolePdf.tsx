import {
  ConsoleTextVariant,
  IConsoleTextProps
} from "components/atoms/ConsoleText/@types/ConsoleText";
import { CornerVariant } from "components/atoms/Corner/@types/Corner";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Corners } from "components/molecules/Corners/Corners";
import {
  consolePdfDefaultThemeClasses,
  consolePdfInnerContainerDefaultThemeClasses
} from "components/molecules/Console/styles";

const ConsolePdf: React.FC<Pick<IConsoleTextProps, "children">> = ({
  children
}) => (
  <LayoutContainer themeClasses={consolePdfDefaultThemeClasses}>
    <LayoutContainer themeClasses={consolePdfInnerContainerDefaultThemeClasses}>
      <Corners variant={CornerVariant.Dark} />
      <ConsoleText variant={ConsoleTextVariant.Pdf}>{children}</ConsoleText>
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsolePdf };
