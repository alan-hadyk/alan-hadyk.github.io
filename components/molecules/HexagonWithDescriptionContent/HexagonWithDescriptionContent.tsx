import { Typography } from "components/atoms/Typography/Typography";
import { Hexagon } from "components/molecules/Hexagon/Hexagon";

import { IHexagonWithDescriptionContentProps } from "components/molecules/HexagonWithDescriptionContent/@types/HexagonWithDescriptionContent";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IThemeClasses } from "types/theme";
import {
  hexagonWithDescriptionContentDefaultThemeClasses,
  hexagonWithDescriptionContentDescriptionDefaultThemeClasses,
  hexagonWithDescriptionContentHexagonContainerDefaultThemeClasses
} from "components/molecules/HexagonWithDescriptionContent/styles";

const HexagonWithDescriptionContent: React.FC<
  IHexagonWithDescriptionContentProps
> = ({ children, description, themeClasses }) => {
  const hexagonWithDescriptionContentThemeClasses: IThemeClasses = {
    ...hexagonWithDescriptionContentDefaultThemeClasses,
    ...themeClasses?.wrapper
  };

  const hexagonWithDescriptionContentHexagonContainerThemeClasses: IThemeClasses =
    {
      ...hexagonWithDescriptionContentHexagonContainerDefaultThemeClasses,
      ...themeClasses?.hexagonContainer
    };

  const hexagonWithDescriptionContentDescriptionThemeClasses: IThemeClasses = {
    ...hexagonWithDescriptionContentDescriptionDefaultThemeClasses,
    ...themeClasses?.description
  };

  return (
    <LayoutContainer themeClasses={hexagonWithDescriptionContentThemeClasses}>
      <LayoutContainer
        themeClasses={hexagonWithDescriptionContentHexagonContainerThemeClasses}
      >
        <Hexagon>{children}</Hexagon>
      </LayoutContainer>

      <Typography
        themeClasses={hexagonWithDescriptionContentDescriptionThemeClasses}
      >
        {description}
      </Typography>
    </LayoutContainer>
  );
};

export { HexagonWithDescriptionContent };
