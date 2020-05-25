import { IconProps } from "<atoms>/__typings__/Icon.d.ts";
import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

export interface ProjectProps {
  description: string;
  iconName: IconProps["iconName"];
  iconsWithLabels: IconWithLabelProps[];
  title: string;
}