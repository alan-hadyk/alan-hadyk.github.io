import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";
import { UnorderedListProps } from "<molecules>/__typings__/UnorderedList.d.ts";

import { TextProps } from "<atoms>/__typings__/Text.d.ts";
import { Spacing } from "<styles>/variables/__typings__/variables";

export interface CompanyDescriptionProps {
  date: string;
  iconsWithLabels: IconWithLabelProps[];
  responsibilities: UnorderedListProps["children"];
  responsibilitiesPaddingBottom?: Spacing;
  textAlign?: TextProps["textAlign"];
  title: string;
}