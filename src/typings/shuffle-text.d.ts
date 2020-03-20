import "shuffle-text";

declare module "shuffle-text" {
  export interface ShuffleTextType {
    duration: number;
    setText: (arg1: string) => void;
    start: VoidFunction;
  }
}