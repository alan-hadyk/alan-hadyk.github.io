import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export enum CompanyDescriptionResponsibilitiesVariant {
  Blue,
  Dark
}

export interface ICompanyDescriptionResponsibilitiesProps {
  responsibilities: TChildren[];
  themeClasses?: Pick<IThemeClasses, "paddingBottom">;
  variant?: CompanyDescriptionResponsibilitiesVariant;
}
