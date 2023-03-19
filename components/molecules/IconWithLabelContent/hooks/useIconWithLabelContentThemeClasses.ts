import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "components/molecules/IconWithLabel/styles";
import { IIconWithLabelContentProps } from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import { iconWithLabelContentLabelDefaultThemeClasses } from "components/molecules/IconWithLabelContent/styles";
import { isIE11 } from "helpers/browser/isIE11";
import { IThemeClasses } from "types/theme";

const useIconWithLabelContentThemeClasses = ({
  size = IconWithLabelSize.Medium,
  themeClasses
}: Pick<IIconWithLabelContentProps, "size" | "themeClasses">) => {
  const iconWithLabelContentIconWrapperThemeClasses: IThemeClasses = {
    paddingRight: size === IconWithLabelSize.Small ? "pr-8" : "pr-12"
  };

  const iconWithLabelContentIconThemeClasses: IThemeClasses = {
    height: mapSizeToIconHeight[size],
    width: isIE11() ? "w-32" : "w-auto"
  };

  const iconWithLabelContentLabelThemeClasses: IThemeClasses = {
    ...iconWithLabelContentLabelDefaultThemeClasses,
    fontSize: size ? mapSizeToTextFontSize[size] : undefined,
    ...themeClasses?.label
  };

  return {
    iconWithLabelContentIconThemeClasses,
    iconWithLabelContentIconWrapperThemeClasses,
    iconWithLabelContentLabelThemeClasses
  };
};

export { useIconWithLabelContentThemeClasses };
