import PropTypes from "prop-types";

import { Text } from "components/atoms/Text";
import { Hexagon } from "components/molecules/Hexagon";

import { IHexagonWithDescriptionContentProps } from "components/molecules/@types/HexagonWithDescriptionContent";
import { spacingPropType } from "helpers/propTypes/spacing";
import { LayoutContainer } from "components/layout/LayoutContainer";

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
  <LayoutContainer alignItems="items-center" display="flex" flexFlow={flexFlow}>
    <LayoutContainer
      marginBottom={marginBottom}
      marginRight={marginRight}
      width={width}
    >
      <Hexagon>{children}</Hexagon>
    </LayoutContainer>

    <Text
      color="text-blue300"
      fontFamily="font-anonymousPro"
      fontSize="text-20"
      lineHeight={lineHeight}
      width={textWidth}
    >
      {description}
    </Text>
  </LayoutContainer>
);

HexagonWithDescriptionContent.propTypes = {
  children: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  flexFlow: PropTypes.oneOf([
    "flex-row flex-wrap",
    "flex-row-reverse flex-wrap",
    "flex-col flex-wrap",
    "flex-col-reverse flex-wrap",
    "flex-row flex-wrap-reverse",
    "flex-row-reverse flex-wrap-reverse",
    "flex-col flex-wrap-reverse",
    "flex-col-reverse flex-wrap-reverse",
    "flex-row flex-nowrap",
    "flex-row-reverse flex-nowrap",
    "flex-col flex-nowrap",
    "flex-col-reverse flex-nowrap"
  ]),
  lineHeight: spacingPropType("leading"),
  marginBottom: spacingPropType("mb"),
  marginRight: spacingPropType("mr"),
  textWidth: spacingPropType("w"),
  width: spacingPropType("w")
};

export { HexagonWithDescriptionContent };
