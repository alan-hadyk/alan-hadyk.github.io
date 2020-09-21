import React from "react";

import Hexagon from "<molecules>/Hexagon";

import FlexItem from "<layout>/FlexItem";

import {
  HexagonWithDescriptionImageProps
} from "<molecules>/HexagonWithDescription/__typings__/HexagonWithDescriptionImage.d.ts";

const HexagonWithDescriptionImage = ({
  children
}: HexagonWithDescriptionImageProps): JSX.Element => (
  <FlexItem
    flex="0 1 50%"
  >
    <Hexagon contentWidth="75%">
      {children}
    </Hexagon>
  </FlexItem>
);

export default HexagonWithDescriptionImage;
