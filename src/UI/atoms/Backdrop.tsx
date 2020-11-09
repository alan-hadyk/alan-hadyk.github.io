import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import { BackdropProps } from "UI/atoms/__typings__/Backdrop";

const BackdropContainer = styled.div`
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
  `};
`;

const Backdrop = ({ onClick }: BackdropProps): JSX.Element => (
  <BackdropContainer data-testid="Backdrop" onClick={onClick} />
);

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Backdrop;
