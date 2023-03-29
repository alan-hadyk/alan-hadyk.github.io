import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

export enum SkillsItemVariant {
  Full,
  Limited
}

export interface ISkillsItemProps {
  iconsWithLabels: IIconWithLabelProps[];
  title: string;
  variant?: SkillsItemVariant;
}
