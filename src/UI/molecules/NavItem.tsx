import React, { useRef, useLayoutEffect, useState, memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import ShuffleText from "shuffle-text";

export interface NavItemProps {
  children: string;
  href: string;
  isActive?: boolean;
}

let renders = 0;

function NavItem({
  children,
  href,
  isActive = false
}: NavItemProps): JSX.Element {
  const [shuffleText, setShuffleText] = useState();
  const navItemElement = useRef(null);
  console.log("NavItem renders", renders++);

  useLayoutEffect(() => {
    if (!navItemElement.current || shuffleText) {
      return;
    }

    const text = new ShuffleText(navItemElement.current);
    text.setText(children);

    setShuffleText({
      start: () => text.start()
    });
  }, [navItemElement, children, shuffleText]);

  return (
    <NavItem.Link
      isActive={isActive}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      ref={navItemElement}
    >
      {children}
    </NavItem.Link>
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
      spacing: { spacing4, spacing8, spacing48 },
      transitionTimes
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

    &:hover, &:active, &:focus {
      color: ${white};
      text-shadow: 0px 0px ${spacing8} ${blue100};
    }

    &::before, &::after {
      background-color: ${white};
      bottom: 0;
      box-shadow: 0px 0px ${spacing4} 0px ${blue100};
      content: '';
      display: block;
      height: 1px;
      opacity: ${isActive ? 1 : 0};
      position: absolute;
      transition: all ${transitionTimes.fast} ${easeInOut};
      width: ${isActive ? "50%" : 0};
    }

    &::before {
      left: 50%;
    }

    &::after {
      right: 50%;
    }
  `}
`;

const areEqual = (prevProps: NavItemProps, nextProps: NavItemProps): boolean =>
  prevProps.isActive === nextProps.isActive;
  
export default memo(NavItem, areEqual);