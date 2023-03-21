import React from "react";
import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { iconStaticPictureDefaultThemeClasses } from "components/atoms/IconStatic/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { useIconStaticThemeClasses } from "components/atoms/IconStatic/hooks/useIconStaticThemeClasses";

const IconStatic: React.FC<IIconStaticProps> = ({
  iconName,
  style,
  themeClasses
}) => {
  const { iconStaticThemeClasses } = useIconStaticThemeClasses({
    themeClasses
  });

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
