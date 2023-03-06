import React, { ForwardedRef, forwardRef } from "react";
import {
  TIconComponents,
  IIconDynamicProps,
  SVGIcon
} from "components/atoms/IconDynamic/@types/IconDynamic";
import { iconComponents } from "components/atoms/IconDynamic/config";
import { iconDynamicDefaultThemeClasses } from "components/atoms/IconDynamic/styles";
import { IThemeClasses, TPseudoClasses } from "types/theme";
import pick from "lodash/pick";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

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
  const iconDynamicBaseThemeClasses: IThemeClasses = {
    ...iconDynamicDefaultThemeClasses,
    ...themeClasses
  };

  const iconDynamicThemeClasses: IIconDynamicProps["themeClasses"] = {
    ...pick(iconDynamicBaseThemeClasses, "height", "overflow", "width"),
    pseudoClasses: [
      ...(isResponsive || isHeightResponsive
        ? ["childrenSvg:h-full"]
        : ["childrenSvg:h-auto"]),
      ...(isResponsive && !isHeightResponsive
        ? ["childrenSvg:w-full"]
        : ["childrenSvg:w-auto"]),
      ...(isActive
        ? ["childrenMask:fill-blue300", "childrenPath:fill-blue300"]
        : []),
      ...(shouldDisplayGlowAnimation
        ? [
            iconDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
              pseudoClass.includes("animate-")
            )
          ]
        : []),
      ...(shouldGlow ? ["childrenSvg:drop-shadow-lg"] : []),
      ...(shouldGlowOnHover
        ? [
            "childrenSvg:transition-all",
            "childrenSvg:ease-in-out",
            iconDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
              pseudoClass.includes("duration-")
            ),
            "childrenSvg:hover:drop-shadow-lg",
            "childrenSvg:focus:drop-shadow-lg",
            "childrenSvg:active:drop-shadow-lg"
          ]
        : [])
    ] as TPseudoClasses | undefined
  };

  const { height, width } = iconDynamicBaseThemeClasses || {};

  const style = {
    height: height && !height?.includes("h-") ? height : undefined,
    width: width && !width.includes("w-") ? width : undefined
  };

  const IconComponent: SVGIcon =
    iconComponents[iconName as keyof TIconComponents];

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
