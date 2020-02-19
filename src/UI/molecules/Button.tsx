import React, { memo, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
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

function Button({ buttonText, iconName, size, type = "primary" }: ButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

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
    >
      <Corners isActive={isActive} />
      <SpacingContainer paddingRight={buttonSpacing} paddingLeft={buttonSpacing}>
        <FlexContainer
          flexFlow="row wrap"
        > 
          <ButtonText buttonText={buttonText} size={size} />
          <ButtonIcon iconName={iconName} size={size} />
        </FlexContainer>
      </SpacingContainer>
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
        borderColor: "blue500",
        border: "1px solid"
      };
    }
  }

  function handleMouseEnter() {
    setIsActive(true);
  }

  function handleMouseLeave() {
    setIsActive(false);
  }
}

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
    cursor: pointer;
    background-color: ${(backgroundColor in colorPalette && colorPalette[backgroundColor]) || backgroundColor};
    border: ${border};
    border-color: ${colorPalette[borderColor]};
    color: ${white};
    text-transform: uppercase;
    height: ${height in spacingVariables && spacingVariables[height]};
    width: ${width};
    position: relative;
    box-shadow: ${isActive && `inset 0px 0px 16px 0px ${transparentize(0.5, blue200)}`};
    transition: all ${fast} ${easeInOut};
  `}
`;

export default memo(Button);