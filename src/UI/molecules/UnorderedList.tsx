import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import ListItem from "<atoms>/ListItem";

import { UnorderedListProps } from "<molecules>/__typings__/UnorderedList.d.ts";
import { ListItemProps } from "<atoms>/__typings__/ListItem.d.ts";

const UnorderedList = ({ items }: UnorderedListProps): JSX.Element => (
  <UnorderedList.Container data-testid="UnorderedList">
    {items.map((item: ListItemProps["children"], index: number): JSX.Element => (
      <ListItem key={index}>{item}</ListItem>
    ))}
  </UnorderedList.Container>
);

UnorderedList.Container = styled.ul`
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
        content: '';
        display: inline-block;
        height: ${spacing8};
        margin-right: ${spacing8};
        margin-top: ${spacing10};
        width: ${spacing8};
      }
    }
  `}
`;
  
export default UnorderedList;