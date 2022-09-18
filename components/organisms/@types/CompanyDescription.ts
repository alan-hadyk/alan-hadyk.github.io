import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";
import { IUnorderedListProps } from "components/molecules/@types/UnorderedList";

import { ITextProps } from "components/atoms/@types/Text";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";

export interface ICompanyDescriptionProps {
  date: string;
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  link?: string;
  responsibilities: IUnorderedListProps["items"];
  responsibilitiesPaddingBottom?: ILayoutContainerProps["paddingBottom"];
  textAlign?: ITextProps["textAlign"];
  title: string;
}
