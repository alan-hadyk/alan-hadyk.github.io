import React, { useState } from "react";
import PropTypes from "prop-types";

import NavItem from "UI/molecules/NavItem";
import FlexContainer from "UI/layout/FlexContainer";

import useIntersectionObserver from "hooks/useIntersectionObserver";

import { NavItemProps } from "UI/molecules/__typings__/NavItem";

import { NavProps } from "UI/molecules/__typings__/Nav";

const navItems: NavItemProps[] = [
  {
    href: "#experience",
    title: "Experience"
  },
  {
    href: "#skills",
    title: "Skills"
  },
  {
    href: "#about-me",
    title: "About me"
  },
  {
    href: "#contact",
    title: "Contact"
  }
];

function Nav({ position = "horizontal" }: NavProps): JSX.Element {
  const [activeNavItem, setActiveNavItem] = useState<NavItemProps["href"]>();

  useIntersectionObserver({
    onElementVisible: (element: string): void => setActiveNavItem(element),
    selectors: navItems.map(({ href }: NavItemProps): string => href)
  });

  return (
    <FlexContainer
      alignItems={position === "horizontal" ? "center" : "flex-end"}
      dataTestId="Nav"
      flexFlow={position === "horizontal" ? "row nowrap" : "column nowrap"}
      gap={position === "horizontal" ? "spacing24" : "spacing12"}
      justifyContent="center"
    >
      {renderNavItems()}
    </FlexContainer>
  );

  function renderNavItems(): JSX.Element[] {
    return navItems.map(
      ({ href, title }: NavItemProps, index: number): JSX.Element => (
        <NavItem
          key={index}
          href={href}
          isActive={activeNavItem === href}
          title={title}
        />
      )
    );
  }
}

Nav.propTypes = {
  position: PropTypes.oneOf(["horizontal", "vertical"])
};

export default Nav;
