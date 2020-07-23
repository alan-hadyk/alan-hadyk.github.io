import React, { Fragment } from "react";

import LinkWithIcon from "<molecules>/LinkWithIcon";

import { LinkWithIconProps } from "<molecules>/__typings__/LinkWithIcon.d.ts";

const icons: LinkWithIconProps[] = [{
  height: "spacing48",
  href: "https://github.com/alan-hadyk",
  iconName: "gitHub"
}, {
  height: "spacing48",
  href: "https://codesandbox.io/u/alan-hadyk",
  iconName: "codeSandbox"
}, {
  height: "spacing48",
  href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
  iconName: "linkedIn"
}];

const MenuIcons = (): JSX.Element => (
  <Fragment>
    {icons.map(({ height, href, iconName }: LinkWithIconProps) => (
      <LinkWithIcon
        dataTestId="MenuIcons"
        key={iconName}
        height={height}
        href={href}
        iconName={iconName}
        isExternal
      />
    ))}
  </Fragment>
);

export default MenuIcons;
