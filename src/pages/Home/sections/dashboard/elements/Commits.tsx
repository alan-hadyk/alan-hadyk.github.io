import React, { memo } from "react";

import withCommitsState from "<state>/withCommitsState";

import DashboardElement from "<molecules>/DashboardElement";
import ListOfCommits from "<molecules>/ListOfCommits";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits.d.ts";

export const Commits = ({ commitsList, device, hasError }: ListOfCommitsProps): JSX.Element => {
  const flex = device === "desktop" ? "0 1 15.73%" : "0 1 25%";

  return (
    <DashboardElement
      dataTestId="Commits"
      flex={flex}
      shouldDisplayCorners={hasError}
      title="Commits"
    >
      <ListOfCommits commitsList={commitsList} hasError={hasError} />
    </DashboardElement>
  );
};

export default withCommitsState(memo(Commits));
