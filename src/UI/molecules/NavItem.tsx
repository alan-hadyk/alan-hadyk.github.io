import React, { useRef, useLayoutEffect, useState, memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import ShuffleText from "shuffle-text";

import PositionContainer from "<layout>/PositionContainer";

export interface NavItemProps {
  href: string;
  isActive?: boolean;
  title: string;
}

function NavItem({
  href,
  isActive = false,
  title
}: NavItemProps): JSX.Element {
  const [shuffleText, setShuffleText] = useState();
  const navItemElement = useRef(null);

  useLayoutEffect(() => {
    if (!navItemElement.current || shuffleText) {
      return;
    }

    const text = new ShuffleText(navItemElement.current);
    text.setText(title);

    setShuffleText({
      start: () => text.start()
    });
  }, [navItemElement, title, shuffleText]);

  return (
    <PositionContainer position="relative">
      <NavItem.Link
        isActive={isActive}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        ref={navItemElement}
      >
        {title}
      </NavItem.Link>
      <NavItem.Line 
        direction="left" 
        isActive={isActive}
      />
      <NavItem.Line 
        direction="right" 
        isActive={isActive}
      />
    </PositionContainer>
  );

  function handleClick(): void {
    const element: HTMLElement = document.querySelector(href);

    element && element.scrollIntoView({ 
      behavior: "smooth" 
    });
  }

  function handleMouseOver(): void {
    if (!navItemElement.current) {
      return;
    }

    shuffleText.start();
  }
}

type NavItemLinkProps = Partial<NavItemProps>;

NavItem.Link = styled.a<NavItemLinkProps>`
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

    &:hover, &:active, &:focus {
      color: ${white};
      text-shadow: 0px 0px ${spacing8} ${blue100};
    }
  `}
`;

interface NavItemLineProps extends NavItemLinkProps {
  direction: "left" | "right";
}

NavItem.Line = styled.div<NavItemLineProps>`
  ${({
    direction,
    isActive,
    theme: {
      colorPalette: { blue100, white },
      easing: { easeInOut },
      spacing: { spacing4 },
      transitionTimes,
      zIndex
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${white};
    bottom: 0;
    box-shadow: 0px 0px ${spacing4} 0px ${blue100};
    display: block;
    height: 1px;
    opacity: ${isActive ? 1 : 0};
    position: absolute;
    transition: all ${transitionTimes.fast} ${easeInOut};
    visibility: ${isActive ? "visible" : "hidden"};
    width: ${isActive ? "50%" : 0};
    z-index: ${zIndex.layer1};

    ${direction === "left" && "left: 50%;"}
    ${direction === "right" && "right: 50%;"}
  `}
`;

const areEqual = (prevProps: NavItemProps, nextProps: NavItemProps): boolean =>
  prevProps.isActive === nextProps.isActive;
  
export default memo(NavItem, areEqual);