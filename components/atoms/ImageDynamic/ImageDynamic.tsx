import React, { ForwardedRef, forwardRef } from "react";
import { IThemeClasses, TPseudoClasses } from "types/theme";
import pick from "lodash/pick";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import {
  IImageDynamicProps,
  SVGImage,
  TImageComponents
} from "components/atoms/ImageDynamic/@types/ImageDynamic";
import { imageDynamicDefaultThemeClasses } from "components/atoms/ImageDynamic/styles";
import { imageComponents } from "components/atoms/ImageDynamic/config";

const _ImageDynamic: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IImageDynamicProps
> = (
  {
    imageName,
    isActive = false,
    isHeightResponsive = false,
    isResponsive = false,
    shouldGlow = false,
    shouldGlowOnHover = false,
    themeClasses
  },
  ref
) => {
  const imageDynamicBaseThemeClasses: IThemeClasses = {
    ...imageDynamicDefaultThemeClasses,
    ...themeClasses
  };

  const imageDynamicThemeClasses: IImageDynamicProps["themeClasses"] = {
    ...pick(imageDynamicBaseThemeClasses, "height", "overflow", "width"),
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

  const { height, width } = imageDynamicBaseThemeClasses || {};

  const style = {
    height: height && !height?.includes("h-") ? height : undefined,
    width: width && !width.includes("w-") ? width : undefined
  };

  const ImageComponent: SVGImage =
    imageComponents[imageName as keyof TImageComponents];

  return (
    <div
      className={convertObjectValuesToString(imageDynamicThemeClasses)}
      ref={ref as ForwardedRef<HTMLDivElement>}
      style={style}
    >
      <ImageComponent
        className={
          imageDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
            pseudoClass.includes("fill-")
          ) || ""
        }
      />
    </div>
  );
};

const ImageDynamic = forwardRef(_ImageDynamic);

export { ImageDynamic };
