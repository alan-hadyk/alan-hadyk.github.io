import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import spacing from "styles/variables/spacing";

import { ColumnsContainerProps } from "UI/layout/__typings__/ColumnsContainer";

const ColumnsContainerWrapper = styled.div<ColumnsContainerProps>`
  ${({
    columnCount,
    columnGap,
    theme: { spacing }
  }): FlattenSimpleInterpolation => css`
    column-count: ${columnCount};
    column-gap: ${(columnGap in spacing && spacing[columnGap]) || columnGap};

    & > * {
      break-inside: avoid-column;
      page-break-inside: avoid;
    }
  `};
`;

const ColumnsContainer = ({
  children,
  columnCount = 1,
  columnGap = spacing.spacing0
}: ColumnsContainerProps): JSX.Element => (
  <ColumnsContainerWrapper
    columnCount={columnCount}
    columnGap={columnGap}
    data-testid={"ColumnsContainer"}
  >
    {children}
  </ColumnsContainerWrapper>
);

ColumnsContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  columnCount: PropTypes.number,
  columnGap: PropTypes.oneOf([...Object.keys(spacing), "unset", "50%", "100%"])
};

export default ColumnsContainer;
