import { IListItemProps } from "@app/components/atoms/ListItem/@types/ListItem";

export interface IUnorderedListProps {
  items: Array<IListItemProps["children"]>;
}
