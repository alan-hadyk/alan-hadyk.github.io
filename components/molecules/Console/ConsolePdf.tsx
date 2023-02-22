import { CornerVariant } from "components/atoms/@types/Corner";
import { ConsoleText } from "components/atoms/ConsoleText";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { Corners } from "components/molecules/Corners";

const ConsolePdf: React.FC = () => (
  <LayoutContainer paddingTop="pt-48">
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
      <ConsoleText
        themeClasses={{
          color: "text-blue600",
          fontFamily: "font-anonymousPro",
          fontSize: "text-12",
          lineHeight: "leading-16",
          textTransform: "uppercase"
        }}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsolePdf };
