import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";
import { UnorderedListProps } from "<molecules>/__typings__/UnorderedList.d.ts";

import { TextProps } from "<atoms>/__typings__/Text.d.ts";

export interface CompanyDescriptionProps {
  date: string;
  iconsWithLabels: IconWithLabelProps[];
  responsibilities: UnorderedListProps["children"];
  textAlign?: TextProps["textAlign"];
  title: string;
}