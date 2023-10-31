import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export enum ProjectTitleVariant {
  Dark,
  Light,
}

export enum ProjectTitleSize {
  Medium,
  Large,
}

export interface IProjectTitleProps {
  children: TChildren;
  size?: ProjectTitleSize;
  themeClasses?: Pick<IThemeClasses, "textAlign">;
  variant?: ProjectTitleVariant;
}
