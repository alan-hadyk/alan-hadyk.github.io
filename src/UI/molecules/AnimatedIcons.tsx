import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Icon from "<atoms>/Icon";
import Text from "<atoms>/Text";
import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";

import { IconProps } from "<atoms>/__typings__/Icon.d.ts";

const animatedIcons: IconProps["iconName"][] = ["react", "javascript", "typescript", "webpack", "node", "apollo", "graphql"];

const AnimatedIcons = (): JSX.Element =>  (
  <FlexContainer alignItems="center" justifyContent="center" height="100%">
    {animatedIcons.map((icon, index): JSX.Element => (
      <PositionContainer 
        key={icon}
        position="relative"
      >
        <Icon 
          animationDelay={`${index * 300}ms`}
          animationTime="verySlow"
          height="spacing72"
          iconName={icon} 
          shouldDisplayGlowAnimation={true}
        />
        <PositionContainer 
          bottom={index % 2 === 0 ? "unset" :  "spacing0"}
          left="50%" 
          position="absolute"
          top={index % 2 === 0 ? "spacing0" : "unset"}
          transform={`translateX(-50%) translateY(${index % 2 === 0 ? "-150%" : "150%"})`}
        >
          <Text
            color="blue300"
            fontFamily="AnonymousPro"
            fontSize="font16"
            lineHeight="spacing16"
            textTransform="uppercase"
          >
            {icon}
          </Text>
        </PositionContainer>
      </PositionContainer>
    ))}
  </FlexContainer>
);

AnimatedIcons.Container = styled.div`
  ${({
    theme: {
      spacing: { spacing72 }
    }
  }): FlattenSimpleInterpolation => css`
    height: ${spacing72};
  `}
`;

export default memo(AnimatedIcons);
