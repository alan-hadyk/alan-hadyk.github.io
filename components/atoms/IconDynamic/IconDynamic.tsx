import React, { forwardRef } from "react";
import {
  IIconDynamicProps,
  SVGIcon
} from "components/atoms/IconDynamic/@types/IconDynamic";
import { iconDynamicComponents } from "components/atoms/IconDynamic/config";
import { useIconDynamicThemeClasses } from "components/atoms/IconDynamic/hooks/useIconDynamicThemeClasses";

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
    themeClasses
  },
  ref
) => {
  const { iconDynamicClassName, iconDynamicWrapperClassName, style } =
    useIconDynamicThemeClasses({
      isActive,
      isHeightResponsive,
      isResponsive,
      shouldDisplayGlowAnimation,
      shouldGlow,
      shouldGlowOnHover,
      themeClasses
    });

  const IconComponent: SVGIcon = iconDynamicComponents[iconName];

  return (
    <div className={iconDynamicWrapperClassName} ref={ref} style={style}>
      <IconComponent className={iconDynamicClassName} />
    </div>
  );
};

const IconDynamic = forwardRef(_IconDynamic);

export { IconDynamic, iconDynamicComponents as iconComponents };
