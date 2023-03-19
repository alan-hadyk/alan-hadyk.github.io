import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";
import { VerticalIconsWithLabels } from "components/molecules/VerticalIconsWithLabels";

import {
  IconsWithLabelsPosition,
  IIconsWithLabelsProps
} from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { useIconsWithLabelsThemeClasses } from "components/molecules/IconsWithLabels/hooks/useIconsWithLabelsThemeClasses";

const IconsWithLabels: React.FC<IIconsWithLabelsProps> = ({
  iconsWithLabels,
  position = IconsWithLabelsPosition.Vertical,
  size = IconWithLabelSize.Medium,
  themeClasses
}) => {
  const { iconsWithLabelsIconThemeClasses, iconsWithLabelsThemeClasses } =
    useIconsWithLabelsThemeClasses({ position, size, themeClasses });

  return (
    <LayoutContainer themeClasses={iconsWithLabelsThemeClasses}>
      {position === IconsWithLabelsPosition.Horizontal ? (
        iconsWithLabels &&
        iconsWithLabels.map(({ iconName, label }) => (
          <IconWithLabel
            iconName={iconName}
            key={label}
            label={label}
            size={size}
            themeClasses={iconsWithLabelsIconThemeClasses}
          />
        ))
      ) : (
        <VerticalIconsWithLabels
          themeClasses={iconsWithLabelsIconThemeClasses.iconWithLabelContent}
          iconsWithLabels={iconsWithLabels}
          size={size}
        />
      )}
    </LayoutContainer>
  );
};

export { IconsWithLabels };
