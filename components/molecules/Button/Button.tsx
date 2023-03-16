import React from "react";

import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";
import { ButtonText } from "components/molecules/ButtonText/ButtonText";
import { Corners } from "components/molecules/Corners";

import { IButtonProps } from "components/molecules/Button/@types/Button";

import { isIE11 } from "helpers/browser/isIE11";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  buttonChildrenWrapperDefaultThemeClasses,
  buttonInnerContainerDefaultThemeClasses
} from "components/molecules/Button/styles";
import { useButtonThemeClasses } from "components/molecules/Button/hooks/useButtonThemeClasses";
import { useButtonHandlers } from "components/molecules/Button/hooks/useButtonHandlers";

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
  const {
    handleButtonClick,
    handleKeyUp,
    handleMouseEnter,
    handleMouseLeave,
    isActive
  } = useButtonHandlers({ onClick });

  const {
    buttonChildrenOuterWrapperThemeClasses,
    buttonClassNames,
    iconThemeClasses
  } = useButtonThemeClasses({
    iconWidth,
    size,
    themeClasses,
    type
  });

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
            <ButtonText hasMargin={!!iconName} size={size}>
              {children}
            </ButtonText>

            {iconName && (
              <IconDynamic
                themeClasses={iconThemeClasses}
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
