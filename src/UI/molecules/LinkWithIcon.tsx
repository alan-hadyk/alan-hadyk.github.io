import React from "react";

import Link from "<molecules>/Link";
import Icon from "<atoms>/Icon";

import { LinkWithIconProps } from "<molecules>/__typings__/LinkWithIcon.d.ts";

const LinkWithIcon = ({
  dataCy,
  height = "spacing48",
  href,
  iconName,
  isExternal = false,
  width = "auto"
}: LinkWithIconProps): JSX.Element => (
  <Link 
    dataCy={dataCy}
    display="block"
    height={height}
    href={href}
    isExternal={isExternal}
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