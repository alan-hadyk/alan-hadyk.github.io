import React from "react";
import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import {
  iconStaticDefaultThemeClasses,
  iconStaticPictureDefaultThemeClasses
} from "components/atoms/IconStatic/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const IconStatic: React.FC<IIconStaticProps> = ({ iconName, themeClasses }) => {
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
      className={convertObjectValuesToString(
        iconStaticPictureDefaultThemeClasses
      )}
    >
      <img
        alt={iconName}
        className={convertObjectValuesToString(iconStaticThemeClasses)}
        src={`/icons/static/${iconName}.svg`}
        style={style}
      />
    </picture>
  );
};
export { IconStatic };
