import {
  IListItemProps,
  ListItemVariant
} from "components/atoms/ListItem/@types/ListItem";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import {
  listItemDefaultThemeClasses,
  mapListItemVariantToStyles
} from "components/atoms/ListItem/styles";
import { IThemeClasses } from "types/theme";

const ListItem: React.FC<IListItemProps> = ({
  children,
  variant = ListItemVariant.Blue
}) => {
  const listItemThemeClasses: IThemeClasses = {
    ...listItemDefaultThemeClasses,
    ...mapListItemVariantToStyles[variant]
  };

  return (
    <li className={convertObjectValuesToString(listItemThemeClasses)}>
      {children}
    </li>
  );
};

export { ListItem };
