import { IconStatic } from "@app/components/atoms/IconStatic/IconStatic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IVerticalIconsProps } from "@app/components/molecules/VerticalIcons/@types/VerticalIcons";
import { verticalIconsDefaultThemeClasses } from "@app/components/molecules/VerticalIcons/styles";

export const VerticalIcons: React.FC<IVerticalIconsProps> = ({ icons }) => (
  <LayoutContainer themeClasses={verticalIconsDefaultThemeClasses.iconsWrapper}>
    {icons.map((iconName) => (
      <LayoutContainer
        key={iconName}
        themeClasses={verticalIconsDefaultThemeClasses.iconContainer}
      >
        <IconStatic
          themeClasses={verticalIconsDefaultThemeClasses.icon}
          iconName={iconName}
        />
      </LayoutContainer>
    ))}
  </LayoutContainer>
);
