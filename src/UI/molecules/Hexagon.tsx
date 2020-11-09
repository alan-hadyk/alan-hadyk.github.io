import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import Icon from "UI/atoms/Icon";

import {
  HexagonInnerContainerProps,
  HexagonProps
} from "UI/molecules/__typings__/Hexagon";

const HexagonContainer = styled.div`
  position: relative;
`;

const HexagonInnerContainer = styled.div<HexagonInnerContainerProps>`
  ${({ width }): FlattenSimpleInterpolation => css`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${width};
  `};
`;

const Hexagon = ({
  children,
  contentWidth = "100%",
  dataCy,
  dataTestId,
  fill = "none"
}: HexagonProps): JSX.Element => (
  <HexagonContainer data-cy={dataCy} data-testid={dataTestId || "Hexagon"}>
    {fill === "pattern" ? (
      <Icon iconName="hexagonWithPattern" />
    ) : (
      <Icon iconName="hexagon" isActive={fill === "solid"} shouldGlow />
    )}

    {children && (
      <HexagonInnerContainer
        data-testid="HexagonInnerContainer"
        width={contentWidth}
      >
        {children}
      </HexagonInnerContainer>
    )}
  </HexagonContainer>
);

Hexagon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  contentWidth: PropTypes.string,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  fill: PropTypes.oneOf(["none", "solid", "pattern"])
};

export default Hexagon;
