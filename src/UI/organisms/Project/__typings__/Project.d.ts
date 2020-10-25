import { IconProps } from "atoms/__typings__/Icon";
import { IconWithLabelProps } from "molecules/__typings__/IconWithLabel";

export interface ProjectProps {
  description: string;
  iconsWithLabels: IconWithLabelProps[];
  projectIcon: IconProps["iconName"];
  title: string;
}
