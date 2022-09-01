import { childrenPropTypes } from "helpers/propTypes/children";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { IPageTemplateProps } from "components/templates/@types/PageTemplate";
import PropTypes from "prop-types";

const PageTemplate: React.FC<IPageTemplateProps> = ({
  as,
  children
}): JSX.Element => (
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

PageTemplate.propTypes = {
  as: PropTypes.oneOf([
    "div",
    "main",
    "section",
    "article",
    "header",
    "footer",
    "nav",
    "form",
    "table",
    "a"
  ]),
  children: childrenPropTypes.isRequired
};

export { PageTemplate };
