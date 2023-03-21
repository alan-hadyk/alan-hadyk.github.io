import { IImageDynamicProps } from "components/atoms/ImageDynamic/@types/ImageDynamic";
import {
  HexagonFill,
  TGetHexagonImagePropsArgs
} from "components/molecules/Hexagon/@types/Hexagon";
import { hexagonSolidImageDefaultThemeClasses } from "components/molecules/Hexagon/styles";

const getHexagonImageProps = ({
  fill,
  iconDimensions
}: TGetHexagonImagePropsArgs): IImageDynamicProps => {
  switch (fill) {
    case HexagonFill.Pattern:
      return {
        imageName: "hexagonWithPattern"
      };

    case HexagonFill.Solid:
      return {
        imageName: "hexagon",
        isActive: true,
        shouldGlow: true,
        themeClasses: hexagonSolidImageDefaultThemeClasses
      };

    default:
    case HexagonFill.None:
      return {
        imageName: "hexagon",
        shouldGlow: true,
        style: {
          height: iconDimensions.height,
          width: iconDimensions.width
        }
      };
  }
};

export { getHexagonImageProps };
