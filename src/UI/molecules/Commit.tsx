import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import Text from "<atoms>/Text";
import Link from "<atoms>/Link";

import {
  CommitProps
} from "<molecules>/__typings__/Commit.d.ts";
import FlexItem from "<layout>/FlexItem";

const Commit = ({
  date,
  delay,
  htmlUrl,
  sha
}: CommitProps): JSX.Element => (
  <Commit.Container
    data-testid="Commit"
  >
    <SpacingContainer
      dataTestId="CommitSpacingContainer"
      paddingTop="spacing4"
      paddingBottom="spacing4"
      width="100%"
    >
      <FlexContainer
        alignItems="center"
        dataTestId="CommitFlexContainer"
        flexFlow="row nowrap"
        justifyContent="space-between"
      >
        <FlexItem
          flex="0 0 60.97%"
          overflow="hidden"
        >
          <Link 
            href={htmlUrl}
            isExternal
          >
            <Text
              color="blue100"
              ellipsis
              fontSize="font8"
              shouldShuffle
              shuffleDelay={delay}
              textTransform="uppercase"
            >
              {sha}
            </Text>
          </Link>
        </FlexItem>
        <FlexItem
          flex="0 0 30.66%"
          overflow="hidden"
        >
          <Text
            fontSize="font8"
            ellipsis
          >
            {date}
          </Text>
        </FlexItem>
      </FlexContainer>
    </SpacingContainer>
  </Commit.Container>
);

Commit.Container = styled.div`
  ${({
    theme: {
      colorPalette: { blue400 }
    }
  }): FlattenSimpleInterpolation => css`
    align-items: center;
    border-top: thin solid ${blue400};
    display: none;
    width: 100%;
    
    @media (min-height: 800px)  {
      height: 2.26vh;

      &:nth-child(-n+10) {
        display: flex;
      }
    }

    @media (min-height: 401px) and (max-height: 799px) {
      height: 4.52vh;

      &:nth-child(-n+5) {
        display: flex;
      }
    }

    @media (max-height: 400px) {
      height: 7.53vh;

      &:nth-child(-n+3) {
        display: flex;
      }
    }

    &:first-child {
      border-top: 0;
    }
  `}
`;

export default memo(Commit);
