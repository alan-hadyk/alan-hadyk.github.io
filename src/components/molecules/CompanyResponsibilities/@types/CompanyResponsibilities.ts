import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export interface ICompanyResponsibilitiesProps {
  responsibilities: TChildren[];
  shouldDisplayTitle?: boolean;
  themeClasses?: Pick<IThemeClasses, "paddingBottom">;
}
