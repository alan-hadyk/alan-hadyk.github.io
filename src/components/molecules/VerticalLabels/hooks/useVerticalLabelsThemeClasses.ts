import {
  IVerticalLabelsProps,
  VerticalLabelsSize,
  VerticalLabelsVariant,
} from "@app/components/molecules/VerticalLabels/@types/VerticalLabels";
import {
  mapSizeToHeight,
  mapSizeToLabelStyles,
  mapSizeToLabelsWrapperStyles,
  mapVerticalLabelsVariantToLabelStyles,
  verticalLabelsDefaultThemeClasses,
} from "@app/components/molecules/VerticalLabels/styles";
import { IThemeClasses } from "@app/types/theme";

export const useVerticalLabelsThemeClasses = ({
  size = VerticalLabelsSize.Medium,
  themeClasses,
  variant = VerticalLabelsVariant.Blue,
}: Pick<IVerticalLabelsProps, "size" | "themeClasses" | "variant">) => {
  const verticalLabelsThemeClasses: Record<
    "label" | "labelContainer" | "labelsWrapper",
    IThemeClasses
  > = {
    label: {
      ...mapVerticalLabelsVariantToLabelStyles[variant],
      ...mapSizeToLabelStyles[size],
      height: mapSizeToHeight[size],
      ...themeClasses?.label,
    },
    labelContainer: {
      height: mapSizeToHeight[size],
    },
    labelsWrapper: {
      ...verticalLabelsDefaultThemeClasses.labelsWrapper,
      ...mapSizeToLabelsWrapperStyles[size],
    },
  };

  return {
    verticalLabelsThemeClasses,
  };
};
