import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export enum CompanyResponsibilitiesVariant {
  Blue,
  Dark
}

export enum CompanyResponsibilitiesSize {
  Medium,
  Large
}

export interface ICompanyResponsibilitiesProps {
  responsibilities: TChildren[];
  size?: CompanyResponsibilitiesSize;
  themeClasses?: Pick<IThemeClasses, "paddingBottom">;
  variant?: CompanyResponsibilitiesVariant;
}
