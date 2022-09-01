import { MachineState, Machine } from "robot3";

import { CommitProps } from "UI/molecules/__typings__/Commit";

export interface IContext {
  commits: CommitProps[];
}

export type ComponentWithCommitsType = (props: unknown) => JSX.Element;

export interface CreateMachineContext {
  commits: [];
}

export type CommitsMachine = Machine<
  {
    error: MachineState;
    idle: MachineState;
    loaded: MachineState;
    loading: MachineState;
  },
  IContext,
  "idle" | "error" | "loading" | "loaded"
>;
