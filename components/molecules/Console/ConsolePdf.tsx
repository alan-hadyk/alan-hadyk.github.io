import { ConsoleTextVariant } from "components/atoms/ConsoleText/@types/ConsoleText";
import { CornerVariant } from "components/atoms/Corner/@types/Corner";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Corners } from "components/molecules/Corners";

const ConsolePdf: React.FC = () => (
  <LayoutContainer
    themeClasses={{
      paddingTop: "pt-48"
    }}
  >
    <LayoutContainer
      themeClasses={{
        // borderColor: "border-blue300",
        // borderStyle: "border-solid",
        // borderWidth: "border-1",
        // boxShadow: "shadow-console",
        paddingX: "px-16",
        paddingY: "py-8",
        position: "relative"
      }}
    >
      <Corners variant={CornerVariant.Dark} />
      <ConsoleText variant={ConsoleTextVariant.Pdf} />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsolePdf };
