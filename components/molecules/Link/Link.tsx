import NextLink from "next/link";

import { Line } from "components/atoms/Line/Line";
import { ILinkProps } from "components/molecules/Link/@types/Link";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { LineDirection } from "components/atoms/Line/@types/Line";
import { IThemeClasses } from "types/theme";
import {
  linkDefaultThemeClasses,
  linkLinesContainerDefaultThemeClasses
} from "components/molecules/Link/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const Link: React.FC<ILinkProps> = ({
  children,
  href,
  isExternal = false,
  isHoverable = false,
  themeClasses
}) => {
  const componentType = isExternal ? "ExternalLink" : "RouterLink";

  const linkThemeClasses: IThemeClasses = {
    ...linkDefaultThemeClasses,
    ...themeClasses
  };

  const linkClassNames = [
    componentType,
    convertObjectValuesToString(linkThemeClasses)
  ];

  const props: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    "aria-label": href,
    className: linkClassNames.join(" "),
    tabIndex: 0,
    target: isExternal ? "_blank" : "_self"
  };

  const renderChildren = () => (
    <>
      {children}

      {isHoverable && (
        <LayoutContainer themeClasses={linkLinesContainerDefaultThemeClasses}>
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
