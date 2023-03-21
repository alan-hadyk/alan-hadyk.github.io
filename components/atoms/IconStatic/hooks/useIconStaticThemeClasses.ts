import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { iconStaticDefaultThemeClasses } from "components/atoms/IconStatic/styles";

const useIconStaticThemeClasses = ({
  themeClasses
}: Pick<IIconStaticProps, "themeClasses">) => {
  const iconStaticThemeClasses = {
    ...iconStaticDefaultThemeClasses,
    ...themeClasses
  };
  return { iconStaticThemeClasses };
};

export { useIconStaticThemeClasses };
