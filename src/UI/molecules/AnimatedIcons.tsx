import React, { memo } from "react";

import Icon from "<atoms>/Icon";
import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import { IconProps } from "<atoms>/__typings__/Icon.d.ts";

const animatedIcons: IconProps["iconName"][] = ["react", "javascript", "typescript", "webpack", "node", "apollo", "graphql"];

function AnimatedIcons(): JSX.Element {
  return (
    <SpacingContainer
      dataTestId="AnimatedIcons"
      height="100%"
      paddingBottom="spacing8"
      paddingLeft="spacing8"
      paddingRight="spacing8"
      paddingTop="spacing8"
      width="100%"
    >
      <FlexContainer 
        alignItems="center" 
        dataTestId="AnimatedIconsFlexContainer"
        flexFlow="row nowrap"
        height="100%"
        justifyContent="center" 
      >
        {renderIcons()}
      </FlexContainer>
    </SpacingContainer>
  );

  function renderIcons(): JSX.Element[] {
    return animatedIcons.map((icon, index): JSX.Element => {
      const animationDelay = `${index * 300}ms`;

      return (
        <PositionContainer 
          key={icon}
          position="relative"
          width={`${100 / animatedIcons.length}%`}
        >
          <Icon 
            animationDelay={animationDelay}
            animationTime="verySlow"
            height="auto"
            iconName={icon} 
            shouldDisplayGlowAnimation={true}
            width="100%"
          />
        </PositionContainer>
      );
    });
  }
}

export default memo(AnimatedIcons);
