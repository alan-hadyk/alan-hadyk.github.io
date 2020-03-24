import React, { memo } from "react";

import withCommitsState from "<state>/withCommitsState";

import DashboardElement from "<molecules>/DashboardElement";
import ListOfCommits from "<molecules>/ListOfCommits";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits";

export const Commits = ({ commitsList, hasError }: ListOfCommitsProps): JSX.Element => (
  <DashboardElement
    childrenHeight="22.6vh"
    dataTestId="Commits"
    flex="0 1 16.6%"
    shouldDisplayCorners={hasError}
    title="Commits" 
  >
    <ListOfCommits commitsList={commitsList} hasError={hasError} />
  </DashboardElement>
);
  
export default withCommitsState(memo(Commits));
