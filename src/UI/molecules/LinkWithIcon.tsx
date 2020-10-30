import React from "react";

import Link from "UI/molecules/Link";
import Icon from "UI/atoms/Icon";

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

export default LinkWithIcon;
