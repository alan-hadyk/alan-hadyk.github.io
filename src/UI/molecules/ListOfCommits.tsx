import React, { memo } from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";

import Commit from "<molecules>/Commit";
import Error from "<molecules>/Error";

import transitionTimes from "<styles>/variables/transitionTimes";

import FlexContainer from "<layout>/FlexContainer";

import {
  ListOfCommitsProps,
  CommitProps
} from "<molecules>/__typings__/ListOfCommits.d.ts";

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
        {!isEmpty(commitsList) && commitsList.map(({
          commit,
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
              htmlUrl={html_url}
              key={sha}
              sha={sha}
            />
          );
        })}
      </FlexContainer>
    );
  }
}

ListOfCommits.propTypes = {
  commitsList: PropTypes.arrayOf(
    PropTypes.shape({
      commit: PropTypes.shape({
        author: PropTypes.shape({
          date: PropTypes.string
        })
      }),
      html_url: PropTypes.string,
      sha: PropTypes.string
    })
  ).isRequired,
  hasError: PropTypes.bool.isRequired
};

const arePropsEqual = (prevProps: ListOfCommitsProps, nextProps: ListOfCommitsProps): boolean =>
  isEqual(prevProps.commitsList, nextProps.commitsList) && prevProps.hasError === nextProps.hasError;

export default memo(ListOfCommits, arePropsEqual);