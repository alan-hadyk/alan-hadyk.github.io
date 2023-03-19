import {
  HexagonFill,
  IHexagonProps
} from "components/molecules/Hexagon/@types/Hexagon";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { ImageDynamic } from "components/atoms/ImageDynamic/ImageDynamic";
import { IThemeClasses } from "types/theme";
import { useHexagonState } from "components/molecules/Hexagon/hooks/useHexagonState";
import {
  hexagonContentDefaultThemeClasses,
  hexagonDefaultThemeClasses
} from "components/molecules/Hexagon/styles";
import { getHexagonImageProps } from "components/molecules/Hexagon/helpers/getHexagonImageProps";

const Hexagon: React.FC<IHexagonProps> = ({
  children,
  fill = HexagonFill.None,
  themeClasses
}) => {
  const { iconDimensions, iconRef } = useHexagonState({ fill });

  const hexagonContentThemeClasses: IThemeClasses = {
    ...hexagonContentDefaultThemeClasses,
    ...themeClasses?.children
  };

  const hexagonImageProps = getHexagonImageProps({ fill, iconDimensions });

  return (
    <LayoutContainer themeClasses={hexagonDefaultThemeClasses}>
      <ImageDynamic
        {...hexagonImageProps}
        ref={fill === HexagonFill.None ? iconRef : undefined}
      />

      {children && (
        <LayoutContainer themeClasses={hexagonContentThemeClasses}>
          {children}
        </LayoutContainer>
      )}
    </LayoutContainer>
  );
};

export { Hexagon };
