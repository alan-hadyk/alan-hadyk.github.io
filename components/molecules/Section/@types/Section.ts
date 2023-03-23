import { IThemeClasses } from "types/theme";
import { TChildren } from "types/props";

export enum SectionVariant {
  Dark,
  Light
}

export interface ISectionProps {
  children: TChildren;
  id: string;
  themeClasses?: Pick<
    IThemeClasses,
    "marginBottom" | "minHeight" | "paddingTop"
  >;
  title?: string;
  variant?: SectionVariant;
}
