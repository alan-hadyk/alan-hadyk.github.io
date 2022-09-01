import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

import Loader from "UI/molecules/Loader";
import Commit from "UI/molecules/Commit";
import Error from "UI/molecules/Error";
import FlexContainer from "UI/layout/FlexContainer";

import transitionTimes from "styles/variables/transitionTimes";

import {
  ListOfCommitsProps,
  CommitProps
} from "UI/molecules/__typings__/ListOfCommits";

function ListOfCommits({
  commitsList,
  commitsState
}: ListOfCommitsProps): JSX.Element {
  switch (commitsState) {
  case "error":
    return <Error title="Error" description="Github API is offline" />;

  case "loaded":
    return renderCommits(commitsList);

  default:
    return <Loader />;
  }
}

function renderCommits(
  commitsList: ListOfCommitsProps["commitsList"]
): JSX.Element {
  return (
    <FlexContainer
      alignItems="flex-start"
      dataTestId="ListOfCommits"
      flexFlow="column nowrap"
      justifyContent="flex-start"
    >
      {!isEmpty(commitsList) &&
        commitsList.map(
          (
            { commit, html_url, sha }: CommitProps,
            index: number
          ): JSX.Element => {
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
          }
        )}
    </FlexContainer>
  );
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
  commitsState: PropTypes.oneOf(["error", "idle", "loaded", "loading"])
    .isRequired
};

export default ListOfCommits;
