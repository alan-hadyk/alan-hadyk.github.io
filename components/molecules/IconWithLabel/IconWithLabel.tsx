import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";

import { Link } from "components/molecules/Link/Link";
import { IconWithLabelContent } from "components/molecules/IconWithLabelContent/IconWithLabelContent";
import { IThemeClasses } from "types/theme";
import { IIconWithLabelContentProps } from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import {
  mapIconWithLabelSizeToIconWithLabelContentSize,
  mapIconWithLabelVariantToIconWithLabelContentVariant
} from "components/molecules/IconWithLabel/config";
import { mapSizeToIconHeight } from "components/molecules/IconWithLabelContent/styles";

const IconWithLabel: React.FC<IIconWithLabelProps> = ({
  href,
  iconName,
  isExternal,
  label,
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant = IconWithLabelVariant.Blue
}) => {
  const iconWithLabelContentProps: IIconWithLabelContentProps = {
    iconName,
    isHoverable: !!href,
    label,
    size: mapIconWithLabelSizeToIconWithLabelContentSize[size],
    themeClasses: {
      label: {
        groupHover: href ? "group-hover:text-white" : "",
        ...themeClasses?.iconWithLabelContent?.label
      } as Pick<IThemeClasses, "groupHover">
    },
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
