import React, { memo, useState } from "react";

import NavItem from "<molecules>/NavItem";
import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import useIntersectionObserver from "<src>/hooks/useIntersectionObserver";

import {
  NavItemProps
} from "<molecules>/__typings__/NavItem";

const navItems: NavItemProps[] = [{
  href: "#portfolio",
  title: "Portfolio"
}, {
  href: "#experience",
  title: "Experience"
}, {
  href: "#skills",
  title: "Skills"
}, {
  href: "#about-me",
  title: "About me"
}, {
  href: "#contact",
  title: "Contact"
}];

function Nav(): JSX.Element {
  const [activeNavItem, setActiveNavItem] = useState<NavItemProps["href"]>();

  useIntersectionObserver({
    onElementVisible: (element: string): void => setActiveNavItem(element),
    selectors: navItems.map(({ href }: NavItemProps): string => href)
  });

  return (
    <FlexContainer
      flexFlow="row nowrap"
      justifyContent="center"
    >
      {renderNavItems()}
    </FlexContainer>
  );

  function renderNavItems(): JSX.Element[] {
    return navItems.map(({
      href,
      title
    }: NavItemProps, index: number): JSX.Element => (
      <SpacingContainer
        key={index}
        marginLeft="spacing24"
      >
        <NavItem 
          href={href}
          isActive={activeNavItem === href}
          title={title}
        />
      </SpacingContainer>
    ));
  }
}
  
export default memo(Nav);