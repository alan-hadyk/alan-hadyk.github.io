import { IVerticalIconsWithLabelsProps } from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { verticalIconsWithLabelsDefaultThemeClasses } from "@app/components/molecules/VerticalIconsWithLabels/styles";
import { VerticalIcons } from "@app/components/molecules/VerticalIcons/VerticalIcons";
import { VerticalLabels } from "@app/components/molecules/VerticalLabels/VerticalLabels";

export const VerticalIconsWithLabels: React.FC<
  IVerticalIconsWithLabelsProps
> = ({ iconsWithLabels, themeClasses }) => {
  const icons = iconsWithLabels.map(({ iconName }) => iconName);

  return (
    <LayoutContainer
      themeClasses={{
        ...verticalIconsWithLabelsDefaultThemeClasses.wrapper,
        ...themeClasses?.wrapper,
      }}
    >
      <VerticalIcons icons={icons} />

      <VerticalLabels labels={iconsWithLabels} themeClasses={themeClasses} />
    </LayoutContainer>
  );
};
