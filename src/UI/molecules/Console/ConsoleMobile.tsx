import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import ConsoleText from "<atoms>/ConsoleText";

import SpacingContainer from "<layout>/SpacingContainer";

const ConsoleMobile = (): JSX.Element => (
  <SpacingContainer
    dataCy="ConsoleMobile"  
    dataTestId="ConsoleMobileSpacingContainer"
    paddingTop="spacing48"
  >
    <ConsoleMobile.Container data-testid="ConsoleMobileContainer">
      <ConsoleText
        dataTestId="ConsoleMobileText"
        fontSize="font32"
        height="spacing36"
        lineHeight="spacing36"
        transform="translateY(5px)"
        width="spacing12"
      />
    </ConsoleMobile.Container>
  </SpacingContainer>
);

ConsoleMobile.Container = styled.div`
  ${({
    theme: {
      colorPalette: { blue100, blue300, blue700 },
      spacing: { spacing8, spacing16 }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${transparentize(0.25, blue700)};
    border: 1px solid ${blue300};
    box-shadow: 0px 0px ${spacing8} 0px ${blue100};
    padding: ${spacing16};
  `}
`;

export default ConsoleMobile;