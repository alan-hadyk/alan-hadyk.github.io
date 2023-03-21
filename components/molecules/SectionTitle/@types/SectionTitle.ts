import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface ISectionTitleProps {
  children: TChildren;
  themeClasses: {
    title: Pick<IThemeClasses, "fontSize">;
    wrapper: Pick<IThemeClasses, "marginBottom">;
  };
}
