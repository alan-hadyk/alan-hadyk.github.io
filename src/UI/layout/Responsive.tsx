import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ResponsiveContainerProps,
  ResponsiveProps
} from "<layout>/__typings__/Responsive.d.ts";

const Responsive = ({
  children,
  dataTestDesktopId,
  dataTestMobileId,
  dataTestTVId,
  dataTestTabletId,
  devices,
  height = "auto",
  width = "auto"
}: ResponsiveProps): JSX.Element => (
  <Fragment>
    {devices.includes("tv") && (
      <Responsive.TV
        data-testid={dataTestTVId || "ResponsiveTV"}
        height={height}
        width={width}
      >
        {children}
      </Responsive.TV>
    )}

    {devices.includes("desktop") && (
      <Responsive.Desktop
        data-testid={dataTestDesktopId || "ResponsiveDesktop"}
        height={height}
        width={width}
      >
        {children}
      </Responsive.Desktop>
    )}

    {devices.includes("tablet") && (
      <Responsive.Tablet
        data-testid={dataTestTabletId || "ResponsiveTablet"}
        height={height}
        width={width}
      >
        {children}
      </Responsive.Tablet>
    )}

    {devices.includes("mobile") && (
      <Responsive.Mobile
        data-testid={dataTestMobileId || "ResponsiveMobile"}
        height={height}
        width={width}
      >
        {children}
      </Responsive.Mobile>
    )}

  </Fragment>
);

Responsive.TV = styled.div<ResponsiveContainerProps>`
  ${({
    height,
    theme: {
      breakpoints: { breakpoint1681 }
    },
    width
  }): FlattenSimpleInterpolation => css`
    display: none;
    height: ${height};
    width: ${width};

    @media (min-width: ${breakpoint1681}) {
      display: block;
    }
  `}
`;

Responsive.Desktop = styled.div<ResponsiveContainerProps>`
  ${({
    height,
    theme: {
      breakpoints: {
        breakpoint1281,
        breakpoint1680
      }
    },
    width
  }): FlattenSimpleInterpolation => css`
    display: none;
    height: ${height};
    width: ${width};

    @media (min-width: ${breakpoint1281}) and (max-width: ${breakpoint1680})  {
      display: block;
    }
  `}
`;

Responsive.Tablet = styled.div<ResponsiveContainerProps>`
  ${({
    height,
    theme: {
      breakpoints: {
        breakpoint641,
        breakpoint1280
      }
    },
    width
  }): FlattenSimpleInterpolation => css`
    display: none;
    height: ${height};
    width: ${width};

    @media (min-width: ${breakpoint641}) and (max-width: ${breakpoint1280}) {
      display: block;
    }
  `}
`;

Responsive.Mobile = styled.div<ResponsiveContainerProps>`
  ${({
    height,
    theme: {
      breakpoints: {
        breakpoint640
      }
    },
    width
  }): FlattenSimpleInterpolation => css`
    display: none;
    height: ${height};
    width: ${width};

    @media (max-width: ${breakpoint640}) {
      display: block;
    }
  `}
`;

export default Responsive;