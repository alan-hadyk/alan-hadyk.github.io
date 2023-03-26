import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface ICompanyDescriptionResponsibilitiesProps {
  responsibilities: TChildren[];
  themeClasses?: Pick<IThemeClasses, "paddingBottom">;
}
