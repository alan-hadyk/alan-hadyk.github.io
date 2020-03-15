import React, { memo } from "react";

import withCommitsState from "<state>/withCommitsState";

import FlexContainer from "<layout>/FlexContainer";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits";

function ListOfCommits({ commitsList }: ListOfCommitsProps): JSX.Element {
  console.log("commitsList", commitsList);

  return (
    <FlexContainer
      alignItems="flex-start"
      dataTestId="DashboardSectionFlexContainerr"
      flexFlow="column nowrap"
      gap="spacing48"
      height="spacing220"
      justifyContent="center"
    >
      {renderCommits()}
    </FlexContainer>
  );

  function renderCommits(): JSX.Element[] {
    return commitsList && commitsList.map(({
      sha
    }: any): JSX.Element => (
      <FlexContainer
        key={sha}
        alignItems="flex-start"
        dataTestId="DashboardSectionFlexContainerr"
        flexFlow="row nowrap"
        gap="spacing4"
        height="spacing16"
        justifyContent="center"
      >
        <span>{sha}</span>
      </FlexContainer>
    ));
  }
}

export default withCommitsState(memo(ListOfCommits));