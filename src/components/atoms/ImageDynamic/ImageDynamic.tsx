import {
  IImageDynamicProps,
  SVGImage,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { imageDynamicComponents } from "@app/components/atoms/ImageDynamic/config";
import { useImageDynamicThemeClasses } from "@app/components/atoms/ImageDynamic/hooks/useImageDynamicThemeClasses";
import React, { forwardRef } from "react";

const _ImageDynamic: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IImageDynamicProps
> = ({ imageName, style, themeClasses, variants = [] }, ref) => {
  const { imageComponentClassNames, imageDynamicWrapperClassNames } =
    useImageDynamicThemeClasses({
      themeClasses,
      variants,
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
