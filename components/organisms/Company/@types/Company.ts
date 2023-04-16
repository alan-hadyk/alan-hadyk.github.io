import { ICompanyTimelineProps } from "components/molecules/CompanyTimeline/@types/CompanyTimeline";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IUnorderedListProps } from "components/molecules/UnorderedList/@types/UnorderedList";
import { ICompanyDescriptionProps } from "components/organisms/CompanyDescription/@types/CompanyDescription";

export enum CompanyVariant {
  Blue,
  Dark
}

export interface ICompanyProps {
  date: string;
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  link?: string;
  name: string;
  responsibilities: IUnorderedListProps["items"];
  themeClasses?: {
    companyDescription?: ICompanyDescriptionProps["themeClasses"];
    timeline?: ICompanyTimelineProps["themeClasses"];
  };
  title: string;
  variant?: CompanyVariant;
}
