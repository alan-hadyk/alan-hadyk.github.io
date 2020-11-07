import { MachineState, Machine } from "robot3";

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
  unknown,
  "idle" | "error" | "loading" | "loaded"
>;
