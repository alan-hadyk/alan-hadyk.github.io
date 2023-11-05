import { IListItemProps } from "@app/components/atoms/ListItem/@types/ListItem";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { listItemDefaultThemeClasses } from "@app/components/atoms/ListItem/styles";

export const ListItem: React.FC<IListItemProps> = ({ children }) => (
  <li className={convertObjectValuesToString(listItemDefaultThemeClasses)}>
    {children}
  </li>
);
