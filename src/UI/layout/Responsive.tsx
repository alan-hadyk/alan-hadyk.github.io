import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ResponsiveProps
} from "<layout>/__typings__/Responsive.d.ts";

const Responsive = ({
  children,
  dataTestDesktopId,
  dataTestMobileId,
  dataTestTVId,
  dataTestTabletId,
  devices
}: ResponsiveProps): JSX.Element => (
  <Fragment>
    {devices.includes("tv") && (
      <Responsive.TV
        data-testid={dataTestTVId || "ResponsiveTV"}
      >
        {children}
      </Responsive.TV>
    )}

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

Responsive.TV = styled.div`
  ${({
    theme: {
      breakpoints: { breakpoint1681 }
    }
  }): FlattenSimpleInterpolation => css`
    display: none;

    @media (min-width: ${breakpoint1681}) {
      display: block;
    }
  `}
`;

Responsive.Desktop = styled.div`
  ${({
    theme: {
      breakpoints: {
        breakpoint1281,
        breakpoint1680
      }
    }
  }): FlattenSimpleInterpolation => css`
    display: none;

    @media (min-width: ${breakpoint1281}) and (max-width: ${breakpoint1680})  {
      display: block;
    }
  `}
`;

Responsive.Tablet = styled.div`
  ${({
    theme: {
      breakpoints: {
        breakpoint641,
        breakpoint1280
      }
    }
  }): FlattenSimpleInterpolation => css`
    display: none;

    @media (min-width: ${breakpoint641}) and (max-width: ${breakpoint1280}) {
      display: block;
    }
  `}
`;

Responsive.Mobile = styled.div`
  ${({
    theme: {
      breakpoints: {
        breakpoint640
      }
    }
  }): FlattenSimpleInterpolation => css`
    display: none;

    @media (max-width: ${breakpoint640}) {
      display: block;
    }
  `}
`;

export default Responsive;