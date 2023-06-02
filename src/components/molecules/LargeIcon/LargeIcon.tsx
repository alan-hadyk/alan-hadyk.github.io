import { ImageDynamicVariant } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { ILargeIconProps } from "@app/components/molecules/LargeIcon/@types/LargeIcon";
import {
  largeIconDefaultThemeClasses,
  largeIconDynamicImageDefaultThemeClasses,
  largeIconWrapperDefaultThemeClasses,
} from "@app/components/molecules/LargeIcon/styles";

const LargeIcon: React.FC<ILargeIconProps> = ({ iconName }) => (
  <LayoutContainer themeClasses={largeIconDefaultThemeClasses}>
    <LayoutContainer themeClasses={largeIconWrapperDefaultThemeClasses}>
      <ImageDynamic
        themeClasses={largeIconDynamicImageDefaultThemeClasses}
        imageName={iconName}
        variants={[ImageDynamicVariant.Responsive, ImageDynamicVariant.Active]}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { LargeIcon };
