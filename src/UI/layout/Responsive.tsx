import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import capitalize from "helpers/strings/capitalize";

import {
  Device,
  ResponsiveContainerProps,
  ResponsiveProps
} from "UI/layout/__typings__/Responsive";

function Responsive(props: ResponsiveProps): JSX.Element {
  const {
    children,
    dataTestId,
    devices,
    height = "auto",
    width = "auto"
  }: ResponsiveProps = props;

  return (
    <Fragment>
      {devices.map(
        (device: Device): JSX.Element => (
          <Responsive.Container
            data-testid={
              props[`dataTest${capitalize(device)}Id`] ||
              dataTestId ||
              `Responsive${capitalize(device)}`
            }
            device={device}
            height={height}
            key={device}
            width={width}
          >
            {children}
          </Responsive.Container>
        )
      )}
    </Fragment>
  );
}

Responsive.Container = styled.div<ResponsiveContainerProps>`
  ${({
    height,
    device,
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

    ${device === "tv" &&
    css`
      @media (min-width: ${breakpoint1681}) {
        display: block;
      }
    `}

    ${device === "desktop" &&
    css`
      @media (min-width: ${breakpoint1281}) and (max-width: ${breakpoint1680}) {
        display: block;
      }
    `}

    ${device === "tablet" &&
    css`
      @media (min-width: ${breakpoint641}) and (max-width: ${breakpoint1280}) {
        display: block;
      }
    `}

    ${device === "mobile" &&
    css`
      @media (max-width: ${breakpoint640}) {
        display: block;
      }
    `}
  `};
`;

export default Responsive;
