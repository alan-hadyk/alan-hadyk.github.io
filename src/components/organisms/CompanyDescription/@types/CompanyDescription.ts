import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IUnorderedListProps } from "@app/components/molecules/UnorderedList/@types/UnorderedList";

import { IThemeClasses } from "@app/types/theme";

export interface ICompanyDescriptionProps {
  date: string;
  link?: string;
  position: string;
  projects: {
    responsibilities?: IUnorderedListProps["items"];
    techStack?: Pick<IIconWithLabelProps, "iconName" | "label">[];
    title?: string;
  }[];
  themeClasses?: {
    position?: Pick<IThemeClasses, "textAlign">;
    responsibilitiesWrapper?: Pick<IThemeClasses, "paddingBottom">;
  };
}
