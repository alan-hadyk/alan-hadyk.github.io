import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IUnorderedListProps } from "components/molecules/@types/UnorderedList";

import { IThemeClasses, TTextAlign } from "types/theme";

export interface ICompanyDescriptionProps {
  date: string;
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  link?: string;
  responsibilities: IUnorderedListProps["items"];
  responsibilitiesPaddingBottom?: IThemeClasses["paddingBottom"];
  textAlign?: TTextAlign;
  title: string;
}
