import Icon from "UI/atoms/Icon";
import FlexContainer from "UI/layout/FlexContainer";
import PositionContainer from "UI/layout/PositionContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import isSafari from "helpers/browser/isSafari";

import { IconProps } from "UI/atoms/__typings__/Icon";

const animatedIcons: IconProps["iconName"][] = [
  "react",
  "javascript",
  "typescript",
  "webpack",
  "node",
  "apollo",
  "graphql"
];

const AnimatedIcons = (): JSX.Element => (
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
  return animatedIcons.map(
    (icon: IconProps["iconName"]): JSX.Element => (
      <PositionContainer
        height={isSafari() ? "auto" : "100%"}
        key={icon}
        position="relative"
        width={`${100 / animatedIcons.length}%`}
      >
        <Icon
          height={isSafari() ? "8vh" : "100%"}
          iconName={icon}
          isResponsive
          width={isSafari() ? "8vh" : "100%"}
        />
      </PositionContainer>
    )
  );
}

export default AnimatedIcons;
