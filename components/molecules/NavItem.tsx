import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import { Line } from "components/atoms/Line";

import { useShuffleText } from "hooks/useShuffleText";

import { INavItemProps } from "components/molecules/@types/NavItem";
import { IShuffleState } from "hooks/@types/useShuffleText";
import { LineDirection } from "components/atoms/@types/Line";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const NavItem: React.FC<INavItemProps> = ({
  href,
  isActive = false,
  position,
  tabIndex,
  title
}) => {
  const [shuffleText, setShuffleText] = useState<IShuffleState | undefined>();
  const navItemElementRef = useRef<HTMLAnchorElement>(null);

  useShuffleText({
    onShuffleReady: setShuffleText,
    ref: navItemElementRef,
    shuffleState: shuffleText,
    text: title
  });

  const handleClick = (): void => {
    const element: HTMLElement | null = document.querySelector(href);

    element && element.scrollIntoView(true);
  };

  const handleMouseOver = (): void => {
    if (navItemElementRef.current) {
      shuffleText?.start();
    }
  };

  return (
    <div
      className={trimTemplateLiteral(`
        relative
        ${position === "horizontal" ? "ml-24 first:ml-0" : "mt-12 first:mt-0"}
      `)}
      onFocus={handleClick}
      tabIndex={tabIndex}
    >
      <a
        className={trimTemplateLiteral(`
          ${isActive ? "text-white drop-shadow-xl" : "text-blue300"}
          cursor-pointer
          block relative
          text-28 leading-48 uppercase
          h-48
          transition-all duration-fast ease-in-out
          z-200

          hover:text-white hover:drop-shadow-xl
          active:text-white active:drop-shadow-xl
          focus:text-white focus:drop-shadow-xl
        `)}
        data-cy="NavItemLink"
        data-isactive={isActive}
        onMouseUp={handleClick}
        onMouseOver={handleMouseOver}
        ref={navItemElementRef}
      >
        {title}
      </a>
      <Line direction={LineDirection.LEFT} isActive={isActive} />
      <Line direction={LineDirection.RIGHT} isActive={isActive} />
    </div>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  position: PropTypes.oneOf(["horizontal", "vertical"]),
  tabIndex: PropTypes.number,
  title: PropTypes.string.isRequired
};

export { NavItem };
