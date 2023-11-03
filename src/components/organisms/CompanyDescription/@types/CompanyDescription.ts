import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IUnorderedListProps } from "@app/components/molecules/UnorderedList/@types/UnorderedList";

import { IThemeClasses } from "@app/types/theme";

export enum CompanyDescriptionVariant {
  Blue,
  Dark,
}

export enum CompanyDescriptionSize {
  Medium,
  Large,
}

export interface ICompanyDescriptionProps {
  date: string;
  link?: string;
  projects: {
    responsibilities?: IUnorderedListProps["items"];
    techStack?: Pick<IIconWithLabelProps, "iconName" | "label">[];
    title?: string;
  }[];
  size?: CompanyDescriptionSize;
  themeClasses?: {
    responsibilitiesWrapper?: Pick<IThemeClasses, "paddingBottom">;
    title?: Pick<IThemeClasses, "textAlign">;
  };
  title: string;
  variant?: CompanyDescriptionVariant;
}
