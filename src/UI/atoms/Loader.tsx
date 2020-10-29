import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize, radialGradient } from "polished";

// import { LoaderProps } from "UI/atoms/__typings__/Loader";
import Icon from "UI/atoms/Icon";
// import Hexagon from "UI/molecules/Hexagon";

const Loader = (): JSX.Element => (
  <Loader.Wrapper>
    <Icon
      iconName="brandGithub"
      height="100%"
      shouldDisplayGlowAnimation
      isHeightResponsive
    />
    {/* <Loader.Container /> */}
  </Loader.Wrapper>
);

Loader.Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

Loader.Container = styled.div`
  ${({
    theme: {
      colorPalette: { blue200, blue300 },
      keyframes: { ripple },
      spacing,
      transitionTimes: { slow }
    }
  }): FlattenSimpleInterpolation => css`
    animation-duration: ${slow};
    animation-iteration-count: infinite;
    animation-name: ${ripple};
    ${radialGradient({
    // eslint-disable-next-line indent
      colorStops: [
      `${transparentize(0.5, blue300)} 0%`,
      `${transparentize(1, blue200)} 50%`
    ],
    // eslint-disable-next-line indent
      extent: `farthest-corner at ${spacing.spacing12} ${spacing.spacing12}`,
    // eslint-disable-next-line indent
      position: "center",
    // eslint-disable-next-line indent
      shape: "ellipse"
    // eslint-disable-next-line indent
    })} border-radius: 50%;
    height: ${spacing.spacing24};
    margin-left: -${spacing.spacing12};
    margin-top: -${spacing.spacing12};
    opacity: 0;
    position: absolute;
    width: ${spacing.spacing24};
  `}
`;

Loader.Border = styled.div`
  ${({
    theme: {
      colorPalette: { blue700 },
      spacing: { spacing2 }
    }
  }): FlattenSimpleInterpolation => css`
    background: ${blue700};
    clip-path: polygon(0% 50%, 25% 95%, 75% 95%, 100% 50%, 75% 5%, 25% 5%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    height: calc(100% - ${spacing2});
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - ${spacing2});
  `}
`;

Loader.Content = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      transitionTimes: { slow }
    }
  }): FlattenSimpleInterpolation => css`
    animation: contentAnimation ${slow} infinite linear;
    background: ${blue300};
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform-origin: center top;
    width: 150%;

    @keyframes contentAnimation {
      0% {
        transform: translateX(-50%) rotate(0deg);
      }
      100% {
        transform: translateX(-50%) rotate(-360deg);
      }
    }
  `}
`;

export default Loader;
