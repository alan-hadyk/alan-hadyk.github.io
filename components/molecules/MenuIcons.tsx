import { LinkWithIcon } from "components/molecules/LinkWithIcon";

import { ILinkWithIconProps } from "components/molecules/@types/LinkWithIcon";

import { isIE11 } from "helpers/browser/isIE11";

const icons: ILinkWithIconProps[] = [
  {
    href: "https://github.com/alan-hadyk",
    iconName: "gitHub"
  },
  {
    href: "https://www.toptal.com/resume/alan-hadyk",
    iconName: "toptal"
  },
  {
    href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
    iconName: "linkedIn"
  }
];

const MenuIcons: React.FC = () => (
  <>
    {icons.map(({ href, iconName }: ILinkWithIconProps) => (
      <LinkWithIcon
        height="h-48"
        href={href}
        iconName={iconName}
        isExternal
        key={iconName}
        width={isIE11() ? "w-48" : "w-auto"}
      />
    ))}
  </>
);

export { MenuIcons };
