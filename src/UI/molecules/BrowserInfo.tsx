import React, { memo } from "react";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import Icon from "<atoms>/Icon";

import { detect } from "detect-browser";

import { IconProps } from "<atoms>/__typings__/Icon.d.ts";

const browserIconsTop: IconProps["iconName"][] = ["chrome", "firefox", "brave", "opera", "safari", "ie"];

function BrowserInfo(): JSX.Element {
  return (
    <SpacingContainer
      dataTestId="BrowserInfo"
      height="100%"
      paddingBottom="1.25vh"
      paddingLeft="1.25vw"
      paddingTop="1.25vh"
      paddingRight="1.25vw"
      width="100%"
    >
      <FlexContainer 
        alignItems="center" 
        dataTestId="BrowserInfoFlexContainer"
        flexFlow="row wrap"
        height="100%"
        justifyContent="space-between"
      >
        {renderIcons()}
      </FlexContainer>
    </SpacingContainer>
  );

  function renderIcons(): JSX.Element[] {
    return browserIconsTop.map((icon): JSX.Element => {
      const { name } = detect();

      const isActive: boolean = icon === "ie" ? name === "ie" || name === "edge" : name === icon;

      return (
        <FlexItem
          flex="0 1 28%"
          height="50%"
          key={icon}
          paddingBottom="4.8%"
          paddingTop="4.8%"
        >
          <Icon 
            animationTime="verySlow"
            height="100%"
            iconName={icon}
            isActive={isActive}
            shouldDisplayGlowAnimation={isActive}
            width="100%"
          />
        </FlexItem>
      );
    });
  }
}

export default memo(BrowserInfo);