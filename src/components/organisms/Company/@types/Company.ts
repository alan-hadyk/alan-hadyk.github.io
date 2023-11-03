import { ICompanyTimelineProps } from "@app/components/molecules/CompanyTimeline/@types/CompanyTimeline";
import { ICompanyDescriptionProps } from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";

export interface ICompanyProps {
  date: string;
  link?: string;
  name: string;
  projects: ICompanyDescriptionProps["projects"];
  themeClasses?: {
    companyDescription?: ICompanyDescriptionProps["themeClasses"];
    timeline?: ICompanyTimelineProps["themeClasses"];
  };
  title: string;
}
