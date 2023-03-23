import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "components/molecules/IconWithLabel/styles";
import { IVerticalIconsWithLabelsProps } from "components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import {
  mapSizeToIconsWrapperStyles,
  verticalIconsWithLabelsIconsWrapperDefaultThemeClasses,
  verticalIconsWithLabelsLabelDefaultThemeClasses
} from "components/molecules/VerticalIconsWithLabels/styles";
import { IThemeClasses } from "types/theme";

export const useVerticalIconsWithLabelsThemeClasses = ({
  size = IconWithLabelSize.Medium,
  themeClasses
}: Pick<IVerticalIconsWithLabelsProps, "size" | "themeClasses">) => {
  const verticalIconsWithLabelsIconThemeClasses: IThemeClasses = {
    height: mapSizeToIconHeight[size]
  };

  const verticalIconsWithLabelsLabelThemeClasses: IThemeClasses = {
    ...verticalIconsWithLabelsLabelDefaultThemeClasses,
    fontSize: mapSizeToTextFontSize[size],
    ...themeClasses?.label
  };

  const verticalIconsWithLabelsIconsWrapperThemeClasses: IThemeClasses = {
    ...verticalIconsWithLabelsIconsWrapperDefaultThemeClasses,
    ...mapSizeToIconsWrapperStyles[size]
  };

  return {
    verticalIconsWithLabelsIconThemeClasses,
    verticalIconsWithLabelsIconsWrapperThemeClasses,
    verticalIconsWithLabelsLabelThemeClasses
  };
};
