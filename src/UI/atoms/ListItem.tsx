import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { ListItemProps } from "<atoms>/__typings__/ListItem.d.ts";

const ListItem = ({ children }: ListItemProps): JSX.Element => (
  <ListItem.Container data-cy="ListItem" data-testid="ListItem">
    {children}
  </ListItem.Container>
);

ListItem.Container = styled.li`
  ${({
    theme: {
      colorPalette: { blue100, blue300 },
      fontSizes: { font20 },
      spacing: { spacing28 }
    }
  }): FlattenSimpleInterpolation => css`
    color: ${blue300};
    font-size: ${font20};
    line-height: ${spacing28};

    strong {
      color: ${blue100};
    }
  `};
`;

export default ListItem;
