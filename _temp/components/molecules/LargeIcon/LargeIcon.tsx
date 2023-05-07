import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { ILargeIconProps } from "components/molecules/LargeIcon/@types/LargeIcon";
import {
  largeIconDefaultThemeClasses,
  largeIconDynamicIconDefaultThemeClasses,
  largeIconWrapperDefaultThemeClasses
} from "components/molecules/LargeIcon/styles";

const LargeIcon: React.FC<ILargeIconProps> = ({ iconName }) => (
  <LayoutContainer themeClasses={largeIconDefaultThemeClasses}>
    <LayoutContainer themeClasses={largeIconWrapperDefaultThemeClasses}>
      <IconDynamic
        themeClasses={largeIconDynamicIconDefaultThemeClasses}
        iconName={iconName}
        isResponsive
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { LargeIcon };
