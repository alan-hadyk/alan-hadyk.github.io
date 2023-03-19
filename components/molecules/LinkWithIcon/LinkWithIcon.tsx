import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";
import { Link } from "components/molecules/Link/Link";
import { ILinkWithIconProps } from "components/molecules/LinkWithIcon/@types/LinkWithIcon";
import {
  linkWithIconDefaultThemeClasses,
  linkWithIconDynamicIconDefaultThemeClasses
} from "components/molecules/LinkWithIcon/styles";
import { IThemeClasses } from "types/theme";

const LinkWithIcon: React.FC<ILinkWithIconProps> = ({
  href,
  iconName,
  isExternal = false,
  themeClasses
}) => {
  const linkWithIconThemeClasses: IThemeClasses = {
    ...linkWithIconDefaultThemeClasses,
    ...themeClasses
  };

  const linkWithIconDynamicIconThemeClasses: IThemeClasses = {
    ...linkWithIconDynamicIconDefaultThemeClasses,
    ...themeClasses
  };

  return (
    <Link
      href={href}
      isExternal={isExternal}
      themeClasses={linkWithIconThemeClasses}
    >
      <IconDynamic
        themeClasses={linkWithIconDynamicIconThemeClasses}
        isHeightResponsive
        iconName={iconName}
        shouldGlowOnHover
      />
    </Link>
  );
};

export { LinkWithIcon };
