import React, { memo, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

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
    >
      <Corners isActive={isActive} />
      <SpacingContainer paddingRight={buttonSpacing} paddingLeft={buttonSpacing}>
        <FlexContainer
          flexFlow="row nowrap"
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
        width: "100%"
      };
    case "medium":
      return {
        height: "spacing48",
        width: "100%"
      };
    case "large":
      return {
        height: "spacing56",
        width: "auto"
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
    theme: {
      spacing: spacingVariables,
      colorPalette: { white }
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
  `}
`;

export default memo(Button);