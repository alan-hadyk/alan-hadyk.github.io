import { Typography } from "components/atoms/Typography/Typography";
import { Hexagon } from "components/molecules/Hexagon/Hexagon";

import { IHexagonWithDescriptionContentProps } from "components/molecules/HexagonWithDescriptionContent/@types/HexagonWithDescriptionContent";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { useHexagonWithDescriptionContentThemeClasses } from "components/molecules/HexagonWithDescriptionContent/hooks/useHexagonWithDescriptionContentThemeClasses";

const HexagonWithDescriptionContent: React.FC<
  IHexagonWithDescriptionContentProps
> = ({ children, description, themeClasses }) => {
  const {
    hexagonWithDescriptionContentDescriptionThemeClasses,
    hexagonWithDescriptionContentHexagonContainerThemeClasses,
    hexagonWithDescriptionContentThemeClasses
  } = useHexagonWithDescriptionContentThemeClasses({ themeClasses });

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
