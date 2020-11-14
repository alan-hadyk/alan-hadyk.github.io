import React, { useEffect, useState, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import Icon from "UI/atoms/Icon";

import isIE11 from "helpers/browser/isIE11";

import {
  HexagonInnerContainerProps,
  HexagonProps,
  IconDimensionsProps,
  RenderIconArgs
} from "UI/molecules/__typings__/Hexagon";

const HexagonContainer = styled.div`
  position: relative;
`;

const HexagonInnerContainer = styled.div<HexagonInnerContainerProps>`
  ${({
    theme: {
      breakpoints: { breakpoint1281 }
    },
    width
  }): FlattenSimpleInterpolation => css`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${width};

    ${isIE11() &&
    css`
      @media (min-width: ${breakpoint1281}) {
        left: 48%;
        top: 53%;
        width: 90%;
      }
    `}
  `};
`;

function Hexagon({
  children,
  contentWidth = "100%",
  dataCy,
  dataTestId,
  fill = "none"
}: HexagonProps): JSX.Element {
  const [iconDimensions, setIconDimensions] = useState<IconDimensionsProps>({
    height: "",
    width: ""
  });
  const iconRef = useRef(null);

  useEffect(() => {
    const viewBox = iconRef?.current?.attributes?.viewBox?.value;
    const height = viewBox?.split(" ")[3];
    const width = viewBox?.split(" ")[2];

    if (isIE11()) {
      setIconDimensions({
        height: `${height}px`,
        width: `${width}px`
      });
    }
  }, []);

  return (
    <HexagonContainer data-cy={dataCy} data-testid={dataTestId || "Hexagon"}>
      {renderIcon({ fill, iconDimensions, iconRef })}

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
}

export function renderIcon({
  fill,
  iconDimensions,
  iconRef
}: RenderIconArgs): JSX.Element {
  switch (fill) {
  case "pattern":
    return <Icon iconName="hexagonWithPattern" />;
  case "solid":
    return (
      <Icon
        height={isIE11() ? "spacing16" : "auto"}
        iconName="hexagon"
        isActive
        shouldGlow
      />
    );
  case "none":
    return (
      <Icon
        height={iconDimensions.height}
        iconName="hexagon"
        ref={iconRef}
        shouldGlow
        width={iconDimensions.width}
      />
    );
  }
}

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
