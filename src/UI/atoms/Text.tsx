import React, { forwardRef, useState, useRef, Ref } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import useShuffleText from "hooks/useShuffleText";
import useInterval from "hooks/useInterval";

import transitionTimes from "styles/variables/transitionTimes";

import { TextProps } from "UI/atoms/__typings__/Text";
import { ShuffleState } from "hooks/__typings__/useShuffleText";

function Text(
  {
    children,
    color = "blue300",
    dataCy,
    dataTestId,
    ellipsis = false,
    fontFamily = "AnonymousPro",
    fontSize = "font20",
    fontWeight = "normal",
    isHoverable = false,
    lineHeight = "1",
    maxHeight,
    overflow = "visible",
    paddingBottom = "spacing0",
    paddingLeft = "spacing0",
    paddingRight = "spacing0",
    paddingTop = "spacing0",
    shouldShuffle = false,
    shouldShuffleOnHover = false,
    shuffleDelay = 0,
    shuffleInterval = parseInt(transitionTimes.verySlow),
    textAlign = "left",
    textTransform = "none"
  }: TextProps,
  ref?: Ref<HTMLDivElement>
): JSX.Element {
  const [shuffleText, setShuffleText] = useState<ShuffleState | undefined>();
  const textElementRef = useRef<HTMLDivElement>(null);

  useShuffleText({
    onShuffleReady: setShuffleText,
    ref: textElementRef,
    shouldInitialize: shouldShuffleOnHover || shouldShuffle,
    shuffleDelay,
    shuffleState: shuffleText,
    text: children
  });

  useInterval(() => {
    if (!textElementRef.current || !shouldShuffle) {
      return;
    }
    shuffleText && shuffleText.start();
  }, shuffleInterval);

  return (
    <Text.Container
      color={color}
      data-cy={dataCy}
      data-testid={dataTestId || "Text"}
      ellipsis={ellipsis}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      isHoverable={isHoverable}
      lineHeight={lineHeight}
      maxHeight={maxHeight}
      onMouseOver={handleMouseOver}
      overflow={overflow}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      ref={ref || textElementRef}
      textAlign={textAlign}
      textTransform={textTransform}
    >
      {children}
    </Text.Container>
  );

  function handleMouseOver(): void {
    if (!textElementRef.current || !shouldShuffleOnHover) {
      return;
    }

    shuffleText && shuffleText.start();
  }
}

Text.Container = styled.div<TextProps>`
  ${({
    color,
    ellipsis,
    fontFamily,
    fontSize,
    fontWeight,
    isHoverable,
    lineHeight,
    maxHeight,
    overflow,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    textAlign,
    textTransform,
    theme: {
      colorPalette,
      easing: { easeInOut },
      fontFamilies,
      fontSizes,
      fontWeights,
      spacing,
      transitionTimes: { fast }
    }
  }): FlattenSimpleInterpolation => css`
    color: ${color in colorPalette && colorPalette[color]};
    font-family: ${fontFamily in fontFamilies && fontFamilies[fontFamily]};
    font-size: ${fontSize in fontSizes && fontSizes[fontSize]};
    font-weight: ${fontWeight in fontWeights && fontWeights[fontWeight]};
    line-height: ${(lineHeight in spacing && spacing[lineHeight]) ||
    lineHeight};
    max-height: ${(maxHeight in spacing && spacing[maxHeight]) || maxHeight};
    overflow: ${overflow};
    padding-bottom: ${paddingBottom in spacing && spacing[paddingBottom]};
    padding-left: ${paddingLeft in spacing && spacing[paddingLeft]};
    padding-right: ${paddingRight in spacing && spacing[paddingRight]};
    padding-top: ${paddingTop in spacing && spacing[paddingTop]};
    text-align: ${textAlign};
    text-transform: ${textTransform};
    transition: all ${fast} ${easeInOut};

    ${ellipsis &&
    `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `}

    ${color === "blue300" &&
    `
      strong {
        color: ${colorPalette.blue100};
      }
    `}

    ${isHoverable &&
    `
      &:hover {
        color: ${colorPalette.white};
      }
    `}
  `};
`;

export default forwardRef(Text);
