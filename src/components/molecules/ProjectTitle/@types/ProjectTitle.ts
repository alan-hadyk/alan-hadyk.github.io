import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export interface IProjectTitleProps {
  children: TChildren;
  themeClasses?: Pick<IThemeClasses, "textAlign">;
}
