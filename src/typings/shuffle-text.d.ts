import "shuffle-text";

declare module "shuffle-text" {
  export interface ShuffleTextType {
    setText: (arg1: string) => void;
    start: VoidFunction;
  }
}