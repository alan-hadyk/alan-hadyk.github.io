import { Icon } from "components/atoms/Icon";
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
    <Icon
      themeClasses={{
        glowAnimationTime: "childrenSvg:duration-fast",
        height: height,
        width: width
      }}
      isHeightResponsive
      iconName={iconName}
      shouldGlowOnHover
    />
  </Link>
);

export { LinkWithIcon };
