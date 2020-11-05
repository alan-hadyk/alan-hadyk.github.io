import React, { useEffect, useState, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Icon from "UI/atoms/Icon";

import {
  HexagonInnerContainerProps,
  HexagonProps
} from "UI/molecules/__typings__/Hexagon";

import isIE11 from "helpers/browser/isIE11";

const Hexagon = ({
  children,
  contentWidth = "100%",
  dataCy,
  dataTestId,
  fill = "none"
}: HexagonProps): JSX.Element => {
  const [iconWidth, setIconWidth] = useState<string>("");
  const [iconHeight, setIconHeight] = useState<string>("");
  const iconRef = useRef(null);

  useEffect(() => {
    const viewBox = iconRef?.current?.attributes?.viewBox.value;
    const viewBoxWidth = viewBox?.split(" ")[2];
    const viewBoxHeight = viewBox?.split(" ")[3];

    if (isIE11()) {
      setIconWidth(`${viewBoxWidth}px`);
      setIconHeight(`${viewBoxHeight}px`);
    }
  }, []);

  return (
    <Hexagon.Container data-cy={dataCy} data-testid={dataTestId || "Hexagon"}>
      {renderIcon()}

      {children && (
        <Hexagon.InnerContainer
          data-testid="HexagonInnerContainer"
          width={contentWidth}
        >
          {children}
        </Hexagon.InnerContainer>
      )}
    </Hexagon.Container>
  );

  function renderIcon(): JSX.Element {
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
          height={iconHeight}
          iconName="hexagon"
          ref={iconRef}
          shouldGlow
          width={iconWidth}
        />
      );
    }
  }
};

Hexagon.Container = styled.div`
  position: relative;
`;

Hexagon.InnerContainer = styled.div<HexagonInnerContainerProps>`
  ${({ width }): FlattenSimpleInterpolation => css`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${width};
  `};
`;

export default Hexagon;
