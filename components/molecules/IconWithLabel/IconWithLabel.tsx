import {
  IconWithLabelSize,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";

import { Link } from "components/molecules/Link/Link";
import { IconWithLabelContent } from "components/molecules/IconWithLabelContent/IconWithLabelContent";
import { IThemeClasses } from "types/theme";
import { mapSizeToIconHeight } from "components/molecules/IconWithLabel/styles";

const IconWithLabel: React.FC<IIconWithLabelProps> = ({
  href,
  iconName,
  isExternal,
  label,
  size = IconWithLabelSize.Medium,
  themeClasses
}) => {
  const linkThemeClasses: IThemeClasses = {
    height: mapSizeToIconHeight[size]
  };

  const iconWithLabelContentProps = {
    iconName,
    isHoverable: !!href,
    label,
    size,
    themeClasses: {
      label: {
        groupHover: href && "group-hover:text-white",
        ...themeClasses?.iconWithLabelContent?.label
      } as Pick<IThemeClasses, "groupHover">
    }
  };

  return href ? (
    <Link href={href} isExternal={isExternal} themeClasses={linkThemeClasses}>
      <IconWithLabelContent {...iconWithLabelContentProps} />
    </Link>
  ) : (
    <IconWithLabelContent {...iconWithLabelContentProps} />
  );
};

export { IconWithLabel };
