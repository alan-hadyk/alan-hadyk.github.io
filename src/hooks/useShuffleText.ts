import { MutableRefObject, useLayoutEffect } from "react";
import ShuffleText, { ShuffleTextType } from "shuffle-text";

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

export default function useShuffleText({
  onShuffleReady,
  ref,
  shouldInitialize = true,
  shuffleState,
  text
}: UseShuffleText): void {
  useLayoutEffect(() => {
    if (!ref.current || shuffleState || !shouldInitialize) {
      return;
    }

    const shuffle: ShuffleTextType = new ShuffleText(ref.current);
    shuffle.setText(text);

    onShuffleReady({
      start: () => shuffle.start()
    });
  }, [onShuffleReady, ref, text, shuffleState, shouldInitialize]);
}