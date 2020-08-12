import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { transparentize } from "polished";

import {
  MenuButtonLineProps,
  MenuButtonProps
} from "<atoms>/__typings__/MenuButton.d.ts";

const MenuButton = ({
  isOpen = false,
  onClick
}: MenuButtonProps): JSX.Element => (
  <MenuButton.Container
    data-testid="MenuButtonContainer"
    onClick={onClick}
  >
    <MenuButton.Line data-testid="MenuButtonLine" isOpen={isOpen} />
    <MenuButton.Line data-testid="MenuButtonLine" isOpen={isOpen} />
    <MenuButton.Line data-testid="MenuButtonLine" isOpen={isOpen} />
    <MenuButton.Line data-testid="MenuButtonLine" isOpen={isOpen} />
  </MenuButton.Container>
);

MenuButton.Container = styled.button`
  ${({
    theme: {
      colorPalette: {
        white
      },
      easing: {
        easeInOut
      },
      spacing: {
        spacing2,
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
    transition: all ${fast} ${easeInOut};
    width: ${spacing48};
    z-index: ${layer11};

    &:hover {
      filter: drop-shadow(0px 0px ${spacing2} ${transparentize(0.1, white)});
    }
  `}
`;

MenuButton.Line = styled.span<MenuButtonLineProps>`
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
      },
      transitionTimes: {
        fast
      }
    }
  }): FlattenSimpleInterpolation => css`
    background: ${white};
    height: ${spacing2};
    left: ${spacing0};
    position: absolute;
    transition: all ${fast} ${easeInOut};
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
        width: 0;
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
        width: 0;
      }
    `}
  `}
`;

export default MenuButton;