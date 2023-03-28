import {
  IconWithLabelContentSize,
  IconWithLabelContentVariant,
  IIconWithLabelContentProps
} from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import {
  mapIconWithLabelContentVariantToLabelStyles,
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "components/molecules/IconWithLabelContent/styles";
import { isIE11 } from "helpers/browser/isIE11";
import { IThemeClasses } from "types/theme";

const useIconWithLabelContentThemeClasses = ({
  size = IconWithLabelContentSize.Medium,
  themeClasses,
  variant = IconWithLabelContentVariant.Blue
}: Pick<IIconWithLabelContentProps, "size" | "themeClasses" | "variant">) => {
  const iconWithLabelContentIconWrapperThemeClasses: IThemeClasses = {
    paddingRight: size === IconWithLabelContentSize.Small ? "pr-8" : "pr-12"
  };

  const iconWithLabelContentIconThemeClasses: IThemeClasses = {
    height: mapSizeToIconHeight[size],
    width: isIE11() ? "w-32" : "w-auto"
  };

  const iconWithLabelContentLabelThemeClasses: IThemeClasses = {
    ...mapIconWithLabelContentVariantToLabelStyles[variant],
    fontSize: mapSizeToTextFontSize[size],
    ...themeClasses?.label
  };

  return {
    iconWithLabelContentIconThemeClasses,
    iconWithLabelContentIconWrapperThemeClasses,
    iconWithLabelContentLabelThemeClasses
  };
};

export { useIconWithLabelContentThemeClasses };
