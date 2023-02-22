import { LayoutContainer } from "components/layout/LayoutContainer";
import { IPDFTemplateProps } from "components/templates/@types/PDFTemplate";

const PDFTemplate: React.FC<IPDFTemplateProps> = ({ children }) => (
  <LayoutContainer
    className="max-w-screenXl screenMaxSm:pt-0 screenMaxSm:pb-96 screenMaxSm:px-28 min-h-screen bg-white"
    marginBottom="mb-0"
    marginLeft="ml-auto"
    marginRight="mr-auto"
    marginTop="mt-0"
    paddingBottom="pb-96"
    paddingLeft="pl-48"
    paddingRight="pr-48"
    paddingTop="pt-0"
  >
    {children}
  </LayoutContainer>
);

export { PDFTemplate };
