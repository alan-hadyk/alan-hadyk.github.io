import { IListItemProps } from "components/atoms/ListItem/@types/ListItem";

export enum UnorderedListVariant {
  Blue,
  Dark
}

export interface IUnorderedListProps {
  items: Array<IListItemProps["children"]>;
  variant?: UnorderedListVariant;
}
