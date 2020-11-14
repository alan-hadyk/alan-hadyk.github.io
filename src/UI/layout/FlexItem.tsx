import React, { useCallback } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import isIE11 from "helpers/browser/isIE11";

import {
  FlexItemContainerProps,
  FlexItemProps
} from "UI/layout/__typings__/FlexItem";

const FlexItemContainer = styled.div<FlexItemContainerProps>`
  ${({
    alignSelf,
    display,
    flex,
    height,
    justifyContent,
    order,
    overflow,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    shouldApplyWidth,
    theme: { spacing },
    width
  }): FlattenSimpleInterpolation => css`
    align-self: ${alignSelf};
    display: ${display};
    flex: ${flex};
    height: ${(height in spacing && spacing[height]) || height};
    justify-content: ${justifyContent};
    order: ${order};
    overflow: ${overflow};
    padding-bottom: ${(paddingBottom in spacing && spacing[paddingBottom]) ||
    paddingBottom};
    padding-left: ${(paddingLeft in spacing && spacing[paddingLeft]) ||
    paddingLeft};
    padding-right: ${(paddingRight in spacing && spacing[paddingRight]) ||
    paddingRight};
    padding-top: ${(paddingTop in spacing && spacing[paddingTop]) ||
    paddingTop};

    ${shouldApplyWidth &&
    `
      @media (-ms-high-contrast: none) {
        /* IE10+ CSS */
        flex: none;
        width: ${width};
      }

      @media (-ms-high-contrast: active) {
        /* IE10+ CSS */
        flex: none;
        width: ${width};
      }
    `}
  `};
`;

function FlexItem({
  alignSelf = "auto",
  children,
  className,
  dataCy,
  dataTestId,
  display = "block",
  flex,
  height = "unset",
  justifyContent = "initial",
  order = 0,
  overflow = "auto",
  paddingBottom = "spacing0",
  paddingLeft = "spacing0",
  paddingRight = "spacing0",
  paddingTop = "spacing0",
  shouldApplyWidth = false
}: FlexItemProps): JSX.Element {
  const getWidth: () => string = useCallback((): string => {
    return flex.split(" ").splice(-1)[0];
  }, [flex]);

  return (
    <FlexItemContainer
      alignSelf={alignSelf}
      className={className}
      data-cy={dataCy}
      data-testid={dataTestId || "FlexItem"}
      display={display}
      flex={flex}
      height={height}
      justifyContent={justifyContent}
      order={order}
      overflow={isIE11() ? "hidden" : overflow}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      shouldApplyWidth={shouldApplyWidth}
      width={getWidth()}
    >
      {children}
    </FlexItemContainer>
  );
}

FlexItem.propTypes = {
  alignSelf: PropTypes.oneOf([
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  flex: PropTypes.string.isRequired,
  height: PropTypes.string,
  order: PropTypes.number,
  overflow: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingTop: PropTypes.string
};

export default FlexItem;
