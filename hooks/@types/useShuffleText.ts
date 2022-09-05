import { MutableRefObject } from "react";

export interface IShuffleState {
  start: VoidFunction;
}

export interface IUseShuffleText {
  duration?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onShuffleReady: any;
  ref: MutableRefObject<HTMLElement> | React.RefObject<HTMLElement> | null;
  shouldInitialize?: boolean;
  shuffleDelay?: number;
  shuffleState: IShuffleState | undefined;
  text: string | number | JSX.Element;
}
