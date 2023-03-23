import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export enum SectionTitleVariant {
  Dark,
  Light
}

export interface ISectionTitleProps {
  children: TChildren;
  themeClasses: {
    title: Pick<IThemeClasses, "fontSize" | "lineHeight">;
    wrapper: Pick<IThemeClasses, "marginBottom">;
  };
  variant?: SectionTitleVariant;
}
