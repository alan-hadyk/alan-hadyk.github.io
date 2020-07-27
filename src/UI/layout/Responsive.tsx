import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ResponsiveProps
} from "<layout>/__typings__/Responsive.d.ts";

const Responsive = ({
  children,
  device
}: ResponsiveProps): JSX.Element => {
  return renderContent();

  function renderContent(): JSX.Element {
    switch (device) {
    case "desktop":
      return (
        <Responsive.Desktop
          data-testid="ResponsiveDesktop"
        >
          {children}
        </Responsive.Desktop>
      );
    case "tablet":
      return (
        <Responsive.Tablet
          data-testid="ResponsiveTablet"
        >
          {children}
        </Responsive.Tablet>
      );
    case "mobile":
      return (
        <Responsive.Mobile
          data-testid="ResponsiveMobile"
        >
          {children}
        </Responsive.Mobile>
      );
    }
  }
};

Responsive.Desktop = styled.div`
  ${({
    theme: {
      breakpoints: { breakpoint1680 }
    }
  }): FlattenSimpleInterpolation => css`
    height: 100%;
    width: 100%;

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
    height: 100%;
    width: 100%;

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