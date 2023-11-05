import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export interface ISectionTitleProps {
  children: TChildren;
  themeClasses?: {
    title?: Pick<IThemeClasses, "fontSize" | "lineHeight" | "color">;
    wrapper?: Pick<IThemeClasses, "marginBottom">;
  };
}
