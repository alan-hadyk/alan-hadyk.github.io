import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import { ListItemProps } from "UI/atoms/__typings__/ListItem";

const ListItemContainer = styled.li`
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

const ListItem = ({ children }: ListItemProps): JSX.Element => (
  <ListItemContainer data-cy="ListItem" data-testid="ListItem">
    {children}
  </ListItemContainer>
);

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ListItem;
