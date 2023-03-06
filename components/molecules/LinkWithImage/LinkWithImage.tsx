import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
import { Link } from "components/molecules/Link";
import { ILinkWithImageProps } from "components/molecules/LinkWithImage/@types/LinkWithImage";

const LinkWithImage: React.FC<ILinkWithImageProps> = ({
  height = "h-48",
  href,
  iconName,
  isExternal = false,
  width = "w-auto"
}) => (
  <Link
    display="block"
    height={height}
    href={href}
    isExternal={isExternal}
    width={width}
  >
    <ImageDynamic
      themeClasses={{
        height: height,
        pseudoClasses: [
          "childrenSvg:animate-glow-slow",
          "childrenSvg:duration-fast"
        ],
        width: width
      }}
      isHeightResponsive
      imageName={iconName}
      shouldGlowOnHover
    />
  </Link>
);

export { LinkWithImage };
