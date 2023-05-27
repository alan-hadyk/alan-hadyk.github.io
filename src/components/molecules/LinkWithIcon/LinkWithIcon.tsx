import { ImageDynamicVariant } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { Link } from "@app/components/molecules/Link/Link";
import { ILinkWithIconProps } from "@app/components/molecules/LinkWithIcon/@types/LinkWithIcon";
import {
  linkWithIconDefaultThemeClasses,
  linkWithIconDynamicImageDefaultThemeClasses,
} from "@app/components/molecules/LinkWithIcon/styles";
import { IThemeClasses } from "@app/types/theme";

const LinkWithIcon: React.FC<ILinkWithIconProps> = ({
  href,
  iconName,
  isExternal = false,
  themeClasses,
}) => {
  const linkWithIconThemeClasses: IThemeClasses = {
    ...linkWithIconDefaultThemeClasses,
    ...themeClasses,
  };

  const linkWithIconDynamicImageThemeClasses: IThemeClasses = {
    ...linkWithIconDynamicImageDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <Link
      href={href}
      isExternal={isExternal}
      themeClasses={linkWithIconThemeClasses}
    >
      <ImageDynamic
        themeClasses={linkWithIconDynamicImageThemeClasses}
        imageName={iconName}
        variants={[
          ImageDynamicVariant.HeightResponsive,
          ImageDynamicVariant.GlowOnHover,
        ]}
      />
    </Link>
  );
};

export { LinkWithIcon };
