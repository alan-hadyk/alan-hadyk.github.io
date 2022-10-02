import React, { useState, useRef, useCallback } from "react";
import { isMobile } from "react-device-detect";

import { Icon } from "components/atoms/Icon";
import { ButtonText } from "components/molecules/ButtonText";
import { Corners } from "components/molecules/Corners";

import {
  IButtonInnnerContainerPositions,
  IButtonProps,
  IMapSizeToButtonContainerProps,
  IMapTypeToButtonContainerProps
} from "components/molecules/@types/Button";

import { isIE11 } from "helpers/browser/isIE11";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const mapTypeToButtonContainerProps: IMapTypeToButtonContainerProps = {
  primary: {
    backgroundColor: "bg-blue500",
    border: "border-none"
  },
  secondary: {
    backgroundColor: "bg-transparent",
    border: "border-1 border-solid",
    borderColor: "border-blue500"
  }
};

const mapSizeToButtonContainerProps: IMapSizeToButtonContainerProps = {
  large: {
    height: "h-56"
  },
  medium: {
    height: "h-48"
  },
  small: {
    height: "h-40"
  }
};

const Button: React.FC<IButtonProps> = ({
  buttonText,
  dataCy,
  iconName,
  iconWidth,
  onClick,
  size = "medium",
  tabIndex,
  type = "primary",
  width = "w-auto"
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const buttonInnerContainerRef = useRef<HTMLDivElement>(null);
  const isElementFocused = useRef<boolean>(false);

  const buttonHorizontalPadding = size === "small" ? "px-16" : "px-24";
  const buttonSizeClasses = convertObjectValuesToString(
    mapSizeToButtonContainerProps[size]
  );
  const buttonTypeClasses = convertObjectValuesToString(
    mapTypeToButtonContainerProps[type]
  );

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    switch (event?.key) {
      case "Enter":
      case "Space":
        onClick && onClick();
        break;
    }
  };

  const handleMouseEnter = (): void => {
    if (!isElementFocused.current) {
      !isMobile && setIsActive(true);
      isElementFocused.current = true;
    }
  };

  const handleMouseLeave = (): void => {
    if (isElementFocused.current) {
      !isMobile && setIsActive(false);
      isElementFocused.current = false;
    }
  };

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      !isMobile && setIsActive(false);
      event.preventDefault();

      onClick?.();

      if (buttonInnerContainerRef.current) {
        const { clientX, clientY }: React.MouseEvent = event;
        const { x, y }: IButtonInnnerContainerPositions =
          buttonInnerContainerRef.current.getBoundingClientRect();

        const span: HTMLSpanElement = document.createElement("span");
        span.classList.add("ripple");
        span.style.left = `${clientX - x}px`;
        span.style.top = `${clientY - y}px`;

        buttonInnerContainerRef.current.appendChild(span);

        setTimeout(() => {
          if (isElementFocused.current && !isMobile) {
            buttonInnerContainerRef.current && setIsActive(true);
          }
        }, 150);

        setTimeout(() => {
          span && span.remove();
        }, 900);
      }
    },
    [onClick]
  );

  return (
    <button
      aria-label={dataCy || "Button"}
      className={trimTemplateLiteral(`
        ${buttonSizeClasses} ${buttonTypeClasses}
        ${width}
        text-white lowercase
        transition-all duration-fast ease-in-out
        cursor-pointer select-none
        outline-0
        relative

        hover:shadow-activeButton active:shadow-activeButton focus:shadow-activeButton

        radial-gradient
        childrenRipple:animate-ripple-slow
        childrenRipple:h-24 childrenRipple:w-24
        childrenRipple:rounded-full
        childrenRipple:ml-negative12 childrenRipple:mt-negative12
        childrenRipple:opacity-0
        childrenRipple:absolute
      `)}
      data-cy={dataCy || "Button"}
      name={dataCy || "Button"}
      onKeyUp={handleKeyUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleButtonClick}
      onTouchMove={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      tabIndex={tabIndex}
    >
      {!isIE11() && <Corners isActive={isActive} />}
      <LayoutContainer
        alignItems="items-center"
        className="overflow-hidden"
        display="flex"
        height="h-full"
        justifyContent="justify-center"
        position="relative"
        ref={buttonInnerContainerRef}
      >
        <LayoutContainer className={buttonHorizontalPadding} width="w-full">
          <LayoutContainer
            alignItems="items-center"
            display="flex"
            flexFlow="flex-row flex-nowrap"
            justifyContent="justify-center"
          >
            <ButtonText
              buttonText={buttonText}
              fontFamily={isIE11() ? "font-anonymousPro" : "font-exan"}
              hasMargin={!!iconName}
              size={size}
              textTransform={isIE11() ? "uppercase" : "lowercase"}
            />
            {iconName && (
              <Icon
                themeClasses={{
                  height: size === "small" ? "h-12" : "h-24",
                  width: iconWidth
                }}
                iconName={iconName}
                isHeightResponsive
              />
            )}
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </button>
  );
};

export { Button };
