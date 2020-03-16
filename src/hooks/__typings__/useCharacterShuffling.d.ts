import { MutableRefObject } from "react";

export interface CharacterShufflingState {
  shuffle: VoidFunction;
}

export interface CharacterShufflingOptions {
  chars: string;
  times: number;
}

export interface UseCharacterShuffling {
  characterShufflingState: CharacterShufflingState | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCharacterShufflingReady: any;
  ref: MutableRefObject<HTMLElement>;
  shouldInitialize?: boolean;
}
