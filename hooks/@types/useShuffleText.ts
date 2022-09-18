import { MutableRefObject } from "react";
import { TChildren } from "types/props";

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
  text: TChildren;
}
