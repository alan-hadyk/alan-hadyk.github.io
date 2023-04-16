import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IUnorderedListProps } from "components/molecules/UnorderedList/@types/UnorderedList";

import { IThemeClasses } from "types/theme";

export enum CompanyDescriptionVariant {
  Blue,
  Dark
}

export interface ICompanyDescriptionProps {
  date: string;
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  link?: string;
  responsibilities: IUnorderedListProps["items"];
  themeClasses?: {
    responsibilitiesWrapper?: Pick<IThemeClasses, "paddingBottom">;
    title?: Pick<IThemeClasses, "textAlign">;
  };
  title: string;
  variant?: CompanyDescriptionVariant;
}
