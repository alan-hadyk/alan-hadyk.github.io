import { MutableRefObject } from "react";

export interface ShuffleState {
  start: VoidFunction;
}

export interface UseShuffleText {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onShuffleReady: any;
  ref: MutableRefObject<HTMLElement>;
  shouldInitialize?: boolean;
  shuffleState: ShuffleState | undefined;
  text: string;
}
