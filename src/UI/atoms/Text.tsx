import React, { memo, useState, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import fontSizes from "<styles>/variables/fontSizes";
import fontFamilies from "<styles>/variables/fontFamilies";

import useShuffleText, { ShuffleState } from "<hooks>/useShuffleText";

type FontSizesKeys = keyof typeof fontSizes;
type FontFamilyKeys = keyof typeof fontFamilies;

export interface TextProps {
  children: string;
  fontFamily?: typeof fontFamilies[FontFamilyKeys];
  fontSize?: typeof fontSizes[FontSizesKeys];
  shouldShuffleOnHover?: boolean;
}

function Text({ 
  children, 
  fontSize = "font20",
  fontFamily = fontFamilies.AnonymousPro,
  shouldShuffleOnHover = false
}: TextProps): JSX.Element {
  const [shuffleText, setShuffleText] = useState<ShuffleState | undefined>();
  const textElement = useRef<HTMLDivElement>(null);

  useShuffleText({
    onShuffleReady: setShuffleText,
    ref: textElement,
    shouldInitialize: shouldShuffleOnHover,
    shuffleState: shuffleText,
    text: children
  });

  return (
    <Text.Container 
      fontSize={fontSize} 
      fontFamily={fontFamily}
      onMouseOver={handleMouseOver}
      ref={textElement}
    >
      {children}
    </Text.Container>
  );

  function handleMouseOver(): void {
    if (!textElement.current || !shouldShuffleOnHover) {
      return;
    }

    shuffleText.start();
  }
}

Text.Container = styled.div<TextProps>`
  ${({
    fontSize,
    fontFamily,
    theme: {
      fontSizes,
      fontFamilies
    }
  }): FlattenSimpleInterpolation => css`
    font-family: ${fontFamily in fontFamilies &&  fontFamilies[fontFamily]};
    font-size: ${fontSize in fontSizes &&  fontSizes[fontSize]};
  `}
`;

export default memo(Text);