import { IButtonTextProps } from "components/molecules/ButtonText/@types/ButtonText";
import { IThemeClasses } from "types/theme";

export const getButtonTextMarginRight = ({
  hasMargin,
  size
}: Pick<
  IButtonTextProps,
  "hasMargin" | "size"
>): IThemeClasses["marginRight"] => {
  if (!hasMargin) {
    return "mr-0";
  }

  return size === "small" ? "mr-8" : "mr-16";
};
