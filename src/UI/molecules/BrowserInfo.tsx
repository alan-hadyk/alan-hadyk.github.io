import React from "react";
import styled from "styled-components";
import { detect } from "detect-browser";

import Icon from "UI/atoms/Icon";
import FlexContainer from "UI/layout/FlexContainer";
import FlexItem from "UI/layout/FlexItem";
import SpacingContainer from "UI/layout/SpacingContainer";

import isSafari from "helpers/browser/isSafari";

import { IconProps } from "UI/atoms/__typings__/Icon";

const BROWSER_ICONS: IconProps["iconName"][] = [
  "chrome",
  "firefox",
  "ie",
  "opera",
  "safari",
  "unknown"
];

function BrowserInfo(): JSX.Element {
  return (
    <SpacingContainer
      dataTestId="BrowserInfo"
      height="100%"
      paddingBottom="1.25vh"
      paddingLeft="1.25vw"
      paddingRight="1.25vw"
      paddingTop="1.25vh"
      width="100%"
    >
      <BrowserInfo.IconsContainer data-testid="BrowserInfoIconsContainer">
        <FlexContainer
          alignItems="center"
          dataTestId="BrowserInfoFlexContainer"
          flexFlow="row wrap"
          height="100%"
          justifyContent="space-between"
        >
          {renderIcons()}
        </FlexContainer>
      </BrowserInfo.IconsContainer>
    </SpacingContainer>
  );

  function renderIcons(): JSX.Element[] {
    return BROWSER_ICONS.map(
      (icon: IconProps["iconName"]): JSX.Element => {
        const { name } = detect();

        const isUnknown = !BROWSER_ICONS.find(
          (icon: IconProps["iconName"]) => icon === name
        );
        const isActive: boolean =
          icon === "ie" ? name === "ie" || name === "edge" : name === icon;

        return (
          <FlexItem
            className={isActive ? "isActive" : "isInactive"}
            display={isSafari() ? "flex" : "block"}
            flex="0 1 28%"
            height="50%"
            justifyContent={isSafari() ? "center" : "initial"}
            overflow={isSafari() ? "hidden" : "visible"}
            key={icon}
            paddingBottom="4.8%"
            paddingTop="4.8%"
          >
            <Icon
              animationTime="verySlow"
              height={isSafari() ? "4vh" : "100%"}
              iconName={icon}
              isActive={isActive || isUnknown}
              isResponsive
              overflow={isSafari() ? "hidden" : "visible"}
              width={isSafari() ? "4vh" : "100%"}
            />
          </FlexItem>
        );
      }
    );
  }
}

BrowserInfo.IconsContainer = styled.div`
  height: 100%;

  @media (max-height: 640px) {
    .isInactive {
      display: none;
    }

    .isActive {
      display: block;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

export default BrowserInfo;
