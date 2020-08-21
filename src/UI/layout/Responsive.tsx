import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ResponsiveContainerProps,
  ResponsiveProps
} from "<layout>/__typings__/Responsive.d.ts";

const Responsive = ({
  children,
  dataTestDesktopId,
  dataTestId,
  dataTestMobileId,
  dataTestTabletId,
  devices,
  height = "auto",
  width = "auto"
}: ResponsiveProps): JSX.Element => (
  <Fragment>
    {devices.includes("desktop") && (
      <Responsive.Desktop
        data-testid={dataTestDesktopId || dataTestId || "ResponsiveDesktop"}
        height={height}
        width={width}
      >
        {children}
      </Responsive.Desktop>
    )}

    {devices.includes("tablet") && (
      <Responsive.Tablet
        data-testid={dataTestTabletId || dataTestId || "ResponsiveTablet"}
        height={height}
        width={width}
      >
        {children}
      </Responsive.Tablet>
    )}

    {devices.includes("mobile") && (
      <Responsive.Mobile
        data-testid={dataTestMobileId || dataTestId || "ResponsiveMobile"}
        height={height}
        width={width}
      >
        {children}
      </Responsive.Mobile>
    )}

  </Fragment>
);

Responsive.Desktop = styled.div<ResponsiveContainerProps>`
  ${({
    height,
    theme: {
      breakpoints: { breakpoint1680 }
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${height};
    width: ${width};

    @media (max-width: ${breakpoint1680}) {
      display: none;
    }
  `}
`;

Responsive.Tablet = styled.div<ResponsiveContainerProps>`
  ${({
    height,
    theme: {
      breakpoints: {
        breakpoint1280,
        breakpoint1680
      }
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${height};
    width: ${width};

    @media (max-width: ${breakpoint1280}) {
      display: none;
    }

    @media (min-width: ${breakpoint1680}) {
      display: none;
    }
  `}
`;

Responsive.Mobile = styled.div<ResponsiveContainerProps>`
  ${({
    height,
    theme: {
      breakpoints: {
        breakpoint1280
      }
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${height};
    width: ${width};

    @media (min-width: ${breakpoint1280}) {
      display: none;
    }
  `}
`;

export default Responsive;