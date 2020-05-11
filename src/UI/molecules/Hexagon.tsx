import React, {Fragment  } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Cross from "<assets>/svg/Cross.svg";

import {
  HexagonContainerProps,
  HexagonProps
} from "<molecules>/__typings__/Hexagon.d.ts";

function Hexagon ({
  children,
  size = "large"
}: HexagonProps): JSX.Element {
  return (
    <Fragment>
      {size === "large" ? (
        <Hexagon.ContainerWithCross>
          <Hexagon.Top />
          <Hexagon.Bottom />
          {children}
        </Hexagon.ContainerWithCross>
      ) : (
        <Hexagon.Container size={size}>
          {children}
        </Hexagon.Container>
      )}
    </Fragment>
  );
}

Hexagon.Container = styled.div<HexagonContainerProps>`
  ${({
    size,
    theme: {
      colorPalette: { blue300 }
    }
  }): FlattenSimpleInterpolation => css`
    position: relative;

    ${size === "medium" && css`
      background-color: transparent;
      border-left: solid 2px ${blue300};
      border-right: solid 2px ${blue300};
      height: 207.85px;
      margin: 103.92px 0;
      width: 360px; 

      &:before,
      &:after {
        background-color: inherit;
        content: "";
        height: 254.56px;
        position: absolute;
        left: 50.7208px;
        transform: scaleY(0.5774) rotate(-45deg);
        width: 254.56px;
        z-index: 1;
        -webkit-transform: scaleY(0.5774) rotate(-45deg);
        -ms-transform: scaleY(0.5774) rotate(-45deg);
      }

      &:before {
        border-top: solid 2.8284px ${blue300};
        border-right: solid 2.8284px ${blue300};
        top: -127.2792px;
      }

      &:after {
        border-bottom: solid 2.8284px ${blue300};
        border-left: solid 2.8284px ${blue300};
        bottom: -127.2792px;
      }
    `}

    ${size === "small" && css`
      background-color: ${blue300};
      height: 9.24px;
      margin: 4.62px 0;
      width: 16px; 

      &:before,
      &:after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        content: "";
        position: absolute;
        width: 0;
      }

      &:before {
        border-bottom: 4.62px solid ${blue300};
        bottom: 100%;
      }
      
      &:after {
        border-top: 4.62px solid ${blue300};
        top: 100%;
        width: 0;
      }
    `}
  `}
`;

Hexagon.ContainerWithCross = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      spacing: { spacing32 }
    }
  }): FlattenSimpleInterpolation => css`
    background: url(${Cross});
    background-position: center;
    background-repeat: space;
    background-size: ${spacing32} ${spacing32};
    border-left: solid 2px ${blue300};
    border-right: solid 2px ${blue300};
    height: 277.13px;
    margin: 138.56px 0;
    position: relative;
    width: 480px; 

    :after {
      background: inherit;
      content: "";
      height: 274.8187px;
      left: 0;
      position: absolute;
      top: 1.1547px;
      width: 476.0000px;
      z-index: 2;
    }
  `}
`;

const topAndBottomStyles = css`
  // background: inherit;
  height: 339.41px;
  left: 68.29px;
  overflow: hidden;
  position: absolute;
  transform: scaleY(0.5774) rotate(-45deg);
  width: 339.41px;
  z-index: 1;

  &:after {
    background: url(${Cross});
    background-position: inherit;
    content: "";
    height: 119.818728px;
    position: absolute;
    transform-origin: 0 0;
    width: 476.0000px;
  }
`;

Hexagon.Top = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      spacing: { spacing32 }
    }
  }): FlattenSimpleInterpolation => css`
    ${topAndBottomStyles}

    border-right: solid 2.8284px ${blue300};
    border-top: solid 2.8284px ${blue300};
    top: -169.7056px;

    &:after {
      transform: rotate(45deg) scaleY(1.9) translateX(8px) translateY(-137.4094px);
    }
  `}
`;

Hexagon.Bottom = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      spacing: { spacing32 }
    }
  }): FlattenSimpleInterpolation => css`
    ${topAndBottomStyles} 

    border-bottom: solid 2.8284px ${blue300};
    border-left: solid 2.8284px ${blue300};
    bottom: -169.7056px;

    &:after {
      transform: rotate(45deg) scaleY(1.9) translateX(10px) translateY(-1.4094px);
    }
  `}
`;

export default Hexagon;
