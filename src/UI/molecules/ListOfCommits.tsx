import React, { memo, Fragment } from "react";

import FlexContainer from "<layout>/FlexContainer";

import Text from "<atoms>/Text";
import Commit from "<molecules>/Commit";

import { ReactComponent as IconWarning } from "<assets>/svg/Icon-Warning.svg";

import {
  ListOfCommitsProps,
  CommitProps
} from "<molecules>/__typings__/ListOfCommits";

function ListOfCommits({ commitsList, hasError }: ListOfCommitsProps): JSX.Element {
  return hasError ? renderError() : renderCommits();

  function renderCommits(): JSX.Element {
    return (
      <FlexContainer
        alignItems="flex-start"
        dataTestId="ListOfCommits"
        flexFlow="column nowrap"
        justifyContent="flex-start"
      >
        <Fragment>
          {commitsList.length > 0 && commitsList.map(({
            commit,
            // eslint-disable-next-line @typescript-eslint/camelcase
            html_url,
            sha
          }: CommitProps, index: number): JSX.Element => {
            const { author } = commit || {};
            const { date } = author || {};
            const delay = index * 300;
      
            return (
              <Commit
                date={date}
                delay={delay}
                // eslint-disable-next-line @typescript-eslint/camelcase
                htmlUrl={html_url}
                key={sha}
                sha={sha}
              />
            );
          })}
        </Fragment>
      </FlexContainer>
    );
  }

  function renderError(): JSX.Element { 
    return (
      <FlexContainer
        alignItems="center"
        dataTestId="CommitsError"
        height="100%"
        flexFlow="column nowrap"
        justifyContent="center"
      >
        <IconWarning />
        <Text
          fontSize="font24"
          paddingTop="spacing12"
          textTransform="uppercase"
        >
          Error
        </Text>
        <Text
          fontSize="font16"
          paddingTop="spacing12"
          textTransform="uppercase"
        >
          Github API is offline
        </Text>
      </FlexContainer>
    );
  }
}

export default memo(ListOfCommits);