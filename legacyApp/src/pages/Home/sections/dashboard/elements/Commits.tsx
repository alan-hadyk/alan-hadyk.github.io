import withCommitsState from "state/withCommitsState";

import DashboardElement from "UI/molecules/DashboardElement";
import ListOfCommits from "UI/molecules/ListOfCommits";

import { ListOfCommitsProps } from "UI/molecules/__typings__/ListOfCommits";

export const Commits = ({
  commitsList,
  commitsState
}: ListOfCommitsProps): JSX.Element => (
  <DashboardElement
    dataCy="Commits"
    dataTestId="Commits"
    flex="1 0 20%"
    shouldDisplayCorners={commitsState === "error"}
    title="Commits"
    titleOverflow="hidden"
  >
    <ListOfCommits commitsList={commitsList} commitsState={commitsState} />
  </DashboardElement>
);

export default withCommitsState(Commits);
