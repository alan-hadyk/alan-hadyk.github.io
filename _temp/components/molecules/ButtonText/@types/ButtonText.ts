import { ButtonSize } from "components/molecules/Button/@types/Button";
import { IThemeClasses } from "types/theme";

export interface IButtonTextProps {
  children: string;
  hasMargin?: boolean;
  size: ButtonSize;
  themeClasses?: Pick<IThemeClasses, "fontFamily" | "textTransform">;
}

export type TMapSizeToButtonTextProps = Record<
  ButtonSize,
  Pick<IThemeClasses, "fontSize">
>;
