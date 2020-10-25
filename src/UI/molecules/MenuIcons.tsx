import React, { Fragment } from "react";

import LinkWithIcon from "UI/molecules/LinkWithIcon";

import { LinkWithIconProps } from "UI/molecules/__typings__/LinkWithIcon";

const icons: LinkWithIconProps[] = [
  {
    href: "https://github.com/alan-hadyk",
    iconName: "gitHub"
  },
  {
    href: "https://codesandbox.io/u/alan-hadyk",
    iconName: "codeSandbox"
  },
  {
    href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
    iconName: "linkedIn"
  }
];

const MenuIcons = (): JSX.Element => (
  <Fragment>
    {icons.map(({ href, iconName }: LinkWithIconProps) => (
      <LinkWithIcon
        dataCy={iconName}
        dataTestId="MenuIcons"
        height="spacing48"
        key={iconName}
        href={href}
        iconName={iconName}
        isExternal
      />
    ))}
  </Fragment>
);

export default MenuIcons;
