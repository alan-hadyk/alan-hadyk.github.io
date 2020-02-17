import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Link from "<atoms>/Link";

import { ReactComponent as LogoImage } from "<assets>/svg/Logo.svg";

/*
- Convert this component to LinkWithIcon
- Add icon prop, which will apply specific icon
*/

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
      spacing: { spacing48 }
    }
  }): FlattenSimpleInterpolation => css`
    height: ${spacing48};
    width: auto;
  `}
`;
  
export default memo(Logo);