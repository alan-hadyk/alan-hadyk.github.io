import React, { memo, Fragment } from "react";

import FlexContainer from "<layout>/FlexContainer";

import Commit from "<molecules>/Commit";
import Error from "<molecules>/Error";

import transitionTimes from "<styles>/variables/transitionTimes";

import {
  ListOfCommitsProps,
  CommitProps
} from "<molecules>/__typings__/ListOfCommits.d.ts";

import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";

function ListOfCommits({ commitsList, hasError }: ListOfCommitsProps): JSX.Element {
  return hasError ? (
    <Error
      title="Error"
      description="Github API is offline"
    />
  ) : renderCommits();

  function renderCommits(): JSX.Element {
    return (
      <FlexContainer
        alignItems="flex-start"
        dataTestId="ListOfCommits"
        flexFlow="column nowrap"
        justifyContent="flex-start"
      >
        <Fragment>
          {!isEmpty(commitsList) && commitsList.map(({
            commit,
            // eslint-disable-next-line @typescript-eslint/camelcase
            html_url,
            sha
          }: CommitProps, index: number): JSX.Element => {
            const { author } = commit || {};
            const { date } = author || {};
            const delay = index * parseInt(transitionTimes.default);
      
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
}

const areEqual = (prevProps: ListOfCommitsProps, nextProps: ListOfCommitsProps): boolean => {
  return isEqual(prevProps.commitsList, nextProps.commitsList) && prevProps.hasError === nextProps.hasError;
};

export default memo(ListOfCommits, areEqual);