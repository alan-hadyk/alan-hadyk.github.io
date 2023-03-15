import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";
import { IUnorderedListProps } from "components/molecules/@types/UnorderedList";

import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { TTextAlign } from "types/theme";

export interface ICompanyDescriptionProps {
  date: string;
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  link?: string;
  responsibilities: IUnorderedListProps["items"];
  responsibilitiesPaddingBottom?: ILayoutContainerProps["paddingBottom"];
  textAlign?: TTextAlign;
  title: string;
}
