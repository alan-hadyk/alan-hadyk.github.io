import PropTypes from "prop-types";

import { ListItem } from "components/atoms/ListItem";
import { LayoutContainer } from "components/layout/LayoutContainer";

import { IUnorderedListProps } from "components/molecules/@types/UnorderedList";
import { IListItemProps } from "components/atoms/@types/ListItem";
import { childrenPropTypes } from "helpers/propTypes/children";
import { TChildren } from "types/props";

const UnorderedList: React.FC<IUnorderedListProps> = ({ items }) => (
  <LayoutContainer
    className={`
      list-none

      childrenLi:items-start childrenLi:flex
      childrenLi:mb-16

      childrenLi:before:bg-blue100
      childrenLi:before:rounded-full
      childrenLi:before:content-['']
      childrenLi:before:inline-block
      childrenLi:before:h-8
      childrenLi:before:mr-8
      childrenLi:before:mt-10
      childrenLi:before:min-h-8
      childrenLi:before:min-w-8
      childrenLi:before:w-8
    `}
    dataCy="UnorderedList"
  >
    {items?.map(
      (item: IListItemProps["children"] | undefined | null, index: number) =>
        item ? <ListItem key={index}>{item}</ListItem> : null
    )}
  </LayoutContainer>
);

UnorderedList.propTypes = {
  items: PropTypes.arrayOf<TChildren | undefined | null>(childrenPropTypes)
    .isRequired
};

export { UnorderedList };
