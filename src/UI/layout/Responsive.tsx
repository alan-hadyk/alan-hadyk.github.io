import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ResponsiveProps
} from "<layout>/__typings__/Responsive.d.ts";

const Responsive = ({
  children,
  dataTestDesktopId,
  dataTestMobileId,
  dataTestTabletId,
  devices
}: ResponsiveProps): JSX.Element => (
  <Fragment>
    {devices.includes("desktop") && (
      <Responsive.Desktop
        data-testid={dataTestDesktopId || "ResponsiveDesktop"}
      >
        {children}
      </Responsive.Desktop>
    )}

    {devices.includes("tablet") && (
      <Responsive.Tablet
        data-testid={dataTestTabletId || "ResponsiveTablet"}
      >
        {children}
      </Responsive.Tablet>
    )}

    {devices.includes("mobile") && (
      <Responsive.Mobile
        data-testid={dataTestMobileId || "ResponsiveMobile"}
      >
        {children}
      </Responsive.Mobile>
    )}

  </Fragment>
);

Responsive.Desktop = styled.div`
  ${({
    theme: {
      breakpoints: { breakpoint1680 }
    }
  }): FlattenSimpleInterpolation => css`
    @media (max-width: ${breakpoint1680}) {
      display: none;
    }
  `}
`;

Responsive.Tablet = styled.div`
  ${({
    theme: {
      breakpoints: {
        breakpoint1280,
        breakpoint1680
      }
    }
  }): FlattenSimpleInterpolation => css`
    @media (max-width: ${breakpoint1280}) {
      display: none;
    }

    @media (min-width: ${breakpoint1680}) {
      display: none;
    }
  `}
`;

Responsive.Mobile = styled.div`
  ${({
    theme: {
      breakpoints: {
        breakpoint1280
      }
    }
  }): FlattenSimpleInterpolation => css`
    @media (min-width: ${breakpoint1280}) {
      display: none;
    }
  `}
`;
  
export default Responsive;
