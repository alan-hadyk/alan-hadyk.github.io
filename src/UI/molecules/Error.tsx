import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import Text from "UI/atoms/Text";

import { ReactComponent as IconWarning } from "assets/svg/Icon-Warning.svg";

import { ErrorProps } from "UI/molecules/__typings__/Error";

const Error = ({ title, description }: ErrorProps): JSX.Element => (
  <SpacingContainer
    dataTestId="Error"
    paddingBottom="spacing8"
    paddingLeft="spacing8"
    paddingRight="spacing8"
    paddingTop="spacing8"
    height="100%"
  >
    <FlexContainer
      alignItems="center"
      height="100%"
      flexFlow="column nowrap"
      justifyContent="center"
    >
      <Error.Icon data-testid="ErrorIcon" />
      <Text
        fontSize="font24"
        fontWeight="bold"
        lineHeight="spacing24"
        paddingTop="spacing12"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Text
        fontSize="font16"
        lineHeight="spacing24"
        textAlign="center"
        textTransform="uppercase"
      >
        {description}
      </Text>
    </FlexContainer>
  </SpacingContainer>
);

Error.Icon = styled(IconWarning)`
  ${({
    theme: {
      easing: { easeInOut },
      keyframes: { glow },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
    animation-duration: ${transitionTimes.verySlow};
    animation-iteration-count: infinite;
    animation-name: ${glow};
    animation-timing-function: ${easeInOut};
  `};
`;

export default Error;
