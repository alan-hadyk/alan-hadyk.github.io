import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
import { Link } from "components/molecules/Link/Link";
import { ILinkWithImageProps } from "components/molecules/LinkWithImage/@types/LinkWithImage";
import {
  linkWithImageDefaultThemeClasses,
  linkWithImageDynamicImageDefaultThemeClasses
} from "components/molecules/LinkWithImage/styles";
import { IThemeClasses } from "types/theme";

const LinkWithImage: React.FC<ILinkWithImageProps> = ({
  href,
  imageName,
  isExternal = false,
  themeClasses
}) => {
  const linkWithImageThemeClasses: IThemeClasses = {
    ...linkWithImageDefaultThemeClasses,
    ...themeClasses
  };

  const linkWithImageDynamicImageThemeClasses: IThemeClasses = {
    ...linkWithImageDynamicImageDefaultThemeClasses,
    ...themeClasses
  };

  return (
    <Link
      href={href}
      isExternal={isExternal}
      themeClasses={linkWithImageThemeClasses}
    >
      <ImageDynamic
        themeClasses={linkWithImageDynamicImageThemeClasses}
        isHeightResponsive
        imageName={imageName}
        shouldGlowOnHover
      />
    </Link>
  );
};

export { LinkWithImage };
