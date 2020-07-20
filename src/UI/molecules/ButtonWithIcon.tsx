import React, { useRef, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ButtonWithIconLineProps,
  ButtonWithIconProps
} from "<molecules>/__typings__/ButtonWithIcon.d.ts";

const ButtonWithIcon = ({
  onClick
}: ButtonWithIconProps): JSX.Element => {
  const buttonWithIconContainerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ButtonWithIcon.Container
      onClick={handleButtonClick}
      ref={buttonWithIconContainerRef}
    >
      <ButtonWithIcon.Line isOpen={isOpen} />
      <ButtonWithIcon.Line isOpen={isOpen} />
      <ButtonWithIcon.Line isOpen={isOpen} />
      <ButtonWithIcon.Line isOpen={isOpen} />
    </ButtonWithIcon.Container>
  );

  function handleButtonClick(): void {
    onClick && onClick();

    setIsOpen(_isOpen => !_isOpen);
  }
};

ButtonWithIcon.Container = styled.button`
  ${({
    theme: {
      easing: {
        easeInOut
      },
      spacing: {
        spacing30,
        spacing48
      },
      transitionTimes: {
        fast
      },
      zIndex: {
        layer11
      }
    }
  }): FlattenSimpleInterpolation => css`
    background: none;
    cursor: pointer;
    height: ${spacing30};
    position: relative;
    transform: rotate(0deg);
    transition: ${fast} ${easeInOut};
    width: ${spacing48};
    z-index: ${layer11};
  `}
`;

ButtonWithIcon.Line = styled.span<ButtonWithIconLineProps>`
  ${({
    isOpen,
    theme: {
      colorPalette: {
        white
      },
      easing: {
        easeInOut
      },
      spacing: {
        spacing0,
        spacing2,
        spacing14,
        spacing28
      }
    }
  }): FlattenSimpleInterpolation => css`
    background: ${white};
    height: ${spacing2};
    left: ${spacing0};
    position: absolute;
    transition: .25s ${easeInOut};
    width: 100%;

    &:nth-child(1) {
      top: ${spacing0};
    }

    &:nth-child(2), &:nth-child(3) {
      top: ${spacing14};
    }

    &:nth-child(4) {
      top: ${spacing28};
    }

    ${isOpen && `
      &:nth-child(1) {
        left: 50%;
        top: ${spacing14};
        width: 0%;
      }

      &:nth-child(2) {
        transform: rotate(40deg);
      }

      &:nth-child(3) {
        transform: rotate(-40deg);
      }

      &:nth-child(4) {
        left: 50%;
        top: ${spacing14};
        width: 0%;
      }
    `}
  `}
`;

export default ButtonWithIcon;