import {
  IVerticalIconsProps,
  VerticalIconSize,
} from "@app/components/molecules/VerticalIcons/@types/VerticalIcons";
import {
  mapSizeToIconHeight,
  mapSizeToIconStyles,
  mapSizeToIconsWrapperStyles,
  mapSizeToWrapperStyles,
  verticalIconsDefaultThemeClasses,
} from "@app/components/molecules/VerticalIcons/styles";
import { IThemeClasses } from "@app/types/theme";

export const useVerticalIconsThemeClasses = ({
  size = VerticalIconSize.Medium,
}: Pick<IVerticalIconsProps, "size">) => {
  const verticalIconsThemeClasses: Record<
    "icon" | "iconContainer" | "iconsWrapper",
    IThemeClasses
  > = {
    icon: {
      ...mapSizeToIconStyles[size],
      height: mapSizeToIconHeight[size],
    },
    iconContainer: {
      height: mapSizeToIconHeight[size],
    },
    iconsWrapper: {
      ...verticalIconsDefaultThemeClasses.iconsWrapper,
      ...mapSizeToWrapperStyles[size],
      ...mapSizeToIconsWrapperStyles[size],
    },
  };

  return {
    verticalIconsThemeClasses,
  };
};
