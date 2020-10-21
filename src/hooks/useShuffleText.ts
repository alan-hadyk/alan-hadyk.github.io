import { useLayoutEffect } from "react";
import ShuffleText, { ShuffleTextType } from "shuffle-text";

import { UseShuffleText } from "<hooks>/__typings__/useShuffleText.d.ts";

export default function useShuffleText({
  duration = 600,
  onShuffleReady,
  ref,
  shouldInitialize = true,
  shuffleDelay = 0,
  shuffleState,
  text
}: UseShuffleText): void {
  useLayoutEffect(() => {
    if (!ref.current || shuffleState || !shouldInitialize) {
      return;
    }

    const shuffle: ShuffleTextType = new ShuffleText(ref.current);

    if (typeof text === "string" || typeof text === "number") {
      shuffle.setText(String(text));
    } else {
      shuffle.setText(String(text.props.children));
    }

    shuffle.duration = duration;

    onShuffleReady({
      start: () => setTimeout(() => shuffle.start(), shuffleDelay)
    });
  }, [
    duration,
    onShuffleReady,
    ref,
    text,
    shuffleState,
    shouldInitialize,
    shuffleDelay
  ]);
}
