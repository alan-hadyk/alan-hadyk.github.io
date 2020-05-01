import React from "react";

import Link from "<atoms>/Link";
import Icon from "<atoms>/Icon";

import { LinkWithIconProps } from "<molecules>/__typings__/LinkWithIcon.d.ts";

function LinkWithIcon({
  height = "spacing48",
  href,
  iconName,
  isExternal = false,
  width = "auto"
}: LinkWithIconProps): JSX.Element {
  return (
    <Link 
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
}
  
export default LinkWithIcon;