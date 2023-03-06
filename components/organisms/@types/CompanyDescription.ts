import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";
import { IUnorderedListProps } from "components/molecules/@types/UnorderedList";

import { ITypographyProps } from "components/atoms/@types/Typography";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";

export interface ICompanyDescriptionProps {
  date: string;
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  link?: string;
  responsibilities: IUnorderedListProps["items"];
  responsibilitiesPaddingBottom?: ILayoutContainerProps["paddingBottom"];
  textAlign?: ITypographyProps["textAlign"];
  title: string;
}
