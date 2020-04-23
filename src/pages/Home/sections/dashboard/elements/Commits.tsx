import React, { memo } from "react";

import withCommitsState from "<state>/withCommitsState";

import DashboardElement from "<molecules>/DashboardElement";
import ListOfCommits from "<molecules>/ListOfCommits";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits.d.ts";

export const Commits = ({ commitsList, hasError }: ListOfCommitsProps): JSX.Element => (
  <DashboardElement
    dataTestId="Commits"
    flex="1 1 15.73%"
    shuffleDelay={3600}
    shouldDisplayCorners={hasError}
    title="Commits"
  >
    <ListOfCommits commitsList={commitsList} hasError={hasError} />
  </DashboardElement>
);

export default withCommitsState(memo(Commits));
