import { TChildren } from "types/props";

export enum ListItemVariant {
  Blue,
  Dark
}

export interface IListItemProps {
  children: TChildren;
  variant?: ListItemVariant;
}
