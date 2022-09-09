import {
  createMachine,
  immediate,
  invoke,
  state,
  transition,
  reduce
} from "robot3";
import { createUseMachine } from "robot-hooks";
import { useEffect, useState } from "react";

import { fetchCommits } from "api/fetchCommits";
import { ICommitProps } from "components/molecules/@types/ListOfCommits";
import {
  ICreateMachineContext,
  TCommitsMachine
} from "hooks/@types/useCommits";

const fetchCommitsPromise = (): Promise<ICommitProps[] | Error> =>
  fetchCommits();

const commitsMachine: TCommitsMachine = createMachine(
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
  (): ICreateMachineContext => ({
    commits: []
  })
);

const useMachine = createUseMachine(useEffect, useState);

const useCommits = () => {
  const [current] = useMachine<TCommitsMachine>(commitsMachine);
  const commitsState = current.name;
  const { commits } = current.context;

  return {
    commitsList: commits,
    commitsState
  };
};

export { useCommits };
