import React, { ForwardedRef, forwardRef } from "react";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import {
  IImageDynamicProps,
  SVGImage
} from "components/atoms/ImageDynamic/@types/ImageDynamic";
import { imageComponents } from "components/atoms/ImageDynamic/config";
import { useImageDynamicThemeClasses } from "components/atoms/ImageDynamic/hooks/useImageDynamicThemeClasses";

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
  const { imageComponentClassNames, imageDynamicThemeClasses, style } =
    useImageDynamicThemeClasses({
      isActive,
      isHeightResponsive,
      isResponsive,
      shouldGlow,
      shouldGlowOnHover,
      themeClasses
    });

  const ImageComponent: SVGImage = imageComponents[imageName];

  return (
    <div
      className={convertObjectValuesToString(imageDynamicThemeClasses)}
      ref={ref as ForwardedRef<HTMLDivElement>}
      style={style}
    >
      <ImageComponent className={imageComponentClassNames} />
    </div>
  );
};

const ImageDynamic = forwardRef(_ImageDynamic);

export { ImageDynamic };
