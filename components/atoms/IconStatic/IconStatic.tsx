import React from "react";
import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { useIconStaticThemeClasses } from "components/atoms/IconStatic/hooks/useIconStaticThemeClasses";
import Image from "next/image";
import { useIconStaticState } from "components/atoms/IconStatic/hooks/useIconStaticState";

const IconStatic: React.FC<IIconStaticProps> = ({
  iconName,
  style,
  themeClasses
}) => {
  const { iconStaticThemeClasses } = useIconStaticThemeClasses({
    themeClasses
  });
  const { iconStaticDimensions, src } = useIconStaticState({ iconName });

  return (
    <Image
      alt={iconName}
      className={convertObjectValuesToString(iconStaticThemeClasses)}
      src={src}
      style={style}
      {...iconStaticDimensions}
    />
  );
};
export { IconStatic };
