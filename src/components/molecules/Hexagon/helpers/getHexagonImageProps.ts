import {
  IImageDynamicProps,
  ImageDynamicName,
  ImageDynamicVariant,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import {
  HexagonFill,
  TGetHexagonImagePropsArgs,
} from "@app/components/molecules/Hexagon/@types/Hexagon";
import { hexagonSolidImageDefaultThemeClasses } from "@app/components/molecules/Hexagon/styles";

const getHexagonImageProps = ({
  fill,
  hexagonBorderDimensions,
}: TGetHexagonImagePropsArgs): IImageDynamicProps => {
  switch (fill) {
    case HexagonFill.Pattern:
      return {
        imageName: ImageDynamicName.HexagonWithPattern,
      };

    case HexagonFill.Solid:
      return {
        imageName: ImageDynamicName.Hexagon,
        themeClasses: hexagonSolidImageDefaultThemeClasses,
        variants: [ImageDynamicVariant.Active, ImageDynamicVariant.Glow],
      };

    default:
    case HexagonFill.None:
      return {
        imageName: ImageDynamicName.Hexagon,
        style: {
          height: hexagonBorderDimensions.height,
          width: hexagonBorderDimensions.width,
        },
        variants: [ImageDynamicVariant.Glow],
      };
  }
};

export { getHexagonImageProps };
