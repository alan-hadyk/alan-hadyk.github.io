import { ListItem } from "components/atoms/ListItem/ListItem";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import {
  IUnorderedListProps,
  UnorderedListVariant
} from "components/molecules/UnorderedList/@types/UnorderedList";
import { mapUnorderedListVariantToListItemVariant } from "components/molecules/UnorderedList/config";
import { unorderedListDefaultThemeClasses } from "components/molecules/UnorderedList/styles";

const UnorderedList: React.FC<IUnorderedListProps> = ({
  items,
  variant = UnorderedListVariant.Blue
}) => (
  <LayoutContainer as="ul" themeClasses={unorderedListDefaultThemeClasses}>
    {items.map((item, index: number) => (
      <ListItem
        key={index}
        variant={mapUnorderedListVariantToListItemVariant[variant]}
      >
        {item}
      </ListItem>
    ))}
  </LayoutContainer>
);

export { UnorderedList };
