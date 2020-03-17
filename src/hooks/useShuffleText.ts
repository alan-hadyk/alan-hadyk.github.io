import { useLayoutEffect } from "react";
import ShuffleText, { ShuffleTextType } from "shuffle-text";

import { UseShuffleText } from "<hooks>/__typings__/useShuffleText";

export default function useShuffleText({
  onShuffleReady,
  shuffleDelay = 0,
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
      start: () => setTimeout(() => shuffle.start(), shuffleDelay)
    });
  }, [onShuffleReady, ref, text, shuffleState, shouldInitialize]);
}