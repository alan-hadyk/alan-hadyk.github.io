import { IconWithLabelProps } from "molecules/__typings__/IconWithLabel";
import { UnorderedListProps } from "molecules/__typings__/UnorderedList";

import { TextProps } from "atoms/__typings__/Text";
import { Spacing } from "styles/variables/__typings__/variables";

export interface CompanyDescriptionProps {
  date: string;
  iconsWithLabels: IconWithLabelProps[];
  responsibilities: UnorderedListProps["children"];
  responsibilitiesPaddingBottom?: Spacing;
  textAlign?: TextProps["textAlign"];
  title: string;
}
