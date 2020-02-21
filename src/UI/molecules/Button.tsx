import React, { memo, useState, useRef } from "react";
import styled, { keyframes, css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import SpacingContainer from "<layout>/SpacingContainer";
import FlexContainer from "<layout>/FlexContainer";
import ButtonIcon, { ButtonIconProps } from "<atoms>/ButtonIcon";
import ButtonText from "<molecules>/ButtonText";
import Corners from "<molecules>/Corners";

import spacing from "<styles>/variables/spacing";
import colorPalette from "<styles>/variables/colorPalette";

export interface ButtonProps extends ButtonIconProps {
  buttonText: string;
  type?: "primary" | "secondary";
}

type SpacingKeys = keyof typeof spacing;
type ColorPaletteKeys = keyof typeof colorPalette;

interface ButtonContainerProps {
  backgroundColor?: typeof colorPalette[ColorPaletteKeys] | "transparent";
  border?: string;
  borderColor?: typeof colorPalette[ColorPaletteKeys];
  height?: typeof spacing[SpacingKeys];
  width?: "auto" | "100%";
  isActive?: boolean;
}

function Button({
  buttonText,
  iconName,
  size,
  type = "primary"
}: ButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const buttonInnerContainerRef = useRef(null);

  const buttonContainerSizeProps: ButtonContainerProps = mapSizeToButtonContainerProps();
  const buttonContainerTypeProps: ButtonContainerProps = mapTypeToButtonContainerProps();
  const buttonSpacing: string = size === "small" ? "spacing16" : "spacing24";
  
  return (
    <Button.Container
      {...buttonContainerSizeProps}
      {...buttonContainerTypeProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isActive={isActive}
      onClick={handleButtonClick}
    >
      <Corners isActive={isActive} />
      <Button.InnerContainer ref={buttonInnerContainerRef}>
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
  }

  function handleMouseLeave(): void {
    setIsActive(false);
  }

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    if (buttonInnerContainerRef.current) {
      const { clientX, clientY }: React.MouseEvent = event;
      const { x, y } = buttonInnerContainerRef.current.getBoundingClientRect();

      const span = document.createElement("span");
      span.classList.add("ripple");
      span.style.left = `${clientX - x}px`;
      span.style.top = `${clientY - y}px`;

      buttonInnerContainerRef.current.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, 1000);
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

const ripple = keyframes`
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(10);
  }
`;

Button.Container = styled.button<ButtonContainerProps>`
  ${({
    height,
    width,
    backgroundColor,
    border,
    borderColor,
    isActive,
    theme: {
      spacing: spacingVariables,
      colorPalette: { white, blue200 },
      transitionTimes: { fast },
      easing: { easeInOut }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${(backgroundColor in colorPalette && colorPalette[backgroundColor]) || backgroundColor};
    border: ${border};
    border-color: ${colorPalette[borderColor]};
    box-shadow: ${isActive && `inset 0px 0px 16px 0px ${transparentize(0.5, blue200)}`};
    color: ${white};
    cursor: pointer;
    height: ${height in spacingVariables && spacingVariables[height]};
    outline: 0;
    position: relative;
    text-transform: lowercase;
    transition: all ${fast} ${easeInOut};
    width: ${width};

    .ripple {
      animation: ${ripple} 1s;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      height: 100px;
      margin-left: -50px;
      margin-top: -50px;
      opacity: 0;
      position: absolute;
      width: 100px;
    }
  `}
`;

export default memo(Button);