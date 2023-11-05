"use client";
import { IIconStaticProps } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { iconStaticIcons } from "@app/components/atoms/IconStatic/config";
import { TSVGIcon } from "@app/types/svg";
import { iconStaticDefaultThemeClasses } from "@app/components/atoms/IconStatic/styles";
import { IThemeClasses } from "@app/types/theme";

export const IconStatic: React.FC<IIconStaticProps> = ({
  iconName,
  style,
  themeClasses,
}) => {
  const iconStaticThemeClasses: IThemeClasses = {
    ...iconStaticDefaultThemeClasses,
    ...themeClasses,
  };

  const IconComponent: TSVGIcon = iconStaticIcons[iconName];

  return (
    <IconComponent
      className={convertObjectValuesToString(iconStaticThemeClasses)}
      style={style}
    />
  );
};
