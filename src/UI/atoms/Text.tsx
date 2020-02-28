import React, { memo, useState, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import useShuffleText from "<hooks>/useShuffleText";

import { TextProps } from "<atoms>/__typings__/Text";
import { ShuffleState } from "<hooks>/__typings__/useShuffleText";

function Text({ 
  children, 
  color = "blue300",
  fontSize = "font20",
  fontFamily = "AnonymousPro",
  lineHeight = "1",
  shouldShuffleOnHover = false,
  textAlign = "left",
  textTransform = "none"
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
      color={color}
      data-testid="Text"
      fontFamily={fontFamily}
      fontSize={fontSize} 
      lineHeight={lineHeight}
      onMouseOver={handleMouseOver}
      ref={textElement}
      textAlign={textAlign}
      textTransform={textTransform}
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
    color,
    fontSize,
    fontFamily,
    lineHeight,
    textAlign,
    textTransform,
    theme: {
      colorPalette,
      fontSizes,
      fontFamilies,
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    color: ${color in colorPalette && colorPalette[color]};
    font-family: ${fontFamily in fontFamilies && fontFamilies[fontFamily]};
    font-size: ${fontSize in fontSizes && fontSizes[fontSize]};
    line-height: ${(lineHeight in spacing && spacing[lineHeight]) || lineHeight};
    text-align: ${textAlign};
    text-transform: ${textTransform};
  `}
`;

export default memo(Text);