import PropTypes from "prop-types";

import Icon, { iconNames } from "UI/atoms/Icon";
import Link from "UI/molecules/Link";

import spacing from "styles/variables/spacing";

import { LinkWithIconProps } from "UI/molecules/__typings__/LinkWithIcon";

const LinkWithIcon = ({
  dataCy,
  dataTestId,
  height = "spacing48",
  href,
  iconName,
  isExternal = false,
  width = "auto"
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
      animationTime="fast"
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
  height: PropTypes.oneOf([
    ...Object.keys(spacing),
    "unset",
    "50%",
    "100%",
    "auto"
  ]),
  href: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf(iconNames).isRequired,
  isExternal: PropTypes.bool,
  width: PropTypes.string
};

export default LinkWithIcon;
