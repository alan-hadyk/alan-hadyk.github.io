import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import ListItem from "UI/atoms/ListItem";

import { UnorderedListProps } from "UI/molecules/__typings__/UnorderedList";
import { ListItemProps } from "UI/atoms/__typings__/ListItem";

const UnorderedListContainer = styled.ul`
  ${({
    theme: {
      colorPalette: { blue100 },
      spacing: { spacing8, spacing10, spacing16 }
    }
  }): FlattenSimpleInterpolation => css`
    list-style-type: none;

    li {
      align-items: flex-start;
      display: flex;
      margin-bottom: ${spacing16};

      &::before {
        background: ${blue100};
        border-radius: 50%;
        content: "";
        display: inline-block;
        height: ${spacing8};
        margin-right: ${spacing8};
        margin-top: ${spacing10};
        min-height: ${spacing8};
        min-width: ${spacing8};
        width: ${spacing8};
      }
    }
  `};
`;

const UnorderedList = ({ items }: UnorderedListProps): JSX.Element => (
  <UnorderedListContainer data-cy="UnorderedList" data-testid="UnorderedList">
    {items.map(
      (item: ListItemProps["children"], index: number): JSX.Element => (
        <ListItem key={index}>{item}</ListItem>
      )
    )}
  </UnorderedListContainer>
);

UnorderedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string
    ])
  ).isRequired
};

export default UnorderedList;
