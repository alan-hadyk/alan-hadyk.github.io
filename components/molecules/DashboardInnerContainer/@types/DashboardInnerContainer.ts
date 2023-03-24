import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface IDashboardInnerContainerProps {
  children: TChildren;
  themeClasses?: Pick<IThemeClasses, "height" | "marginBottom" | "marginTop">;
}
