import React, { memo, useState } from "react";

import NavItem from "<molecules>/NavItem";
import FlexContainer from "<layout>/FlexContainer";

import useIntersectionObserver from "<hooks>/useIntersectionObserver";

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
      dataTestId="Nav"
      flexFlow="row nowrap"
      gap="spacing24"
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
      <NavItem 
        key={index}
        href={href}
        isActive={activeNavItem === href}
        title={title}
      />
    ));
  }
}
  
export default memo(Nav);