import NextLink from "next/link";

import { Line } from "components/atoms/Line/Line";
import { ILinkProps } from "components/molecules/@types/Link";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { LineDirection } from "components/atoms/Line/@types/Line";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const Link: React.FC<ILinkProps> = ({
  alignItems,
  children,
  display = "block",
  height = "h-unset",
  href,
  isExternal = false,
  isHoverable = false,
  justifyContent,
  width = "w-unset"
}) => {
  const componentType = isExternal ? "ExternalLink" : "RouterLink";

  const props = {
    "aria-label": href,
    className: trimTemplateLiteral(`
      ${componentType}
      ${display}
      ${alignItems || ""}  
      ${justifyContent || ""}  
      ${height} ${width}
      leading-[1] group

      hoverChildrenLine:opacity-100 hoverChildrenLine:visible hoverChildrenLine:w-50%
      focusChildrenLine:opacity-100 focusChildrenLine:visible focusChildrenLine:w-50%
      activeChildrenLine:opacity-100 activeChildrenLine:visible activeChildrenLine:w-50%

      focusChildrenSvg:drop-shadow-lg activeChildrenSvg:drop-shadow-lg
    `),
    tabIndex: 0,
    target: isExternal ? "_blank" : "_self"
  };

  const renderChildren = () => (
    <>
      {children}

      {isHoverable && (
        <LayoutContainer
          themeClasses={{
            position: "relative",
            width: "w-auto"
          }}
        >
          <Line direction={LineDirection.LEFT} />
          <Line direction={LineDirection.RIGHT} />
        </LayoutContainer>
      )}
    </>
  );

  return isExternal ? (
    <a {...props} href={href}>
      {renderChildren()}
    </a>
  ) : (
    <NextLink href={href} passHref>
      <a {...props}>{renderChildren()}</a>
    </NextLink>
  );
};

export { Link };
