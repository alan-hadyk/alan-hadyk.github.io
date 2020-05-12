import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";
import { UnorderedListProps } from "<molecules>/__typings__/UnorderedList.d.ts";

export interface CompanyDescriptionProps {
  date: string;
  iconsWithLabels: IconWithLabelProps[];
  responsibilites: UnorderedListProps["children"];
  title: string;
}