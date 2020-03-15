import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import ListOfCommits from "<molecules>/ListOfCommits";

export const Commits = (): JSX.Element => (
  <DashboardElement
    childrenHeight="spacing184"
    dataTestId="Commits"
    flex="1 1 25%"
    title="Commits" 
  >
    <ListOfCommits />
  </DashboardElement>
);
  
export default memo(Commits);
