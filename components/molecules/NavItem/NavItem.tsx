import React from "react";

import { Line } from "components/atoms/Line/Line";
import { INavItemProps } from "components/molecules/NavItem/@types/NavItem";
import { LineDirection } from "components/atoms/Line/@types/Line";
import { useNavItemState } from "components/molecules/NavItem/hooks/useNavItemState";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { useNavItemThemeClasses } from "components/molecules/NavItem/hooks/useNavItemThemeClasses";

const NavItem: React.FC<INavItemProps> = ({
  href,
  isActive = false,
  position,
  tabIndex,
  title
}) => {
  const { handleClick, handleMouseOver, navItemElementRef } = useNavItemState({
    href,
    title
  });

  const { navItemLinkThemeClasses, navItemThemeClasses } =
    useNavItemThemeClasses({
      isActive,
      position
    });

  return (
    <LayoutContainer
      onFocus={handleClick}
      tabIndex={tabIndex}
      themeClasses={navItemThemeClasses}
    >
      <a
        className={convertObjectValuesToString(navItemLinkThemeClasses)}
        data-isactive={isActive}
        onMouseUp={handleClick}
        onMouseOver={handleMouseOver}
        ref={navItemElementRef}
      >
        {title}
      </a>

      <Line direction={LineDirection.LEFT} isActive={isActive} />
      <Line direction={LineDirection.RIGHT} isActive={isActive} />
    </LayoutContainer>
  );
};

export { NavItem };
