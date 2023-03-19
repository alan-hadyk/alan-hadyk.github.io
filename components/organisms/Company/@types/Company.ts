import { ICompanyTimelineProps } from "components/molecules/CompanyTimeline/@types/CompanyTimeline";
import { ICompanyDescriptionProps } from "components/organisms/@types/CompanyDescription";
import { IThemeClasses } from "types/theme";

export interface ICompanyProps extends ICompanyDescriptionProps {
  companyMobilePaddingBottom?: IThemeClasses["paddingBottom"];
  name: string;
  themeClasses?: ICompanyTimelineProps["themeClasses"];
}
