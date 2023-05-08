import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  earthDefaultThemeClasses,
  earthImageContainerDefaultThemeClasses,
  earthImageDefaultThemeClasses,
} from "@app/components/molecules/Earth/styles";

const Earth: React.FC = () => (
  <LayoutContainer themeClasses={earthDefaultThemeClasses}>
    <LayoutContainer themeClasses={earthImageContainerDefaultThemeClasses}>
      <ImageDynamic
        imageName="earth"
        isResponsive
        themeClasses={earthImageDefaultThemeClasses}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { Earth };
