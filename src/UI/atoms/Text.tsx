import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import fontSizes from "<styles>/variables/fontSizes";
import fontFamilies from "<styles>/variables/fontFamilies";

type FontSizesKeys = keyof typeof fontSizes;
type FontFamilyKeys = keyof typeof fontFamilies;

export interface TextProps {
  children: JSX.Element | string;
  fontSize?: typeof fontSizes[FontSizesKeys];
  fontFamily: typeof fontFamilies[FontFamilyKeys];
}

function Text({ 
  children, 
  fontSize = "font20",
  fontFamily
}: TextProps): JSX.Element {
  return (
    <Text.Container fontSize={fontSize} fontFamily={fontFamily}>
      {children}
    </Text.Container>
  );
}

Text.Container = styled.span<TextProps>`
  ${({
    fontSize,
    fontFamily,
    theme: {
      fontSizes,
      fontFamilies
    }
  }): FlattenSimpleInterpolation => css`
    font-family: ${fontFamilies[fontFamily]};
    font-size: ${fontSizes[fontSize]};
  `}
`;

export default Text;