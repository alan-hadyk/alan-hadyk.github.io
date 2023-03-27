import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface ICompanyDescriptionTitleProps {
  children: TChildren;
  themeClasses?: Pick<IThemeClasses, "textAlign">;
}
