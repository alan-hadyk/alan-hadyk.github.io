import { IListItemProps } from "components/atoms/ListItem/@types/ListItem";

export interface IUnorderedListProps {
  items: Array<IListItemProps["children"] | undefined | null>;
}
