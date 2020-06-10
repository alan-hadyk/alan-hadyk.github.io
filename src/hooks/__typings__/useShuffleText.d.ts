import { MutableRefObject } from "react";

export interface ShuffleState {
  start: VoidFunction;
}

export interface UseShuffleText {
  duration?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onShuffleReady: any;
  ref: MutableRefObject<HTMLElement>;
  shouldInitialize?: boolean;
  shuffleDelay?: number;
  shuffleState: ShuffleState | undefined;
  text: string | number | JSX.Element;
}
