import { ImageDynamicVariant } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { horizontalImages } from "@app/components/molecules/HorizontalImages/config";
import {
  horizontalImagesDefaultThemeClasses,
  horizontalImagesContainerDefaultThemeClasses,
  horizontalImagesImageWrapperDefaultThemeClasses,
  horizontalImagesImageWrapperDefaultStyles,
  horizontalImagesImageDefaultThemeClasses,
} from "@app/components/molecules/HorizontalImages/styles";

export const HorizontalImages: React.FC = () => (
  <LayoutContainer themeClasses={horizontalImagesDefaultThemeClasses}>
    <LayoutContainer
      themeClasses={horizontalImagesContainerDefaultThemeClasses}
    >
      {horizontalImages.map((imageName) => (
        <LayoutContainer
          key={imageName}
          style={horizontalImagesImageWrapperDefaultStyles}
          themeClasses={horizontalImagesImageWrapperDefaultThemeClasses}
        >
          <ImageDynamic
            themeClasses={horizontalImagesImageDefaultThemeClasses}
            imageName={imageName}
            variants={[ImageDynamicVariant.Responsive]}
          />
        </LayoutContainer>
      ))}
    </LayoutContainer>
  </LayoutContainer>
);
