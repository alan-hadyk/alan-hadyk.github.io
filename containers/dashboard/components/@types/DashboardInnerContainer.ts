import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface IDashboardInnerContainerProps {
  children: TChildren;
  height?: IThemeClasses["height"];
  marginBottom?: IThemeClasses["marginBottom"];
  marginTop?: IThemeClasses["marginTop"];
}
