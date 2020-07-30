import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  BackdropProps
} from "<atoms>/__typings__/Backdrop.d.ts";

function Backdrop({
  onClick = () => false
}: BackdropProps): JSX.Element {
  return (
    <Backdrop.Container data-testid="Backdrop" onClick={onClick} />
  );
}

Backdrop.Container = styled.div`
  ${({
    theme: {
      zIndex: { layer9 }
    }
  }): FlattenSimpleInterpolation => css`
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${layer9};
  `}
`;

export default Backdrop;