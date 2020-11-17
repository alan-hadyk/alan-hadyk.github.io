import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import transparentize from "polished/lib/color/transparentize";

import {
  MenuButtonLineProps,
  MenuButtonProps
} from "UI/atoms/__typings__/MenuButton";

const MenuButtonContainer = styled.button`
  ${({
    theme: {
      colorPalette: { white },
      easing: { easeInOut },
      spacing: { spacing2, spacing30, spacing48 },
      transitionTimes: { fast },
      zIndex: { layer11 }
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
  `};
`;

const MenuButtonLine = styled.span<MenuButtonLineProps>`
  ${({
    isOpen,
    theme: {
      colorPalette: { white },
      easing: { easeInOut },
      spacing: { spacing0, spacing2, spacing14, spacing28 },
      transitionTimes: { fast }
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

    &:nth-child(2),
    &:nth-child(3) {
      top: ${spacing14};
    }

    &:nth-child(4) {
      top: ${spacing28};
    }

    ${isOpen &&
    `
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
    `};
  `};
`;

const MenuButton = ({
  isOpen = false,
  onClick
}: MenuButtonProps): JSX.Element => (
  <MenuButtonContainer
    aria-label="MenuButton"
    data-cy="MenuButton"
    data-testid="MenuButtonContainer"
    onClick={onClick}
  >
    <MenuButtonLine data-testid="MenuButtonLine" isOpen={isOpen} />
    <MenuButtonLine data-testid="MenuButtonLine" isOpen={isOpen} />
    <MenuButtonLine data-testid="MenuButtonLine" isOpen={isOpen} />
    <MenuButtonLine data-testid="MenuButtonLine" isOpen={isOpen} />
  </MenuButtonContainer>
);

MenuButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default MenuButton;
