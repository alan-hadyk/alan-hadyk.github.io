import { IThemeClasses } from "@app/types/theme";
import { TChildren } from "@app/types/props";

export interface ISectionProps {
  children: TChildren;
  id: string;
  themeClasses?: Pick<
    IThemeClasses,
    "marginBottom" | "minHeight" | "paddingTop"
  >;
  title?: string;
}
