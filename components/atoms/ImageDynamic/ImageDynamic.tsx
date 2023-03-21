import React, { forwardRef } from "react";
import {
  IImageDynamicProps,
  SVGImage
} from "components/atoms/ImageDynamic/@types/ImageDynamic";
import { imageDynamicComponents } from "components/atoms/ImageDynamic/config";
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
  const { imageComponentClassNames, imageDynamicWrapperClassNames, style } =
    useImageDynamicThemeClasses({
      isActive,
      isHeightResponsive,
      isResponsive,
      shouldGlow,
      shouldGlowOnHover,
      themeClasses
    });

  const ImageComponent: SVGImage = imageDynamicComponents[imageName];

  return (
    <div className={imageDynamicWrapperClassNames} ref={ref} style={style}>
      <ImageComponent className={imageComponentClassNames} />
    </div>
  );
};

const ImageDynamic = forwardRef(_ImageDynamic);

export { ImageDynamic };
