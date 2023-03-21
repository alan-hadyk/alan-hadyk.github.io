import { useEffect } from "react";
import ShuffleText, { ShuffleTextType } from "shuffle-text";

import { IUseShuffleText } from "hooks/@types/useShuffleText";
import { ReactElementLike } from "prop-types";

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
    } else if (text) {
      const { props } = text as ReactElementLike;
      shuffle.setText(String(props?.children));
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