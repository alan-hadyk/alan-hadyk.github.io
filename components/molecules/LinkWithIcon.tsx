import PropTypes from "prop-types";

import { Icon, iconNames } from "components/atoms/Icon";
import { Link } from "components/molecules/Link";
import { LinkWithIconProps } from "components/molecules/@types/LinkWithIcon";
import { spacingPropTypes } from "helpers/propTypes/spacing";

const LinkWithIcon = ({
  dataCy,
  dataTestId,
  height = "h-48",
  href,
  iconName,
  isExternal = false,
  width = "w-auto"
}: LinkWithIconProps): JSX.Element => (
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
      iconName={iconName}
      width={width}
      shouldGlowOnHover
    />
  </Link>
);

LinkWithIcon.propTypes = {
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  height: spacingPropTypes("h"),
  href: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf(iconNames).isRequired,
  isExternal: PropTypes.bool,
  width: spacingPropTypes("w")
};

export { LinkWithIcon };
