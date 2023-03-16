import { ConsoleTextVariant } from "components/atoms/ConsoleText/@types/ConsoleText";
import { CornerVariant } from "components/atoms/Corner/@types/Corner";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Corners } from "components/molecules/Corners/Corners";
import {
  consolePdfDefaultThemeClasses,
  consolePdfInnerContainerDefaultThemeClasses
} from "components/molecules/Console/styles";

const ConsolePdf: React.FC = () => (
  <LayoutContainer themeClasses={consolePdfDefaultThemeClasses}>
    <LayoutContainer themeClasses={consolePdfInnerContainerDefaultThemeClasses}>
      <Corners variant={CornerVariant.Dark} />
      <ConsoleText variant={ConsoleTextVariant.Pdf} />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsolePdf };
