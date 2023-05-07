import { ButtonSize } from "components/molecules/Button/@types/Button";
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

  return size === ButtonSize.Small ? "mr-8" : "mr-16";
};
