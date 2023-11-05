import { ImageDynamicVariant } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { ILargeImageDynamicProps } from "@app/components/molecules/LargeImageDynamic/@types/LargeImageDynamic";
import {
  largeIconDefaultThemeClasses,
  largeIconDynamicImageDefaultThemeClasses,
  largeIconWrapperDefaultThemeClasses,
} from "@app/components/molecules/LargeImageDynamic/styles";

export const LargeImageDynamic: React.FC<ILargeImageDynamicProps> = ({
  imageName: iconName,
}) => (
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
