import {
  IVerticalIconsWithLabelsProps,
  VerticalIconsWithLabelsSize,
  VerticalIconsWithLabelsVariant,
} from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { verticalIconsWithLabelsDefaultThemeClasses } from "@app/components/molecules/VerticalIconsWithLabels/styles";
import { VerticalIcons } from "@app/components/molecules/VerticalIcons/VerticalIcons";
import {
  mapVerticalIconsWithLabelsSizeToVerticalIconsSize,
  mapVerticalIconsWithLabelsSizeToVerticalLabelsSize,
  mapVerticalIconsWithLabelsVariantToVerticalLabelsVariant,
} from "@app/components/molecules/VerticalIconsWithLabels/config";
import { VerticalLabels } from "@app/components/molecules/VerticalLabels/VerticalLabels";

export const VerticalIconsWithLabels: React.FC<
  IVerticalIconsWithLabelsProps
> = ({
  iconsWithLabels,
  size = VerticalIconsWithLabelsSize.Medium,
  themeClasses,
  variant = VerticalIconsWithLabelsVariant.Blue,
}) => {
  const icons = iconsWithLabels.map(({ iconName }) => iconName);

  return (
    <LayoutContainer
      themeClasses={{
        ...verticalIconsWithLabelsDefaultThemeClasses.wrapper,
        ...themeClasses?.wrapper,
      }}
    >
      <VerticalIcons
        icons={icons}
        size={mapVerticalIconsWithLabelsSizeToVerticalIconsSize[size]}
      />

      <VerticalLabels
        labels={iconsWithLabels}
        size={mapVerticalIconsWithLabelsSizeToVerticalLabelsSize[size]}
        themeClasses={themeClasses}
        variant={
          mapVerticalIconsWithLabelsVariantToVerticalLabelsVariant[variant]
        }
      />
    </LayoutContainer>
  );
};
