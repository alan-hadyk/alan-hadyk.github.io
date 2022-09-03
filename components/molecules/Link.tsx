import { useCallback } from "react";

import NextLink from "next/link";
import PropTypes from "prop-types";

import { Line } from "components/atoms/Line";
import { ILinkProps } from "components/molecules/@types/Link";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { spacingPropTypes } from "helpers/propTypes/spacing";
import { LineDirection } from "components/atoms/@types/Line";

const Link: React.FC<ILinkProps> = ({
  children,
  dataCy,
  dataTestId,
  display = "block",
  height = "h-unset",
  href,
  isExternal = false,
  isHoverable = false,
  width = "w-unset"
}) => {
  const getComponentType = useCallback(
    () => (isExternal ? "ExternalLink" : "RouterLink"),
    [isExternal]
  );
  const LinkComponent = isExternal ? "a" : NextLink;

  return (
    <LinkComponent
      aria-label={dataCy || dataTestId}
      className={`
        ${getComponentType()}
        ${display}
        ${height} ${width}
        leading-[1] group

        hoverChildrenLine:opacity-100 hoverChildrenLine:visible hoverChildrenLine:w-50%
        focusChildrenLine:opacity-100 focusChildrenLine:visible focusChildrenLine:w-50%
        activeChildrenLine:opacity-100 activeChildrenLine:visible activeChildrenLine:w-50%

        focusChildrenSvg:drop-shadow-lg activeChildrenSvg:drop-shadow-lg
      `}
      data-cy={dataCy}
      data-testid={dataTestId || getComponentType()}
      href={href}
      tabIndex={0}
      target={isExternal ? "_blank" : "_self"}
    >
      <>
        {children}

        {isHoverable && (
          <LayoutContainer position="relative">
            <Line direction={LineDirection.LEFT} />
            <Line direction={LineDirection.RIGHT} />
          </LayoutContainer>
        )}
      </>
    </LinkComponent>
  );
};

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  display: PropTypes.oneOf(["block", "inline"]),
  height: spacingPropTypes("h"),
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  isHoverable: PropTypes.bool,
  width: spacingPropTypes("w")
};

export { Link };
