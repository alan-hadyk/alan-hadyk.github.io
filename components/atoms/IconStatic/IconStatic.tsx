import React, { ForwardedRef, forwardRef } from "react";
import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import {
  iconStaticDefaultThemeClasses,
  iconStaticPictureThemeClasses
} from "components/atoms/IconStatic/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const _IconStatic: React.ForwardRefRenderFunction<
  HTMLDivElement | HTMLImageElement,
  IIconStaticProps
> = ({ iconName, themeClasses }, ref) => {
  const iconStaticThemeClasses = {
    ...iconStaticDefaultThemeClasses,
    ...themeClasses
  };

  const { height, width } = iconStaticThemeClasses || {};

  const style = {
    height: height && !height?.includes("h-") ? height : undefined,
    width: width && !width.includes("w-") ? width : undefined
  };

  return (
    <picture
      className={convertObjectValuesToString(iconStaticPictureThemeClasses)}
    >
      <img
        alt={iconName}
        className={convertObjectValuesToString(iconStaticThemeClasses)}
        ref={ref as ForwardedRef<HTMLImageElement>}
        src={`/icons/static/${iconName}.svg`}
        style={style}
      />
    </picture>
  );
};

const IconStatic = forwardRef(_IconStatic);

export { IconStatic };
