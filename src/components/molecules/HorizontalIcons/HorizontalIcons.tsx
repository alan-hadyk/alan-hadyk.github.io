import {
  IImageDynamicProps,
  ImageDynamicVariant,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { horizontalIcons } from "@app/components/molecules/HorizontalIcons/config";
import {
  horizontalIconsDefaultThemeClasses,
  horizontalIconsContainerDefaultThemeClasses,
  horizontalIconsIconWrapperDefaultThemeClasses,
  horizontalIconsIconWrapperDefaultStyles,
  horizontalIconsIconDefaultThemeClasses,
} from "@app/components/molecules/HorizontalIcons/styles";

const HorizontalIcons: React.FC = () => (
  <LayoutContainer themeClasses={horizontalIconsDefaultThemeClasses}>
    <LayoutContainer themeClasses={horizontalIconsContainerDefaultThemeClasses}>
      {horizontalIcons.map(
        (icon: IImageDynamicProps["imageName"]): JSX.Element => (
          <LayoutContainer
            key={icon}
            style={horizontalIconsIconWrapperDefaultStyles}
            themeClasses={horizontalIconsIconWrapperDefaultThemeClasses}
          >
            <ImageDynamic
              themeClasses={horizontalIconsIconDefaultThemeClasses}
              imageName={icon}
              variants={[ImageDynamicVariant.Responsive]}
            />
          </LayoutContainer>
        ),
      )}
    </LayoutContainer>
  </LayoutContainer>
);

export { HorizontalIcons };
