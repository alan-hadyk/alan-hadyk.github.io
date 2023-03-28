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
  mapSizeToIconsWrapperStyles,
  mapSizeToLabelsWrapperStyles,
  verticalIconsWithLabelsIconsWrapperDefaultThemeClasses,
  verticalIconsWithLabelsLabelDefaultThemeClasses
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
  const verticalIconsWithLabelsIconThemeClasses: IThemeClasses = {
    height: mapSizeToIconHeight[size]
  };

  const verticalIconsWithLabelsIconsWrapperThemeClasses: IThemeClasses = {
    ...verticalIconsWithLabelsIconsWrapperDefaultThemeClasses,
    ...mapSizeToIconsWrapperStyles[size]
  };

  const verticalIconsWithLabelsLabelThemeClasses: IThemeClasses = {
    ...verticalIconsWithLabelsLabelDefaultThemeClasses,
    ...mapIconWithLabelContentVariantToLabelStyles[variant],
    fontSize: mapSizeToTextFontSize[size],
    ...themeClasses?.label
  };

  const verticalIconsWithLabelsLabelsWrapperThemeClasses: IThemeClasses =
    mapSizeToLabelsWrapperStyles[size];

  return {
    verticalIconsWithLabelsIconThemeClasses,
    verticalIconsWithLabelsIconsWrapperThemeClasses,
    verticalIconsWithLabelsLabelThemeClasses,
    verticalIconsWithLabelsLabelsWrapperThemeClasses
  };
};
