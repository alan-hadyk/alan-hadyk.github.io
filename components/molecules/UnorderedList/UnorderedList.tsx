import { ListItem } from "components/atoms/ListItem/ListItem";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import { IUnorderedListProps } from "components/molecules/UnorderedList/@types/UnorderedList";
import { unorderedListDefaultThemeClasses } from "components/molecules/UnorderedList/styles";

const UnorderedList: React.FC<IUnorderedListProps> = ({ items }) => (
  <LayoutContainer themeClasses={unorderedListDefaultThemeClasses}>
    {items?.map((item, index: number) =>
      item ? <ListItem key={index}>{item}</ListItem> : null
    )}
  </LayoutContainer>
);

export { UnorderedList };
