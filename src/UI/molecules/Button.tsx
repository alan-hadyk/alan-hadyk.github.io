import React, { useState, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { radialGradient } from "polished";
import transparentize from "polished/lib/color/transparentize";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";

import SpacingContainer from "UI/layout/SpacingContainer";
import FlexContainer from "UI/layout/FlexContainer";
import Icon from "UI/atoms/Icon";
import ButtonText from "UI/molecules/ButtonText";
import Corners from "UI/molecules/Corners";

import colorPalette from "styles/variables/colorPalette";
import transitionTimes from "styles/variables/transitionTimes";

import spacing from "styles/variables/spacing";

import { Spacing } from "styles/variables/__typings__/variables";

import {
  ButtonContainerProps,
  ButtonInnnerContainerPositions,
  ButtonProps,
  MapSizeToButtonContainerProps,
  MapTypeToButtonContainerProps
} from "UI/molecules/__typings__/Button";

import isIE11 from "helpers/browser/isIE11";

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
    height: "spacing56"
  },
  medium: {
    height: "spacing48"
  },
  small: {
    height: "spacing40"
  }
};

const ButtonInnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({
    height,
    backgroundColor,
    border,
    borderColor,
    theme: {
      colorPalette: { blue200, blue300, white },
      easing: { easeInOut },
      keyframes: { ripple },
      spacing,
      transitionTimes: { fast, slow }
    },
    width
  }): FlattenSimpleInterpolation => css`
    background-color: ${(backgroundColor in colorPalette &&
      colorPalette[backgroundColor]) ||
    backgroundColor};
    border: ${border};
    border-color: ${borderColor in colorPalette && colorPalette[borderColor]};
    color: ${white};
    cursor: pointer;
    height: ${height in spacing && spacing[height]};
    outline: 0;
    position: relative;
    text-transform: lowercase;
    transition: all ${fast} ${easeInOut};
    user-select: none;
    width: ${width};

    &:hover,
    &:active,
    &:focus {
      box-shadow: inset 0px 0px ${spacing.spacing16} 0px
        ${transparentize(0.5, blue200)};
    }

    .ripple {
      animation-duration: ${slow};
      animation-name: ${ripple};
      ${radialGradient({
    // eslint-disable-next-line indent
        colorStops: [
      `${transparentize(0.5, blue300)} 0%`,
      `${transparentize(1, blue200)} 50%`
    ],
    // eslint-disable-next-line indent
        extent: `farthest-corner at ${spacing.spacing12} ${spacing.spacing12}`,
    // eslint-disable-next-line indent
        position: "center",
    // eslint-disable-next-line indent
        shape: "ellipse"
    // eslint-disable-next-line indent
      })} border-radius: 50%;
      height: ${spacing.spacing24};
      margin-left: -${spacing.spacing12};
      margin-top: -${spacing.spacing12};
      opacity: 0;
      position: absolute;
      width: ${spacing.spacing24};
    }
  `};
`;

function Button({
  buttonText,
  dataCy,
  dataTestId,
  iconName,
  iconWidth,
  onClick,
  size = "medium",
  tabIndex,
  type = "primary",
  width = "auto"
}: ButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const buttonInnerContainerRef = useRef<HTMLDivElement>(null);
  const isElementFocused = useRef<boolean>(false);

  const buttonPadding: Spacing = size === "small" ? "spacing16" : "spacing24";

  return (
    <ButtonContainer
      aria-label={dataCy || dataTestId || "Button"}
      data-cy={dataCy || "Button"}
      data-testid={dataTestId || "Button"}
      {...mapSizeToButtonContainerProps[size]}
      {...mapTypeToButtonContainerProps[type]}
      name={dataCy || "Button"}
      onKeyUp={handleKeyUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleButtonClick}
      onTouchMove={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      tabIndex={tabIndex}
      width={width}
    >
      {!isIE11() && <Corners isActive={isActive} />}
      <ButtonInnerContainer
        ref={buttonInnerContainerRef}
        data-testid="ButtonInnerContainer"
      >
        <SpacingContainer
          dataTestId="ButtonSpacingContainer"
          paddingRight={buttonPadding}
          paddingLeft={buttonPadding}
          width="100%"
        >
          <FlexContainer flexFlow="row nowrap">
            <ButtonText
              buttonText={buttonText}
              fontFamily={isIE11() ? "AnonymousPro" : "Exan"}
              hasMargin={!!iconName}
              size={size}
              textTransform={isIE11() ? "uppercase" : "lowercase"}
            />
            {iconName && (
              <Icon
                height={
                  size === "small" ? spacing.spacing12 : spacing.spacing24
                }
                iconName={iconName}
                isHeightResponsive
                width={iconWidth}
              />
            )}
          </FlexContainer>
        </SpacingContainer>
      </ButtonInnerContainer>
    </ButtonContainer>
  );

  function handleKeyUp(event: React.KeyboardEvent<HTMLButtonElement>): void {
    switch (event?.key) {
    case "Enter":
    case "Space":
      onClick && onClick();
      break;
    }
  }

  function handleMouseEnter(): void {
    if (!isElementFocused.current) {
      !isMobile && setIsActive(true);
      isElementFocused.current = true;
    }
  }

  function handleMouseLeave(): void {
    if (isElementFocused.current) {
      !isMobile && setIsActive(false);
      isElementFocused.current = false;
    }
  }

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>): void {
    !isMobile && setIsActive(false);
    event.preventDefault();

    onClick && onClick();

    if (buttonInnerContainerRef.current) {
      const { clientX, clientY }: React.MouseEvent = event;
      const {
        x,
        y
      }: ButtonInnnerContainerPositions = buttonInnerContainerRef.current.getBoundingClientRect();

      const span: HTMLSpanElement = document.createElement("span");
      span.classList.add("ripple");
      span.style.left = `${clientX - x}px`;
      span.style.top = `${clientY - y}px`;

      buttonInnerContainerRef.current.appendChild(span);

      setTimeout(() => {
        if (isElementFocused.current && !isMobile) {
          buttonInnerContainerRef.current && setIsActive(true);
        }
      }, parseInt(transitionTimes.fast));

      setTimeout(() => {
        span && span.remove();
      }, parseInt(transitionTimes.slow));
    }
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  iconName: PropTypes.oneOf([
    "btnCodeSandbox",
    "btnDownload",
    "btnExternalLink"
  ]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  width: PropTypes.oneOf(["100%", "auto"])
};

export default Button;
