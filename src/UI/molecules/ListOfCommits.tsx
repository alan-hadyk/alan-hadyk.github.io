import React, { memo } from "react";

import FlexContainer from "<layout>/FlexContainer";

import Commit from "<molecules>/Commit";

import {
  ListOfCommitsProps,
  CommitProps
} from "<molecules>/__typings__/ListOfCommits";

function ListOfCommits({ commitsList }: ListOfCommitsProps): JSX.Element {
  return (
    <FlexContainer
      alignItems="flex-start"
      dataTestId="ListOfCommits"
      flexFlow="column nowrap"
      justifyContent="flex-start"
    >
      {renderCommits()}
    </FlexContainer>
  );

  function renderCommits(): JSX.Element[] {
    return commitsList && commitsList.map(({
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
    });
  }
}

export default memo(ListOfCommits);