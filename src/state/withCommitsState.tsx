import React, { useEffect, useState } from "react";
import {
  createMachine,
  immediate,
  invoke,
  state,
  transition,
  reduce
} from "robot3";
import fetch, { Response } from "node-fetch";
import { createUseMachine } from "robot-hooks";

import { CommitProps } from "UI/molecules/__typings__/Commit";
import {
  CommitsMachine,
  ComponentWithCommitsType,
  CreateMachineContext
} from "state/__typings__/withCommitsState";

async function fetchCommits(): Promise<CommitProps[] | Error> {
  const commits: Response = await fetch(
    "https://api.github.com/repos/alan-hadyk/portfolio/commits"
  );

  const commitsJson: Record<string, unknown> = await commits.json();

  if (!commits.ok || !Array.isArray(commitsJson)) {
    throw new Error(JSON.stringify(commitsJson));
  } else {
    return commitsJson;
  }
}

const fetchCommitsPromise = (): Promise<CommitProps[] | Error> =>
  fetchCommits();

const commitsMachine: CommitsMachine = createMachine(
  "idle",
  {
    error: state(),
    idle: state(immediate("loading")),
    loaded: state(),
    loading: invoke(
      fetchCommitsPromise,
      transition(
        "done",
        "loaded",
        reduce(
          (ctx: Record<string, unknown>, event: Record<string, unknown>) => ({
            ...ctx,
            commits: event.data
          })
        )
      ),
      transition("error", "error")
    )
  },
  (): CreateMachineContext => ({
    commits: []
  })
);

const useMachine = createUseMachine(useEffect, useState);

const withCommitsState = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  WrappedComponent: React.FunctionComponent<any>
): ComponentWithCommitsType => {
  const ComponentWithCommits = (props: unknown): JSX.Element => {
    const [current] = useMachine(commitsMachine);
    const commitsState = current?.name;
    const { commits } = current?.context;

    return (
      <WrappedComponent
        commitsList={commits}
        commitsState={commitsState}
        {...props}
      />
    );
  };

  return ComponentWithCommits;
};

export { fetchCommits, fetchCommitsPromise, commitsMachine };

export default withCommitsState;
