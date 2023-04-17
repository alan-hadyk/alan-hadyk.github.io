import {
  IIconStaticProps,
  IconStaticVariant
} from "components/atoms/IconStatic/@types/IconStatic";
import { iconStaticDefaultThemeClasses } from "components/atoms/IconStatic/styles";
import { IThemeClasses } from "types/theme";

const useIconStaticThemeClasses = ({
  themeClasses,
  variant = IconStaticVariant.Default
}: Pick<IIconStaticProps, "themeClasses" | "variant">) => {
  const iconStaticThemeClasses: IThemeClasses = {
    ...iconStaticDefaultThemeClasses,
    ...(variant === IconStaticVariant.Inverted && {
      mixBlendMode: "mix-blend-difference"
    }),
    ...themeClasses
  };

  return { iconStaticThemeClasses };
};

export { useIconStaticThemeClasses };
