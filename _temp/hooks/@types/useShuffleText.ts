import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { TChildren } from "types/props";

export interface IShuffleState {
  start: VoidFunction;
}

export interface IUseShuffleTextArgs {
  duration?: number;
  onShuffleReady: Dispatch<SetStateAction<IShuffleState | undefined>>;
  ref: MutableRefObject<HTMLElement | null>;
  shouldInitialize?: boolean;
  shuffleDelay?: number;
  shuffleState: IShuffleState | undefined;
  text: TChildren;
}
