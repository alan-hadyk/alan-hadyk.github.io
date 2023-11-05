import { ListItem } from "@app/components/atoms/ListItem/ListItem";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

import { IUnorderedListProps } from "@app/components/molecules/UnorderedList/@types/UnorderedList";
import { unorderedListDefaultThemeClasses } from "@app/components/molecules/UnorderedList/styles";

export const UnorderedList: React.FC<IUnorderedListProps> = ({ items }) => (
  <LayoutContainer as="ul" themeClasses={unorderedListDefaultThemeClasses}>
    {items.map((item, index) => (
      <ListItem key={index}>{item}</ListItem>
    ))}
  </LayoutContainer>
);
