import { IconWithLabelProps } from "molecules/__typings__/IconWithLabel";

export interface Data {
  iconsWithLabels: IconWithLabelProps[];
  title: string;
}

export interface SkillsItemProps {
  data: Data;
}
