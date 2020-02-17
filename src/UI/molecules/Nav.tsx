import React, { memo, useState } from "react";

import NavItem from "<molecules>/NavItem";
import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import useElementInViewport from "<hooks>/useElementInViewport";

const navItems = [{
  children: "Portfolio",
  href: "#portfolio"
}, {
  children: "Experience",
  href: "#experience"
}, {
  children: "Skills",
  href: "#skills"
}, {
  children: "About me",
  href: "#about-me"
}, {
  children: "Contact",
  href: "#contact"
}];

function Nav(): JSX.Element {
  const [activeNavItem, setActiveNavItem] = useState();
  

  useElementInViewport({
    onElementVisible: (element: string) => setActiveNavItem(element),
    selectors: navItems.map(({ href }) => href)
  });

  return (
    <FlexContainer
      flexFlow="row nowrap"
      justifyContent="flex-start"
    >
      {renderNavItems()}
    </FlexContainer>
  );

  function renderNavItems(): JSX.Element[] {
    return navItems.map(({
      children,
      href
    }, index): JSX.Element => (
      <SpacingContainer
        key={children}
        marginLeft={index === 0 ? "spacing0" : "spacing24"}
      >
        <NavItem 
          href={href}
          isActive={activeNavItem === href}
        >
          {children}
        </NavItem>
      </SpacingContainer>
    ));
  }
}
  
export default memo(Nav);