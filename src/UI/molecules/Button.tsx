import React, { useState, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize, radialGradient } from "polished";

import SpacingContainer from "<layout>/SpacingContainer";
import FlexContainer from "<layout>/FlexContainer";
import Icon from "<atoms>/Icon";
import ButtonText from "<molecules>/ButtonText";
import Corners from "<molecules>/Corners";

import colorPalette from "<styles>/variables/colorPalette";
import transitionTimes from "<styles>/variables/transitionTimes";

import {
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

import {
  ButtonContainerProps,
  ButtonInnnerContainerPositions,
  ButtonProps,
  MapSizeToButtonContainerProps,
  MapSizeToIconHeight,
  MapTypeToButtonContainerProps
} from "<molecules>/__typings__/Button.d.ts";

const mapTypeToButtonContainerProps: MapTypeToButtonContainerProps = {
  primary: {
    backgroundColor: "blue500",
    border: "none"
  },
  secondary: {
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "blue500"
  }
};

const mapSizeToButtonContainerProps: MapSizeToButtonContainerProps = {
  large: {
    height: "spacing56",
    width: "100%"
  },
  medium: {
    height: "spacing48",
    width: "auto"
  },
  small: {
    height: "spacing40",
    width: "auto"
  }
};

const mapSizeToIconHeight: MapSizeToIconHeight = {
  large: "spacing24",
  medium: "spacing24",
  small: "spacing12"
};

function Button({
  buttonText,
  iconName,
  size = "medium",
  type = "primary"
}: ButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const buttonInnerContainerRef = useRef<HTMLDivElement>(null);
  const isElementFocused = useRef<boolean>(false);

  const buttonPadding: Spacing = size === "small" ? "spacing16" : "spacing24";

  return (
    <Button.Container
      {...mapSizeToButtonContainerProps[size]}
      {...mapTypeToButtonContainerProps[type]}
      data-testid="Button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleButtonClick}
    >
      <Corners isActive={isActive} />
      <Button.InnerContainer ref={buttonInnerContainerRef} data-testid="ButtonInnerContainer">
        <SpacingContainer paddingRight={buttonPadding} paddingLeft={buttonPadding} width="100%">
          <FlexContainer
            flexFlow="row wrap"
          >
            <ButtonText buttonText={buttonText} size={size} />
            <Icon
              iconName={iconName}
              height={mapSizeToIconHeight[size]}
            />
          </FlexContainer>
        </SpacingContainer>
      </Button.InnerContainer>
    </Button.Container>
  );

  function handleMouseEnter(): void {
    setIsActive(true);
    isElementFocused.current = true;
  }

  function handleMouseLeave(): void {
    setIsActive(false);
    isElementFocused.current = false;
  }

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>): void {
    setIsActive(false);
    event.preventDefault();

    if (buttonInnerContainerRef.current) {
      const { clientX, clientY }: React.MouseEvent = event;
      const { x, y }: ButtonInnnerContainerPositions = buttonInnerContainerRef.current.getBoundingClientRect();

      const span: HTMLSpanElement = document.createElement("span");
      span.classList.add("ripple");
      span.style.left = `${clientX - x}px`;
      span.style.top = `${clientY - y}px`;

      buttonInnerContainerRef.current.appendChild(span);

      setTimeout(() => {
        if (isElementFocused.current) {
          buttonInnerContainerRef.current && setIsActive(true);
        }
      }, parseInt(transitionTimes.fast));

      setTimeout(() => {
        span && span.remove();
      }, parseInt(transitionTimes.slow));
    }
  }
}

Button.InnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

Button.Container = styled.button<ButtonContainerProps>`
  ${({
    height,
    backgroundColor,
    border,
    borderColor,
    theme: {
      colorPalette: {
        blue200,
        blue300,
        white
      },
      easing: {
        easeInOut
      },
      keyframes: {
        ripple
      },
      spacing,
      transitionTimes: {
        fast,
        slow
      }
    },
    width
  }): FlattenSimpleInterpolation => css`
    background-color: ${(backgroundColor in colorPalette && colorPalette[backgroundColor]) || backgroundColor};
    border: ${border};
    border-color: ${borderColor in colorPalette && colorPalette[borderColor]};
    color: ${white};
    cursor: pointer;
    height: ${height in spacing && spacing[height]};
    outline: 0;
    position: relative;
    text-transform: lowercase;
    transition: all ${fast} ${easeInOut};
    width: ${width};

    &:hover {
      box-shadow: inset 0px 0px ${spacing.spacing16} 0px ${transparentize(0.5, blue200)};
    }

    .ripple {
      animation-duration: ${slow};
      animation-name: ${ripple};
      ${radialGradient({
    // eslint-disable-next-line indent
        colorStops: [`${transparentize(0.5, blue300)} 0%`, `${transparentize(1, blue200)} 50%`],
    // eslint-disable-next-line indent
        extent: `farthest-corner at ${spacing.spacing12} ${spacing.spacing12}`,
    // eslint-disable-next-line indent
        position: "center",
    // eslint-disable-next-line indent
        shape: "ellipse"
    // eslint-disable-next-line indent
      })}
      border-radius: 50%;
      height: ${spacing.spacing24};
      margin-left: -${spacing.spacing12};
      margin-top: -${spacing.spacing12};
      opacity: 0;
      position: absolute;
      width: ${spacing.spacing24};
    }
  `}
`;

export default Button;