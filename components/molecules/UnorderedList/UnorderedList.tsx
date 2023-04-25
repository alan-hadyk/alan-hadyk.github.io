import { ListItem } from "components/atoms/ListItem/ListItem";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import {
  IUnorderedListProps,
  UnorderedListSize,
  UnorderedListVariant
} from "components/molecules/UnorderedList/@types/UnorderedList";
import {
  mapUnorderedListSizeToListItemSize,
  mapUnorderedListVariantToListItemVariant
} from "components/molecules/UnorderedList/config";
import {
  mapUnorderedListSizeToPseudoClasses,
  unorderedListDefaultThemeClasses
} from "components/molecules/UnorderedList/styles";
import { IThemeClasses } from "types/theme";

const UnorderedList: React.FC<IUnorderedListProps> = ({
  items,
  size = UnorderedListSize.Large,
  variant = UnorderedListVariant.Blue
}) => {
  const unorderedListThemeClasses: IThemeClasses = {
    ...unorderedListDefaultThemeClasses,
    pseudoClasses: mapUnorderedListSizeToPseudoClasses[size]
  };

  return (
    <LayoutContainer as="ul" themeClasses={unorderedListThemeClasses}>
      {items.map((item, index: number) => (
        <ListItem
          key={index}
          size={mapUnorderedListSizeToListItemSize[size]}
          variant={mapUnorderedListVariantToListItemVariant[variant]}
        >
          {item}
        </ListItem>
      ))}
    </LayoutContainer>
  );
};

export { UnorderedList };
