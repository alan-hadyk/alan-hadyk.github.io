import React, { forwardRef } from "react";
import {
  IIconDynamicProps,
  SVGIcon,
} from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import { iconDynamicComponents } from "@app/components/atoms/IconDynamic/config";
import { useIconDynamicThemeClasses } from "@app/components/atoms/IconDynamic/hooks/useIconDynamicThemeClasses";

const _IconDynamic: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IIconDynamicProps
> = (
  {
    iconName,
    isActive = false,
    isHeightResponsive = false,
    isResponsive = false,
    shouldDisplayGlowAnimation = false,
    shouldGlow = false,
    shouldGlowOnHover = false,
    style,
    themeClasses,
  },
  ref,
) => {
  const { iconDynamicClassName, iconDynamicWrapperClassName } =
    useIconDynamicThemeClasses({
      isActive,
      isHeightResponsive,
      isResponsive,
      shouldDisplayGlowAnimation,
      shouldGlow,
      shouldGlowOnHover,
      themeClasses,
    });

  const IconComponent: SVGIcon = iconDynamicComponents[iconName];

  return (
    <div className={iconDynamicWrapperClassName} ref={ref} style={style}>
      <IconComponent className={iconDynamicClassName} />
    </div>
  );
};

const IconDynamic = forwardRef(_IconDynamic);

export { IconDynamic };
