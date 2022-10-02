import { LayoutContainer } from "components/layout/LayoutContainer";
import { IPageTemplateProps } from "components/templates/@types/PageTemplate";

const PageTemplate: React.FC<IPageTemplateProps> = ({ as, children }) => (
  <LayoutContainer
    as={as}
    className="max-w-screenXl screenMaxSm:pt-0 screenMaxSm:pb-96 screenMaxSm:px-28 min-h-screen"
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

export { PageTemplate };
