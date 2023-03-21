import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IPDFTemplateProps } from "components/templates/@types/PDFTemplate";

const PDFTemplate: React.FC<IPDFTemplateProps> = ({ children }) => (
  <LayoutContainer
    themeClasses={{
      backgroundColor: "bg-white",
      marginX: "mx-auto",
      marginY: "my-0",
      maxWidth: "max-w-screenXl",
      mediaQuery: [
        "screenMaxSm:pt-0",
        "screenMaxSm:pb-96",
        "screenMaxSm:px-28"
      ],
      minHeight: "min-h-screenSm",
      paddingBottom: "pb-96",
      paddingTop: "pt-0",
      paddingX: "px-48"
    }}
  >
    {children}
  </LayoutContainer>
);

export { PDFTemplate };
