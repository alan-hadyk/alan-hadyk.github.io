import { IconStatic } from "@app/components/atoms/IconStatic/IconStatic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  IVerticalIconsProps,
  VerticalIconSize,
} from "@app/components/molecules/VerticalIcons/@types/VerticalIcons";
import { useVerticalIconsThemeClasses } from "@app/components/molecules/VerticalIcons/hooks/useVerticalIconsThemeClasses";

export const VerticalIcons: React.FC<IVerticalIconsProps> = ({
  icons,
  size = VerticalIconSize.Medium,
}) => {
  const { verticalIconsThemeClasses } = useVerticalIconsThemeClasses({
    size,
  });

  return (
    <LayoutContainer themeClasses={verticalIconsThemeClasses.iconsWrapper}>
      {icons.map(
        (iconName, index: number): JSX.Element => (
          <LayoutContainer
            key={iconName + index}
            themeClasses={verticalIconsThemeClasses.iconContainer}
          >
            <IconStatic
              themeClasses={verticalIconsThemeClasses.icon}
              iconName={iconName}
            />
          </LayoutContainer>
        ),
      )}
    </LayoutContainer>
  );
};
