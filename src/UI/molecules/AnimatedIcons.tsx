import React, { memo } from "react";
import styled from "styled-components";

import Icon from "<atoms>/Icon";

import { IconProps } from "<atoms>/__typings__/Icon.d.ts";

const animatedIcons: IconProps["iconName"][] = ["react", "javascript", "typescript", "webpack", "node", "apollo", "graphql"];

// GLOW FOR OUTER HEXAGON: 
// filter: drop-shadow(0px 0px ${spacing.spacing4} ${colorPalette.blue100});

const AnimatedIcons = (): JSX.Element => (
  <AnimatedIcons.Container>
    <AnimatedIcons.InnerContainer>
      {animatedIcons.map(icon => <Icon key={icon} iconName={icon} width="spacing72" height="spacing72" />)}
    </AnimatedIcons.InnerContainer>
  </AnimatedIcons.Container>
);

AnimatedIcons.Container = styled.div``;
AnimatedIcons.InnerContainer = styled.div``;
  
export default memo(AnimatedIcons);
