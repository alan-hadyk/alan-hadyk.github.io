import { ICompanyTimelineProps } from "@app/components/molecules/CompanyTimeline/@types/CompanyTimeline";
import { ICompanyDescriptionProps } from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";

export enum CompanyFormat {
  Pdf,
  Web,
}

export enum CompanyVariant {
  Blue,
  Dark,
}

export interface ICompanyProps {
  date: string;
  format?: CompanyFormat;
  link?: string;
  name: string;
  projects: ICompanyDescriptionProps["projects"];
  themeClasses?: {
    companyDescription?: ICompanyDescriptionProps["themeClasses"];
    timeline?: ICompanyTimelineProps["themeClasses"];
  };
  title: string;
  variant?: CompanyVariant;
}
