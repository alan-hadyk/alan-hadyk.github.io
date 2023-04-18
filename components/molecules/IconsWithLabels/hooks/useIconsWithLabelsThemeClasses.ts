import {
  IconsWithLabelsPosition,
  IIconsWithLabelsProps
} from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { IThemeClasses } from "types/theme";
import {
  IconWithLabelSize,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  iconsWithLabelsDefaultThemeClasses,
  iconsWithLabelsIconDefaultThemeClasses,
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
        : "max-w-100%"
  };

  const iconsWithLabelsIconThemeClasses: IIconWithLabelProps["themeClasses"] = {
    ...iconsWithLabelsIconDefaultThemeClasses,
    ...themeClasses?.iconWithLabel,
    iconWithLabelContent: {
      ...iconsWithLabelsIconDefaultThemeClasses?.iconWithLabelContent,
      ...themeClasses?.iconWithLabel?.iconWithLabelContent,
      label: {
        ...iconsWithLabelsIconDefaultThemeClasses?.iconWithLabelContent?.label,
        ...themeClasses?.iconWithLabel?.iconWithLabelContent?.label
      }
    }
  };

  return {
    iconsWithLabelsIconThemeClasses,
    iconsWithLabelsThemeClasses
  };
};

export { useIconsWithLabelsThemeClasses };
