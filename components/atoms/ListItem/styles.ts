import { ListItemVariant } from "components/atoms/ListItem/@types/ListItem";
import { IThemeClasses } from "types/theme";

export const listItemDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-20",
  lineHeight: "leading-28"
};

export const mapListItemVariantToStyles: Record<
  ListItemVariant,
  IThemeClasses
> = {
  [ListItemVariant.Blue]: {
    color: "text-blue300",
    pseudoClasses: ["childrenStrong:text-blue100"]
  },
  [ListItemVariant.Dark]: {
    color: "text-blue600",
    pseudoClasses: ["childrenStrong:text-blue400"]
  }
};
