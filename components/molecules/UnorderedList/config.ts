import { ListItemVariant } from "components/atoms/ListItem/@types/ListItem";
import { UnorderedListVariant } from "components/molecules/UnorderedList/@types/UnorderedList";

export const mapUnorderedListVariantToListItemVariant: Record<
  UnorderedListVariant,
  ListItemVariant
> = {
  [UnorderedListVariant.Blue]: ListItemVariant.Blue,
  [UnorderedListVariant.Dark]: ListItemVariant.Dark
};
