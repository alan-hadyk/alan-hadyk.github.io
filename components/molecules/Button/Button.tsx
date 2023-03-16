import React, { useState, useCallback } from "react";
import { isMobile } from "react-device-detect";

import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";
import { ButtonText } from "components/molecules/ButtonText";
import { Corners } from "components/molecules/Corners";

import { IButtonProps } from "components/molecules/Button/@types/Button";

import { isIE11 } from "helpers/browser/isIE11";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  buttonChildrenOuterWrapperDefaultThemeClasses,
  buttonChildrenWrapperDefaultThemeClasses,
  buttonDefaultThemeClasses,
  buttonInnerContainerDefaultThemeClasses,
  mapSizeToButtonContainerProps,
  mapTypeToButtonContainerProps
} from "components/molecules/Button/styles";
import { IThemeClasses } from "types/theme";

const Button: React.FC<IButtonProps> = ({
  children,
  iconName,
  iconWidth,
  onClick,
  size = "medium",
  tabIndex,
  type = "primary",
  themeClasses
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    switch (event?.key) {
      case "Enter":
      case "Space":
        onClick && onClick();
        break;
    }
  };

  const handleMouseEnter = (): void => {
    !isMobile && setIsActive(true);
  };

  const handleMouseLeave = (): void => {
    !isMobile && setIsActive(false);
  };

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      !isMobile && setIsActive(false);
      event.preventDefault();

      onClick?.();
    },
    [onClick]
  );

  const buttonThemeClasses: IThemeClasses = {
    ...buttonDefaultThemeClasses,
    ...themeClasses
  };

  const buttonChildrenOuterWrapperThemeClasses: IThemeClasses = {
    ...buttonChildrenOuterWrapperDefaultThemeClasses,
    paddingX: size === "small" ? "px-16" : "px-24"
  };

  const buttonClassNames = [
    convertObjectValuesToString(buttonThemeClasses),
    convertObjectValuesToString(mapSizeToButtonContainerProps[size]),
    convertObjectValuesToString(mapTypeToButtonContainerProps[type])
  ];

  return (
    <button
      aria-label="Button"
      className={buttonClassNames.join(" ")}
      name="Button"
      onKeyUp={handleKeyUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleButtonClick}
      onTouchMove={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      tabIndex={tabIndex}
    >
      {!isIE11() && <Corners isActive={isActive} />}

      <LayoutContainer themeClasses={buttonInnerContainerDefaultThemeClasses}>
        <LayoutContainer themeClasses={buttonChildrenOuterWrapperThemeClasses}>
          <LayoutContainer
            themeClasses={buttonChildrenWrapperDefaultThemeClasses}
          >
            <ButtonText
              buttonText={children}
              fontFamily={isIE11() ? "font-anonymousPro" : "font-exan"}
              hasMargin={!!iconName}
              size={size}
              textTransform={isIE11() ? "uppercase" : "lowercase"}
            />

            {iconName && (
              <IconDynamic
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
