import React from "react";

import Text from "<atoms>/Text";

import FlexItem from "<layout>/FlexItem";

import {
  HexagonWithDescriptionContentProps
} from "<molecules>/HexagonWithDescription/__typings__/HexagonWithDescriptionContent.d.ts";

const HexagonWithDescriptionContent = ({
  description
}: HexagonWithDescriptionContentProps): JSX.Element => (
  <FlexItem
    flex="0 1 50%"
  >
    <Text
      color="blue300"
      fontFamily="AnonymousPro"
      fontSize="font20"
      lineHeight="spacing36"
    >
      {description}
    </Text>
  </FlexItem>
);

export default HexagonWithDescriptionContent;
