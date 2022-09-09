import { MachineState, Machine } from "robot3";

import { ICommitProps } from "components/molecules/@types/Commit";

export interface IContext {
  commits: ICommitProps[];
}

export type IComponentWithCommitsType = (props: unknown) => JSX.Element;

export interface ICreateMachineContext {
  commits: [];
}

export type TCommitsMachine = Machine<
  {
    error: MachineState;
    idle: MachineState;
    loaded: MachineState;
    loading: MachineState;
  },
  IContext,
  "idle" | "error" | "loading" | "loaded"
>;
