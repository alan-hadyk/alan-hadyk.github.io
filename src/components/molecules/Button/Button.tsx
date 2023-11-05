"use client";
import { ButtonText } from "@app/components/molecules/ButtonText/ButtonText";
import { Corners } from "@app/components/molecules/Corners/Corners";

import {
  ButtonSize,
  ButtonType,
  IButtonProps,
} from "@app/components/molecules/Button/@types/Button";

import { isIE11 } from "@app/helpers/browser/isIE11";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  buttonChildrenWrapperDefaultThemeClasses,
  buttonInnerContainerDefaultThemeClasses,
} from "@app/components/molecules/Button/styles";
import { useButtonThemeClasses } from "@app/components/molecules/Button/hooks/useButtonThemeClasses";
import { useButtonHandlers } from "@app/components/molecules/Button/hooks/useButtonHandlers";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";

export const Button: React.FC<IButtonProps> = ({
  children,
  iconName,
  iconWidth,
  onClick,
  size = ButtonSize.Medium,
  tabIndex,
  type = ButtonType.Primary,
  themeClasses,
}) => {
  const {
    handleButtonClick,
    handleKeyUp,
    handleMouseEnter,
    handleMouseLeave,
    isActive,
  } = useButtonHandlers({ onClick });

  const {
    buttonChildrenOuterWrapperThemeClasses,
    buttonClassNames,
    iconThemeClasses,
  } = useButtonThemeClasses({
    iconWidth,
    size,
    themeClasses,
    type,
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
              <ImageDynamic
                themeClasses={iconThemeClasses}
                imageName={iconName}
              />
            )}
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </button>
  );
};
