import React, { ForwardedRef, forwardRef } from "react";
import {
  IIconDynamicProps,
  SVGIcon
} from "components/atoms/IconDynamic/@types/IconDynamic";
import { iconComponents } from "components/atoms/IconDynamic/config";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
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
  const { iconDynamicBaseThemeClasses, iconDynamicThemeClasses, style } =
    useIconDynamicThemeClasses({
      isActive,
      isHeightResponsive,
      isResponsive,
      shouldDisplayGlowAnimation,
      shouldGlow,
      shouldGlowOnHover,
      themeClasses
    });

  const IconComponent: SVGIcon = iconComponents[iconName];

  return (
    <div
      className={
        iconDynamicThemeClasses
          ? convertObjectValuesToString(iconDynamicThemeClasses)
          : ""
      }
      ref={ref as ForwardedRef<HTMLDivElement>}
      style={style}
    >
      <IconComponent
        className={
          iconDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
            pseudoClass.includes("fill-")
          ) || ""
        }
      />
    </div>
  );
};

const IconDynamic = forwardRef(_IconDynamic);

export { IconDynamic, iconComponents };
