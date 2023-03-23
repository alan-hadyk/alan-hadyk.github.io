import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IPdfTemplateProps } from "components/templates/@types/PdfTemplate";

const PdfTemplate: React.FC<IPdfTemplateProps> = ({ children, sidebar }) => (
  <LayoutContainer
    themeClasses={{
      backgroundColor: "bg-white",
      display: "flex",
      flexFlow: "flex-row-nowrap",
      marginX: "mx-auto",
      marginY: "my-0",
      maxWidth: "max-w-screenXl",
      minHeight: "min-h-screenSm",
      width: "w-full"
    }}
  >
    <LayoutContainer
      themeClasses={{
        mediaQuery: [
          "screenMaxSm:pt-0",
          "screenMaxSm:pb-96",
          "screenMaxSm:px-28"
        ],
        paddingBottom: "pb-96",
        paddingTop: "pt-0",
        paddingX: "px-48"
      }}
    >
      {children}
    </LayoutContainer>
    <LayoutContainer
      themeClasses={{
        backgroundColor: "bg-blue600",
        flex: "flex-[0_0_30%]",
        paddingX: "px-24",
        paddingY: "py-40"
      }}
    >
      {sidebar}
    </LayoutContainer>
  </LayoutContainer>
);

export { PdfTemplate };
