import { IListItemProps } from "components/atoms/@types/ListItem";

export interface IUnorderedListProps {
  items: Array<IListItemProps["children"] | undefined | null>;
}
