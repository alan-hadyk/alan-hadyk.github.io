import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";
import { Link } from "components/molecules/Link";
import { ILinkWithIconProps } from "components/molecules/@types/LinkWithIcon";

const LinkWithIcon: React.FC<ILinkWithIconProps> = ({
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
    <IconDynamic
      themeClasses={{
        height: height,
        pseudoClasses: [
          "childrenSvg:animate-glow-slow",
          "childrenSvg:duration-fast"
        ],
        width: width
      }}
      isHeightResponsive
      iconName={iconName}
      shouldGlowOnHover
    />
  </Link>
);

export { LinkWithIcon };
