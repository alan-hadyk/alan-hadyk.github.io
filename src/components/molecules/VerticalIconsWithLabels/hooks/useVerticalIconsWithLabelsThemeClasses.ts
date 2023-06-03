import { IconWithLabelVariant } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  mapIconWithLabelContentVariantToLabelStyles,
  mapSizeToIconHeight,
  mapSizeToTextFontSize,
} from "@app/components/molecules/IconWithLabelContent/styles";
import {
  IVerticalIconsWithLabelsProps,
  VerticalIconsWithLabelsSize,
} from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import {
  mapSizeToWrapperStyles,
  mapSizeToLabelStyles,
  mapSizeToLabelsWrapperStyles,
  verticalIconsWithLabelsDefaultThemeClasses,
} from "@app/components/molecules/VerticalIconsWithLabels/styles";
import { IThemeClasses } from "@app/types/theme";

export const useVerticalIconsWithLabelsThemeClasses = ({
  size = VerticalIconsWithLabelsSize.Medium,
  themeClasses,
  variant = IconWithLabelVariant.Blue,
}: Pick<
  IVerticalIconsWithLabelsProps,
  "size" | "themeClasses" | "variant"
>) => {
  const verticalIconsWithLabelsThemeClasses: Record<
    "label" | "labelContainer" | "labelsWrapper",
    IThemeClasses
  > = {
    label: {
      ...mapIconWithLabelContentVariantToLabelStyles[variant],
      ...mapSizeToLabelStyles[size],
      fontSize: mapSizeToTextFontSize[size],
      height: mapSizeToIconHeight[size],
      ...themeClasses?.label,
    },
    labelContainer: {
      height: mapSizeToIconHeight[size],
    },
    labelsWrapper: {
      ...verticalIconsWithLabelsDefaultThemeClasses.labelsWrapper,
      ...mapSizeToLabelsWrapperStyles[size],
      ...mapSizeToWrapperStyles[size],
    },
  };

  return {
    verticalIconsWithLabelsThemeClasses,
  };
};
