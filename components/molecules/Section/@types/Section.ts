import { IThemeClasses } from "types/theme";
import { TChildren } from "types/props";

export interface ISectionProps {
  children: TChildren;
  id: string;
  themeClasses?: Pick<IThemeClasses, "marginBottom" | "minHeight">;
  title?: string;
}
