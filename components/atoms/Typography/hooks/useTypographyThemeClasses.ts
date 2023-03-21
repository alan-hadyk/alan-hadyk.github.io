import { ITypographyProps } from "components/atoms/Typography/@types/Typography";
import { typographyDefaultThemeClasses } from "components/atoms/Typography/styles";
import { IThemeClasses, TPseudoClasses } from "types/theme";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const useTypographyThemeClasses = ({
  ellipsis,
  isHoverable,
  themeClasses
}: Pick<ITypographyProps, "ellipsis" | "isHoverable" | "themeClasses">) => {
  const typographyBaseThemeClasses: IThemeClasses = {
    ...typographyDefaultThemeClasses,
    ...themeClasses
  };

  const typographyThemeClasses: IThemeClasses = {
    ...typographyBaseThemeClasses,
    ...(ellipsis && {
      overflow: "overflow-hidden",
      textOverflow: "text-ellipsis",
      whitespace: "whitespace-nowrap"
    }),
    ...(typographyBaseThemeClasses.color === "text-blue300" && {
      pseudoClasses: [
        "childrenStrong:text-blue300",
        ...(typographyBaseThemeClasses?.pseudoClasses
          ? (typographyBaseThemeClasses.pseudoClasses as TPseudoClasses)
          : [])
      ]
    }),
    ...(isHoverable && {
      hover: "hover:text-white"
    })
  };

  const typographyClassName = convertObjectValuesToString(
    typographyThemeClasses
  );

  return {
    typographyClassName
  };
};

export { useTypographyThemeClasses };