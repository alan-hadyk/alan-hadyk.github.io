import {
  IconWithLabelSize,
  IconWithLabelVariant
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  mapIconWithLabelContentVariantToLabelStyles,
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "components/molecules/IconWithLabelContent/styles";
import { IVerticalIconsWithLabelsProps } from "components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import {
  mapSizeToWrapperStyles,
  mapSizeToIconStyles,
  mapSizeToIconsWrapperStyles,
  mapSizeToLabelStyles,
  mapSizeToLabelsWrapperStyles,
  verticalIconsWithLabelsDefaultThemeClasses
} from "components/molecules/VerticalIconsWithLabels/styles";
import { IThemeClasses } from "types/theme";

export const useVerticalIconsWithLabelsThemeClasses = ({
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant = IconWithLabelVariant.Blue
}: Pick<
  IVerticalIconsWithLabelsProps,
  "size" | "themeClasses" | "variant"
>) => {
  const verticalIconsWithLabelsThemeClasses: Record<
    | "icon"
    | "iconContainer"
    | "iconsWrapper"
    | "label"
    | "labelContainer"
    | "labelsWrapper",
    IThemeClasses
  > = {
    icon: {
      ...mapSizeToIconStyles[size],
      height: mapSizeToIconHeight[size]
    },
    iconContainer: {
      height: mapSizeToIconHeight[size]
    },
    iconsWrapper: {
      ...verticalIconsWithLabelsDefaultThemeClasses.iconsWrapper,
      ...mapSizeToWrapperStyles[size],
      ...mapSizeToIconsWrapperStyles[size]
    },
    label: {
      ...mapIconWithLabelContentVariantToLabelStyles[variant],
      ...mapSizeToLabelStyles[size],
      fontSize: mapSizeToTextFontSize[size],
      height: mapSizeToIconHeight[size],
      ...themeClasses?.label
    },
    labelContainer: {
      height: mapSizeToIconHeight[size]
    },
    labelsWrapper: {
      ...verticalIconsWithLabelsDefaultThemeClasses.labelsWrapper,
      ...mapSizeToLabelsWrapperStyles[size],
      ...mapSizeToWrapperStyles[size]
    }
  };

  return {
    verticalIconsWithLabelsThemeClasses
  };
};
