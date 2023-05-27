import {
  IImageDynamicProps,
  SVGImage,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { imageDynamicComponents } from "@app/components/atoms/ImageDynamic/config";
import { useImageDynamicThemeClasses } from "@app/components/atoms/ImageDynamic/hooks/useImageDynamicThemeClasses";
import React, { forwardRef } from "react";

const _ImageDynamic: React.ForwardRefRenderFunction<
  SVGSVGElement,
  IImageDynamicProps
> = ({ imageName, style, themeClasses, variants = [] }, ref) => {
  const { imageDynamicClassNames } = useImageDynamicThemeClasses({
    themeClasses,
    variants,
  });

  const ImageComponent: SVGImage = imageDynamicComponents[imageName];

  return (
    <ImageComponent
      className={imageDynamicClassNames}
      ref={ref}
      style={style}
    />
  );
};

const ImageDynamic = forwardRef(_ImageDynamic);

export { ImageDynamic };
