import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IPageTemplateProps } from "components/templates/PageTemplate/@types/PageTemplate";
import { pageTemplateDefaultThemeClasses } from "components/templates/PageTemplate/styles";

const PageTemplate: React.FC<IPageTemplateProps> = ({ as, children }) => (
  <LayoutContainer as={as} themeClasses={pageTemplateDefaultThemeClasses}>
    {children}
  </LayoutContainer>
);

export { PageTemplate };
