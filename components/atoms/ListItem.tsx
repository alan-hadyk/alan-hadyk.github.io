import PropTypes from "prop-types";

import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

import { IListItemProps } from "components/atoms/@types/ListItem";

const ListItem: React.FC<IListItemProps> = ({ children }) => (
  <li
    className={trimTemplateLiteral(`
      text-blue300
      text-20
      leading-28

      childrenStrong:text-blue100
    `)}
    data-cy="ListItem"
  >
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export { ListItem };
