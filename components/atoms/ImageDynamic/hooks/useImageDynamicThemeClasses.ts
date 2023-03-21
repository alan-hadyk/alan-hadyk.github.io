import { IThemeClasses, TPseudoClasses } from "types/theme";
import omit from "lodash/omit";
import { IImageDynamicProps } from "components/atoms/ImageDynamic/@types/ImageDynamic";
import { imageDynamicDefaultThemeClasses } from "components/atoms/ImageDynamic/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const useImageDynamicThemeClasses = ({
  isActive,
  isHeightResponsive,
  isResponsive,
  shouldGlow,
  shouldGlowOnHover,
  themeClasses
}: Pick<
  IImageDynamicProps,
  | "isActive"
  | "isHeightResponsive"
  | "isResponsive"
  | "shouldGlow"
  | "shouldGlowOnHover"
  | "themeClasses"
>) => {
  const imageDynamicBaseThemeClasses: IThemeClasses = {
    ...imageDynamicDefaultThemeClasses,
    ...themeClasses
  };

  const imageDynamicThemeClasses: IImageDynamicProps["themeClasses"] = {
    ...omit(imageDynamicBaseThemeClasses, "pseudoClasses"),
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
      ...(shouldGlow ? ["childrenSvg:drop-shadow-lg"] : []),
      ...(shouldGlowOnHover
        ? [
            "childrenSvg:transition-all",
            "childrenSvg:ease-in-out",
            imageDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
              pseudoClass.includes("duration-")
            ),
            "childrenSvg:hover:drop-shadow-lg",
            "childrenSvg:focus:drop-shadow-lg",
            "childrenSvg:active:drop-shadow-lg"
          ]
        : [])
    ] as TPseudoClasses | undefined
  };

  const imageDynamicWrapperClassNames = convertObjectValuesToString(
    imageDynamicThemeClasses
  );

  const imageComponentClassNames =
    imageDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
      pseudoClass.includes("fill-")
    ) || "";

  return {
    imageComponentClassNames,
    imageDynamicWrapperClassNames
  };
};

export { useImageDynamicThemeClasses };
