import { Typography } from "components/atoms/Typography/Typography";
import { Hexagon } from "components/molecules/Hexagon";

import { IHexagonWithDescriptionContentProps } from "components/molecules/@types/HexagonWithDescriptionContent";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const HexagonWithDescriptionContent: React.FC<
  IHexagonWithDescriptionContentProps
> = ({
  children,
  description,
  flexFlow = "flex-row flex-nowrap",
  lineHeight = "leading-36",
  marginBottom = "mb-0",
  marginRight = "mr-0",
  textWidth = "w-100%",
  width = "w-100%"
}) => (
  <LayoutContainer
    themeClasses={{
      alignItems: "items-center",
      display: "flex",
      flexFlow
    }}
  >
    <LayoutContainer
      themeClasses={{
        marginBottom,
        marginRight,
        width
      }}
    >
      <Hexagon>{children}</Hexagon>
    </LayoutContainer>

    <Typography
      themeClasses={{
        color: "text-blue300",
        fontFamily: "font-anonymousPro",
        fontSize: "text-20",
        lineHeight: lineHeight,
        width: textWidth
      }}
    >
      {description}
    </Typography>
  </LayoutContainer>
);

export { HexagonWithDescriptionContent };
