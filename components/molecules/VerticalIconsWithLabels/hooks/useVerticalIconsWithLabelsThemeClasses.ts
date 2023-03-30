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
  verticalIconsWithLabelsIconsWrapperDefaultThemeClasses,
  verticalIconsWithLabelsLabelsWrapperDefaultThemeClasses
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
  // Icons wrapper
  const verticalIconsWithLabelsIconsWrapperThemeClasses: IThemeClasses = {
    ...verticalIconsWithLabelsIconsWrapperDefaultThemeClasses,
    ...mapSizeToWrapperStyles[size],
    ...mapSizeToIconsWrapperStyles[size]
  };

  // Icon container
  const verticalIconsWithLabelsIconContainerThemeClasses: IThemeClasses = {
    height: mapSizeToIconHeight[size]
  };

  // Icon
  const verticalIconsWithLabelsIconThemeClasses: IThemeClasses = {
    ...mapSizeToIconStyles[size],
    height: mapSizeToIconHeight[size]
  };

  // Labels wrapper
  const verticalIconsWithLabelsLabelsWrapperThemeClasses: IThemeClasses = {
    ...verticalIconsWithLabelsLabelsWrapperDefaultThemeClasses,
    ...mapSizeToLabelsWrapperStyles[size],
    ...mapSizeToWrapperStyles[size]
  };

  // Label container
  const verticalIconsWithLabelsLabelContainerThemeClasses: IThemeClasses = {
    height: mapSizeToIconHeight[size]
  };

  // Label
  const verticalIconsWithLabelsLabelThemeClasses: IThemeClasses = {
    ...mapIconWithLabelContentVariantToLabelStyles[variant],
    ...mapSizeToLabelStyles[size],
    fontSize: mapSizeToTextFontSize[size],
    height: mapSizeToIconHeight[size],
    ...themeClasses?.label
  };

  return {
    verticalIconsWithLabelsIconContainerThemeClasses,
    verticalIconsWithLabelsIconThemeClasses,
    verticalIconsWithLabelsIconsWrapperThemeClasses,
    verticalIconsWithLabelsLabelContainerThemeClasses,
    verticalIconsWithLabelsLabelThemeClasses,
    verticalIconsWithLabelsLabelsWrapperThemeClasses
  };
};
