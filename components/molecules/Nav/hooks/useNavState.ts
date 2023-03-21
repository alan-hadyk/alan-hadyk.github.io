import { useState } from "react";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

import { INavItemProps } from "components/molecules/NavItem/@types/NavItem";
import { INavProps } from "components/molecules/Nav/@types/Nav";

const useNavState = ({ navItems }: Pick<INavProps, "navItems">) => {
  const [activeNavItem, setActiveNavItem] = useState<INavItemProps["href"]>();

  useIntersectionObserver({
    onElementVisible: (element: string): void => setActiveNavItem(element),
    selectors: navItems.map(({ href }: INavItemProps): string => href)
  });

  return {
    activeNavItem
  };
};

export { useNavState };
