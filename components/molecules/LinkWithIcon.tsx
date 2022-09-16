import PropTypes from "prop-types";

import { Icon, iconNames } from "components/atoms/Icon";
import { Link } from "components/molecules/Link";
import { ILinkWithIconProps } from "components/molecules/@types/LinkWithIcon";
import { spacingPropType } from "helpers/propTypes/spacing";

const LinkWithIcon: React.FC<ILinkWithIconProps> = ({
  dataCy,
  dataTestId,
  height = "h-48",
  href,
  iconName,
  isExternal = false,
  width = "w-auto"
}) => (
  <Link
    dataCy={dataCy}
    dataTestId={dataTestId || "LinkWithIcon"}
    display="block"
    height={height}
    href={href}
    isExternal={isExternal}
    width={width}
  >
    <Icon
      glowAnimationTime="childrenSvg:duration-fast"
      height={height}
      isHeightResponsive
      iconName={iconName}
      width={width}
      shouldGlowOnHover
    />
  </Link>
);

LinkWithIcon.propTypes = {
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  height: spacingPropType("h"),
  href: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf(iconNames).isRequired,
  isExternal: PropTypes.bool,
  width: spacingPropType("w")
};

export { LinkWithIcon };
