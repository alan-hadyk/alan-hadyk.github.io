import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import { ResponsiveProps } from "UI/layout/__typings__/Responsive";

const ResponsiveContainer = styled.div<ResponsiveProps>`
  ${({
    height,
    devices,
    theme: {
      breakpoints: {
        breakpoint640,
        breakpoint641,
        breakpoint1280,
        breakpoint1281,
        breakpoint1680,
        breakpoint1681
      }
    },
    width
  }): FlattenSimpleInterpolation => css`
    display: none;
    height: ${height};
    width: ${width};

    ${devices.includes("tv") &&
    css`
      @media (min-width: ${breakpoint1681}) {
        display: block;
      }
    `}

    ${devices.includes("desktop") &&
    css`
      @media (min-width: ${breakpoint1281}) and (max-width: ${breakpoint1680}) {
        display: block;
      }
    `}

    ${devices.includes("tablet") &&
    css`
      @media (min-width: ${breakpoint641}) and (max-width: ${breakpoint1280}) {
        display: block;
      }
    `}

    ${devices.includes("mobile") &&
    css`
      @media (max-width: ${breakpoint640}) {
        display: block;
      }
    `}
  `};
`;

const Responsive = ({
  children,
  dataTestId,
  devices,
  height = "auto",
  width = "auto"
}: ResponsiveProps): JSX.Element => (
  <ResponsiveContainer
    data-testid={dataTestId || "Responsive"}
    devices={devices}
    height={height}
    width={width}
  >
    {children}
  </ResponsiveContainer>
);

Responsive.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  dataTestDesktopId: PropTypes.string,
  dataTestId: PropTypes.string,
  dataTestMobileId: PropTypes.string,
  dataTestTabletId: PropTypes.string,
  dataTestTvId: PropTypes.string,
  devices: PropTypes.arrayOf(
    PropTypes.oneOf(["tv", "desktop", "tablet", "mobile"])
  ).isRequired,
  height: PropTypes.oneOf(["auto", "100%"]),
  width: PropTypes.oneOf(["auto", "100%"])
};

export default Responsive;
