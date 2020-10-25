import { IconProps } from "UI/atoms/__typings__/Icon";
import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

export interface ProjectProps {
  description: string;
  iconsWithLabels: IconWithLabelProps[];
  projectIcon: IconProps["iconName"];
  title: string;
}
