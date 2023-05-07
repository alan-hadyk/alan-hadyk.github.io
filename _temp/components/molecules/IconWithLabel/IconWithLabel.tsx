import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";

import { Link } from "components/molecules/Link/Link";
import { IconWithLabelContent } from "components/molecules/IconWithLabelContent/IconWithLabelContent";
import { IIconWithLabelContentProps } from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import {
  mapIconWithLabelSizeToIconWithLabelContentSize,
  mapIconWithLabelVariantToIconWithLabelContentVariant
} from "components/molecules/IconWithLabel/config";
import { mapSizeToIconHeight } from "components/molecules/IconWithLabelContent/styles";
import { useIconWithLabelThemeClasses } from "components/molecules/IconWithLabel/hooks/useIconWithLabelThemeClasses";

const IconWithLabel: React.FC<IIconWithLabelProps> = ({
  href,
  iconName,
  iconVariant,
  isExternal,
  label,
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant = IconWithLabelVariant.Blue
}) => {
  const { iconWithLabelContentThemeClasses } = useIconWithLabelThemeClasses({
    href,
    themeClasses
  });

  const iconWithLabelContentProps: IIconWithLabelContentProps = {
    iconName,
    iconVariant,
    isHoverable: !!href,
    label,
    size: mapIconWithLabelSizeToIconWithLabelContentSize[size],
    themeClasses: iconWithLabelContentThemeClasses,
    variant: mapIconWithLabelVariantToIconWithLabelContentVariant[variant]
  };

  return href ? (
    <Link
      href={href}
      isExternal={isExternal}
      themeClasses={{
        height: mapSizeToIconHeight[size]
      }}
    >
      <IconWithLabelContent {...iconWithLabelContentProps} />
    </Link>
  ) : (
    <IconWithLabelContent {...iconWithLabelContentProps} />
  );
};

export { IconWithLabel };
