import React from "react";

import withCommitsState from "state/withCommitsState";

import DashboardElement from "UI/molecules/DashboardElement";
import ListOfCommits from "UI/molecules/ListOfCommits";

import { ListOfCommitsProps } from "UI/molecules/__typings__/ListOfCommits";

export const Commits = ({
  commitsList,
  hasError
}: ListOfCommitsProps): JSX.Element => (
  <DashboardElement
    dataCy="Commits"
    dataTestId="Commits"
    flex="1 0 20%"
    shouldDisplayCorners={hasError}
    title="Commits"
    titleOverflow="hidden"
  >
    <ListOfCommits commitsList={commitsList} hasError={hasError} />
  </DashboardElement>
);

export default withCommitsState(Commits);
