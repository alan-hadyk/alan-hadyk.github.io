import React, { useState } from "react";

import { NavItem } from "components/molecules/NavItem";

import { useIntersectionObserver } from "hooks/useIntersectionObserver";

import { INavItemProps } from "components/molecules/@types/NavItem";

import { INavProps } from "components/molecules/@types/Nav";
import { LayoutContainer } from "components/layout/LayoutContainer";

const navItems: INavItemProps[] = [
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

const Nav: React.FC<INavProps> = ({ position = "horizontal" }) => {
  const [activeNavItem, setActiveNavItem] = useState<INavItemProps["href"]>();

  useIntersectionObserver({
    onElementVisible: (element: string): void => setActiveNavItem(element),
    selectors: navItems.map(({ href }: INavItemProps): string => href)
  });

  return (
    <LayoutContainer
      as="nav"
      className={`
        ${
          position === "horizontal"
            ? "flex-row flex-nowrap"
            : "flex-col flex-nowrap"
        }
      `}
      alignItems={position === "horizontal" ? "items-center" : "items-end"}
      display="flex"
      justifyContent="justify-center"
    >
      {navItems.map(
        ({ href, title }: INavItemProps, index: number): JSX.Element => (
          <NavItem
            key={index}
            href={href}
            isActive={activeNavItem === href}
            position={position}
            tabIndex={0}
            title={title}
          />
        )
      )}
    </LayoutContainer>
  );
};

export { Nav };
