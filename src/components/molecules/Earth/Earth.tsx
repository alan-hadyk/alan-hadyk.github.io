import {
  ImageDynamicName,
  ImageDynamicVariant,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  earthDefaultThemeClasses,
  earthImageContainerDefaultThemeClasses,
  earthImageDefaultThemeClasses,
} from "@app/components/molecules/Earth/styles";

export const Earth: React.FC = () => (
  <LayoutContainer themeClasses={earthDefaultThemeClasses}>
    <LayoutContainer themeClasses={earthImageContainerDefaultThemeClasses}>
      <ImageDynamic
        imageName={ImageDynamicName.Earth}
        themeClasses={earthImageDefaultThemeClasses}
        variants={[ImageDynamicVariant.Responsive]}
      />
    </LayoutContainer>
  </LayoutContainer>
);
