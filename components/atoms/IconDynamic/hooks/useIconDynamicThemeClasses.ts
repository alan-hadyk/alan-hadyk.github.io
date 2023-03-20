import { IIconDynamicProps } from "components/atoms/IconDynamic/@types/IconDynamic";
import { iconDynamicDefaultThemeClasses } from "components/atoms/IconDynamic/styles";
import { IThemeClasses, TPseudoClasses } from "types/theme";
import pick from "lodash/pick";

const useIconDynamicThemeClasses = ({
  isActive,
  isHeightResponsive,
  isResponsive,
  shouldDisplayGlowAnimation,
  shouldGlow,
  shouldGlowOnHover,
  themeClasses
}: Pick<
  IIconDynamicProps,
  | "isActive"
  | "isHeightResponsive"
  | "isResponsive"
  | "shouldDisplayGlowAnimation"
  | "shouldGlow"
  | "shouldGlowOnHover"
  | "themeClasses"
>) => {
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

  return {
    iconDynamicBaseThemeClasses,
    iconDynamicThemeClasses,
    style
  };
};

export { useIconDynamicThemeClasses };
