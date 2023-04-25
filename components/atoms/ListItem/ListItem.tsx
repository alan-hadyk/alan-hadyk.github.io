import {
  IListItemProps,
  ListItemSize,
  ListItemVariant
} from "components/atoms/ListItem/@types/ListItem";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import {
  mapListItemSizeToStyles,
  mapListItemVariantToStyles
} from "components/atoms/ListItem/styles";
import { IThemeClasses } from "types/theme";

const ListItem: React.FC<IListItemProps> = ({
  children,
  size = ListItemSize.Large,
  variant = ListItemVariant.Blue
}) => {
  const listItemThemeClasses: IThemeClasses = {
    ...mapListItemVariantToStyles[variant],
    ...mapListItemSizeToStyles[size]
  };

  return (
    <li className={convertObjectValuesToString(listItemThemeClasses)}>
      {children}
    </li>
  );
};

export { ListItem };
