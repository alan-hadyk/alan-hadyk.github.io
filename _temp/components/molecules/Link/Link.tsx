import NextLink from "next/link";

import { Line } from "components/atoms/Line/Line";
import { ILinkProps } from "components/molecules/Link/@types/Link";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { LineDirection } from "components/atoms/Line/@types/Line";
import { IThemeClasses } from "types/theme";
import { linkDefaultThemeClasses } from "components/molecules/Link/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const Link: React.FC<ILinkProps> = ({
  children,
  href,
  isExternal = false,
  isHoverable = false,
  themeClasses
}) => {
  const linkThemeClasses: IThemeClasses = {
    ...linkDefaultThemeClasses,
    ...themeClasses
  };

  return (
    <NextLink
      aria-label={href}
      href={href}
      className={convertObjectValuesToString(linkThemeClasses)}
      tabIndex={0}
      target={isExternal ? "_blank" : "_self"}
      passHref
    >
      {children}

      {isHoverable && (
        <LayoutContainer
          themeClasses={{
            position: "relative",
            width: "w-auto"
          }}
        >
          <Line direction={LineDirection.Left} />
          <Line direction={LineDirection.Right} />
        </LayoutContainer>
      )}
    </NextLink>
  );
};

export { Link };
