import React, { memo, useRef, useEffect } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Text from "<atoms>/Text";
import PositionContainer from "<layout>/PositionContainer";

import {
  MousePosition
} from "<molecules>/__typings__/MouseCoords";

function MouseCoords(): JSX.Element {
  const mousePosRef = useRef<MousePosition>({
    clientX: 0,
    clientY: 0
  });
  const verticalPosTextRef = useRef<HTMLDivElement>(null);
  const horizontalPosTextRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const verticalLineRef = useRef<HTMLDivElement>(null);
  const horizontalLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.requestAnimationFrame(animateElements);

    return (): void => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <PositionContainer
      position="relative"
    >
      <MouseCoords.Container>
        <PositionContainer
          position="absolute"
          ref={verticalPosTextRef}
          top="spacing0"
          transform="translateX(-50%) translateY(-100%)"
        >
          <Text
            fontSize="font8"
            paddingBottom="spacing2"
          >
            0
          </Text>
        </PositionContainer>

        <PositionContainer
          left="spacing0"
          position="absolute"
          ref={horizontalPosTextRef}
          transform="translateX(-100%) translateY(-50%)"
        >
          <Text
            fontSize="font8"
            paddingRight="spacing4"
            textAlign="right"
          >
            0
          </Text>
        </PositionContainer>

        <MouseCoords.Dot
          ref={dotRef}
        />
        <MouseCoords.VerticalLine
          ref={verticalLineRef}
        />
        <MouseCoords.HorizontalLine
          ref={horizontalLineRef}
        />
      </MouseCoords.Container>
    </PositionContainer>
  );

  function onMouseMove({ clientX, clientY }: MouseEvent): void {
    mousePosRef.current = { clientX, clientY };
  }

  function animateElements(): void {
    const { clientX, clientY }: MousePosition = mousePosRef.current;
    const left = `${(clientX / window.innerWidth) * 100}%`;
    const top = `${(clientY / window.innerHeight) * 100}%`;

    if (verticalPosTextRef && verticalPosTextRef.current) {
      verticalPosTextRef.current.style.left = left;
      verticalPosTextRef.current.querySelector("div").textContent = String(clientX);
    }

    if (horizontalPosTextRef && horizontalPosTextRef.current) {
      horizontalPosTextRef.current.style.top = top;
      horizontalPosTextRef.current.querySelector("div").textContent = String(clientY);
    }

    if (dotRef && dotRef.current) {
      dotRef.current.style.left = left;
      dotRef.current.style.top = top;
    }

    if (verticalLineRef && verticalLineRef.current) {
      verticalLineRef.current.style.left = left;
    }

    if (horizontalLineRef && horizontalLineRef.current) {
      horizontalLineRef.current.style.top = top;
    }

    window.requestAnimationFrame(animateElements);
  }
}

MouseCoords.Container = styled.div`
  ${({
    theme: {
      colorPalette: {
        blue400
      },
      spacing: {
        spacing184
      }
    }
  }): FlattenSimpleInterpolation => css`
    border: thin solid ${blue400};
    height: ${spacing184};
    width: 100%;
  `}
`;

MouseCoords.Dot = styled.div`
  ${({
    theme: {
      colorPalette: {
        blue100,
        blue300
      },
      spacing: {
        spacing4,
        spacing8
      }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${blue300};
    border-radius: 50%;
    box-shadow: 0px 0px ${spacing8} 0px ${blue100};
    height: ${spacing4};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-37.5%) translateY(-37.5%);
    width: ${spacing4};
  `}
`;

MouseCoords.VerticalLine = styled.div`
  ${({
    theme: {
      colorPalette: {
        blue300
      },
      keyframes: {
        borderDanceVertical
      },
      spacing: {
        spacing12
      },
      transitionTimes: {
        slow
      }
    }
  }): FlattenSimpleInterpolation => css`
    animation: ${borderDanceVertical} ${slow} infinite linear;
    background-image: linear-gradient(0deg, ${blue300} 50%, transparent 50%);
    background-repeat: repeat-y;
    background-size: 1px ${spacing12};
    bottom: 1px;
    left: 50%;
    position: absolute;
    top: 1px;
    width: 2px;
  `}
`;

MouseCoords.HorizontalLine = styled.div`
  ${({
    theme: {
      colorPalette: {
        blue300
      },
      keyframes: {
        borderDanceHorizontal
      },
      spacing: {
        spacing12
      },
      transitionTimes: {
        slow
      }
    }
  }): FlattenSimpleInterpolation => css`
    animation: ${borderDanceHorizontal} ${slow} infinite linear;
    background-image: linear-gradient(90deg, ${blue300} 50%, transparent 50%);
    background-repeat: repeat-x;
    background-size: ${spacing12} 1px;
    height: 1px;
    left: 1px;
    position: absolute;
    right: 1px;
    top: 50%;
  `}
`;

export default memo(MouseCoords);