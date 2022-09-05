import { useEffect } from "react";
import ShuffleText, { ShuffleTextType } from "shuffle-text";

import { IUseShuffleText } from "hooks/@types/useShuffleText";

const useShuffleText = ({
  duration = 600,
  onShuffleReady,
  ref,
  shouldInitialize = true,
  shuffleDelay = 0,
  shuffleState,
  text
}: IUseShuffleText): void => {
  useEffect(() => {
    if ((ref && !ref.current) || shuffleState || !shouldInitialize) {
      return;
    }

    const shuffle: ShuffleTextType | null =
      ref && ref.current && new ShuffleText(ref.current);

    if (!shuffle) {
      return;
    }

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
};

export { useShuffleText };
