import React, { memo, useState, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize, radialGradient } from "polished";

import SpacingContainer from "<layout>/SpacingContainer";
import FlexContainer from "<layout>/FlexContainer";
import ButtonIcon, { ButtonIconProps } from "<atoms>/ButtonIcon";
import ButtonText from "<molecules>/ButtonText";
import Corners from "<molecules>/Corners";

import colorPalette from "<styles>/variables/colorPalette";
import transitionTimes from "<styles>/variables/transitionTimes";

export interface ButtonProps extends ButtonIconProps {
  buttonText: string;
  type?: "primary" | "secondary";
}

type ColorPaletteKeys = keyof typeof colorPalette;

interface ButtonContainerProps {
  backgroundColor?: typeof colorPalette[ColorPaletteKeys] | "transparent";
  border?: "1px solid" | "none";
  borderColor?: typeof colorPalette[ColorPaletteKeys];
  height?: "spacing40" | "spacing48" | "spacing56";
  width?: "auto" | "100%";
}

interface ButtonInnnerContainerPositions {
  x: number;
  y: number;
}

function Button({
  buttonText,
  iconName,
  size = "medium",
  type = "primary"
}: ButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const buttonInnerContainerRef = useRef<HTMLDivElement>(null);
  const isElementFocused = useRef<boolean>(false);

  const buttonContainerSizeProps: ButtonContainerProps = mapSizeToButtonContainerProps();
  const buttonContainerTypeProps: ButtonContainerProps = mapTypeToButtonContainerProps();
  const buttonSpacing: string = size === "small" ? "spacing16" : "spacing24";

  return (
    <Button.Container
      {...buttonContainerSizeProps}
      {...buttonContainerTypeProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
    >
      <Corners isActive={isActive} />
      <Button.InnerContainer ref={buttonInnerContainerRef} data-testid="ButtonInnerContainer">
        <SpacingContainer paddingRight={buttonSpacing} paddingLeft={buttonSpacing}>
          <FlexContainer
            flexFlow="row wrap"
          > 
            <ButtonText buttonText={buttonText} size={size} />
            <ButtonIcon iconName={iconName} size={size} />
          </FlexContainer>
        </SpacingContainer>
      </Button.InnerContainer>
    </Button.Container>
  );

  function mapSizeToButtonContainerProps(): ButtonContainerProps {
    switch (size) {
    case "small":
      return {
        height: "spacing40",
        width: "auto"
      };

    case "medium":
      return {
        height: "spacing48",
        width: "auto"
      };

    case "large":
      return {
        height: "spacing56",
        width: "100%"
      };
    }
  }

  function mapTypeToButtonContainerProps(): ButtonContainerProps {
    switch (type) {
    case "primary":
      return {
        backgroundColor: "blue500",
        border: "none"
      };

    case "secondary":
      return {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: "blue500"
      };
    }
  }

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
    width,
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
      spacing: spacingVariables,
      transitionTimes: {
        fast,
        slow
      }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${(backgroundColor in colorPalette && colorPalette[backgroundColor]) || backgroundColor};
    border: ${border};
    border-color: ${borderColor in colorPalette && colorPalette[borderColor]};
    color: ${white};
    cursor: pointer;
    height: ${height in spacingVariables && spacingVariables[height]};
    outline: 0;
    position: relative;
    text-transform: lowercase;
    transition: all ${fast} ${easeInOut};
    width: ${width};

    &:hover {
      box-shadow: inset 0px 0px ${spacingVariables.spacing16} 0px ${transparentize(0.5, blue200)};
    }

    .ripple {
      animation: ${ripple} ${slow};
      ${radialGradient({
    // eslint-disable-next-line indent
        colorStops: [`${transparentize(0.5, blue300)} 0%`, `${transparentize(1, blue200)} 50%`],
    // eslint-disable-next-line indent
        extent: `farthest-corner at ${spacingVariables.spacing12} ${spacingVariables.spacing12}`,
    // eslint-disable-next-line indent
        position: "center",
    // eslint-disable-next-line indent
        shape: "ellipse"
    // eslint-disable-next-line indent
      })}
      border-radius: 50%;
      height: ${spacingVariables.spacing24};
      margin-left: -${spacingVariables.spacing12};
      margin-top: -${spacingVariables.spacing12};
      opacity: 0;
      position: absolute;
      width: ${spacingVariables.spacing24};
    }
  `}
`;

export default memo(Button);