import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Icon from "<atoms>/Icon";
import Text from "<atoms>/Text";
import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";

import { IconProps } from "<atoms>/__typings__/Icon.d.ts";

const animatedIcons: IconProps["iconName"][] = ["react", "javascript", "typescript", "webpack", "node", "apollo", "graphql"];

function AnimatedIcons(): JSX.Element {
  return (
    <FlexContainer alignItems="center" justifyContent="center" height="100%">
      {renderIcons()}
    </FlexContainer>
  );

  function renderIcons(): JSX.Element[] {
    return animatedIcons.map((icon, index): JSX.Element => {
      const animationDelay = `${index * 300}ms`;
      const isEven = index % 2 === 0;

      return (
        <PositionContainer 
          key={icon}
          position="relative"
        >
          <Icon 
            animationDelay={animationDelay}
            animationTime="verySlow"
            height="spacing72"
            iconName={icon} 
            shouldDisplayGlowAnimation={true}
          />
          <PositionContainer 
            bottom={isEven ? "unset" :  "spacing0"}
            left="50%" 
            position="absolute"
            top={isEven ? "spacing0" : "unset"}
            transform={`translateX(-50%) translateY(${isEven ? "-175%" : "175%"})`}
          >
            <Text
              color="blue300"
              fontFamily="AnonymousPro"
              fontSize="font12"
              lineHeight="spacing16"
              textTransform="uppercase"
            >
              {icon}
            </Text>
          </PositionContainer>
        </PositionContainer>
      );
    });
  }
}

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
