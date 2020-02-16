import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Link from "<atoms>/Link";

import { ReactComponent as LogoImage } from "<assets>/svg/Logo.svg";

const Logo = (): JSX.Element => (
  <Link 
    height="100%"
    href="/"
  >
    <Logo.Image />
  </Link>
);

Logo.Image = styled(LogoImage)`
  ${({
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    height: ${spacing.spacing48};
    width: auto;
  `}
`;
  
export default memo(Logo);