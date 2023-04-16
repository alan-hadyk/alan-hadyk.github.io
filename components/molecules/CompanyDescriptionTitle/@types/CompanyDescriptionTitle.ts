import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export enum CompanyDescriptionTitleVariant {
  Dark,
  Light
}

export interface ICompanyDescriptionTitleProps {
  children: TChildren;
  themeClasses?: Pick<IThemeClasses, "textAlign">;
  variant?: CompanyDescriptionTitleVariant;
}
