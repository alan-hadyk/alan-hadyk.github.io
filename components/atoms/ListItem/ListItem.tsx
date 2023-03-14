import { IListItemProps } from "components/atoms/ListItem/@types/ListItem";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { listItemDefaultThemeClasses } from "components/atoms/ListItem/styles";

const ListItem: React.FC<IListItemProps> = ({ children }) => (
  <li className={convertObjectValuesToString(listItemDefaultThemeClasses)}>
    {children}
  </li>
);

export { ListItem };
