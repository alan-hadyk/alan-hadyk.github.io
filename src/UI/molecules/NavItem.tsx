import React, { useRef, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import Line from "UI/atoms/Line";
import PositionContainer from "UI/layout/PositionContainer";

import useShuffleText from "hooks/useShuffleText";

import {
  NavItemProps,
  NavItemLinkProps
} from "UI/molecules/__typings__/NavItem";
import { ShuffleState } from "hooks/__typings__/useShuffleText";

const NavItemLink = styled.a<NavItemLinkProps>`
  ${({
    isActive,
    theme: {
      colorPalette: { blue100, blue300, white },
      easing: { easeInOut },
      fontSizes: { font28 },
      spacing: { spacing8, spacing48 },
      transitionTimes,
      zIndex
    }
  }): FlattenSimpleInterpolation => css`
    color: ${isActive ? white : blue300};
    cursor: pointer;
    display: block;
    font-size: ${font28};
    height: ${spacing48};
    line-height: ${spacing48};
    position: relative;
    text-shadow: ${isActive ? `0px 0px ${spacing8} ${blue100}` : "none"};
    text-transform: uppercase;
    transition: all ${transitionTimes.fast} ${easeInOut};
    z-index: ${zIndex.layer2};

    &:hover,
    &:active,
    &:focus {
      color: ${white};
      text-shadow: 0px 0px ${spacing8} ${blue100};
    }
  `};
`;

function NavItem({ href, isActive = false, title }: NavItemProps): JSX.Element {
  const [shuffleText, setShuffleText] = useState<ShuffleState | undefined>();
  const navItemElementRef = useRef<HTMLAnchorElement>(null);

  useShuffleText({
    onShuffleReady: setShuffleText,
    ref: navItemElementRef,
    shuffleState: shuffleText,
    text: title
  });

  return (
    <PositionContainer dataTestId="NavItem" position="relative">
      <NavItemLink
        data-cy="NavItemLink"
        data-testid="NavItemLink"
        data-isactive={isActive}
        isActive={isActive}
        onMouseUp={handleClick}
        onMouseOver={handleMouseOver}
        ref={navItemElementRef}
      >
        {title}
      </NavItemLink>
      <Line direction="left" isActive={isActive} />
      <Line direction="right" isActive={isActive} />
    </PositionContainer>
  );

  function handleClick(): void {
    const element: HTMLElement = document.querySelector(href);

    element && element.scrollIntoView(true);
  }

  function handleMouseOver(): void {
    if (navItemElementRef.current) {
      shuffleText.start();
    }
  }
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default NavItem;
