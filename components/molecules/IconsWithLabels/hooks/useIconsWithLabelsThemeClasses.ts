import {
  IconsWithLabelsPosition,
  IIconsWithLabelsProps
} from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { IThemeClasses } from "types/theme";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  iconsWithLabelsDefaultThemeClasses,
  mapSizeToFlexContainerGap
} from "components/molecules/IconsWithLabels/styles";

const useIconsWithLabelsThemeClasses = ({
  position = IconsWithLabelsPosition.Vertical,
  size = IconWithLabelSize.Medium,
  themeClasses
}: Pick<IIconsWithLabelsProps, "position" | "size" | "themeClasses">) => {
  const iconsWithLabelsThemeClasses: IThemeClasses = {
    ...iconsWithLabelsDefaultThemeClasses,
    flexFlow:
      position === IconsWithLabelsPosition.Horizontal
        ? "flex-row-wrap"
        : "flex-row-nowrap",
    gap: mapSizeToFlexContainerGap[position][size],
    justifyContent:
      position === IconsWithLabelsPosition.Horizontal
        ? "justify-start"
        : "justify-center",
    maxWidth:
      position === IconsWithLabelsPosition.Horizontal
        ? "max-w-unset"
        : "max-w-100%",
    ...themeClasses?.wrapper
  };

  return {
    iconsWithLabelsThemeClasses
  };
};

export { useIconsWithLabelsThemeClasses };
