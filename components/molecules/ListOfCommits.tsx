import isEmpty from "lodash/isEmpty";

import { Loader } from "components/molecules/Loader";
import { Commit } from "components/molecules/Commit";
import { Error } from "components/molecules/Error";
import { IListOfCommitsProps } from "components/molecules/@types/ListOfCommits";
import { LayoutContainer } from "components/layout/LayoutContainer";

const ListOfCommits: React.FC<IListOfCommitsProps> = ({
  commitsList,
  commitsState
}) => {
  switch (commitsState) {
    case "error":
      return <Error title="Error" description="Github API is offline" />;

    case "loaded":
      return (
        <LayoutContainer
          alignItems="items-start"
          display="flex"
          flexFlow="flex-col flex-nowrap"
          justifyContent="justify-start"
        >
          {!isEmpty(commitsList) &&
            commitsList
              ?.filter((item) => item)
              ?.map((item, index: number): JSX.Element | null => {
                const { commit, html_url, sha } = item || {};
                const { author } = commit || {};
                const { date } = author || {};
                const delay = index * 300;

                return date && html_url && sha ? (
                  <Commit
                    date={date}
                    delay={delay}
                    htmlUrl={html_url}
                    key={sha}
                    sha={sha}
                  />
                ) : null;
              })}
        </LayoutContainer>
      );

    default:
      return <Loader />;
  }
};

export { ListOfCommits };
