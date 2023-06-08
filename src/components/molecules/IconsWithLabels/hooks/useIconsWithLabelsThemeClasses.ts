import { IIconsWithLabelsProps } from "@app/components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { IThemeClasses } from "@app/types/theme";
import { IconWithLabelSize } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  iconsWithLabelsDefaultThemeClasses,
  mapSizeToFlexContainerGap,
} from "@app/components/molecules/IconsWithLabels/styles";

const useIconsWithLabelsThemeClasses = ({
  size = IconWithLabelSize.Medium,
  themeClasses,
}: Pick<IIconsWithLabelsProps, "size" | "themeClasses">) => {
  const iconsWithLabelsThemeClasses: IThemeClasses = {
    ...iconsWithLabelsDefaultThemeClasses,
    gap: mapSizeToFlexContainerGap[size],
    ...themeClasses?.wrapper,
  };

  return {
    iconsWithLabelsThemeClasses,
  };
};

export { useIconsWithLabelsThemeClasses };
