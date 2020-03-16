import { useLayoutEffect } from "react";
import CharacterShuffling from "character-shuffling";

import {
  CharacterShufflingState,
  CharacterShufflingOptions,
  UseCharacterShuffling
} from "<hooks>/__typings__/useCharacterShuffling";

export default function useCharacterShuffling({
  characterShufflingState,
  onCharacterShufflingReady,
  ref,
  shouldInitialize = true
}: UseCharacterShuffling): void {
  useLayoutEffect(() => {
    if (!ref.current || characterShufflingState || !shouldInitialize) {
      return;
    }

    const options: CharacterShufflingOptions = {
      chars: "0123456789",
      times: 15
    };

    const charShuffling: CharacterShufflingState = new CharacterShuffling(ref.current, options);

    onCharacterShufflingReady({
      shuffle: () => charShuffling.shuffle()
    });
  }, [characterShufflingState, onCharacterShufflingReady, ref, shouldInitialize]);
}