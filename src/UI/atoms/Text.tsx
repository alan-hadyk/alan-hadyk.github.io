import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import fontSizes from "<styles>/variables/fontSizes";

type FontSizesKeys = keyof typeof fontSizes;

export interface TextProps {
  children: JSX.Element;
  fontSize?: typeof fontSizes[FontSizesKeys];
}

function Text({ 
  children, 
  fontSize = "font20"
}: TextProps): JSX.Element {
  return (
    <Text.Container fontSize={fontSize}>
      {children}
    </Text.Container>
  );
}

Text.Container = styled.span<TextProps>`
  ${({
    fontSize,
    theme: {
      fontSizes
    }
  }): FlattenSimpleInterpolation => css`
    font-size: ${fontSizes[fontSize]};
  `}
`;

export default Text;