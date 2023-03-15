import { useState, useRef } from "react";

import { useShuffleText } from "hooks/useShuffleText";
import { useInterval } from "hooks/useInterval";

import { ITypographyProps } from "components/atoms/Typography/@types/Typography";
import { IShuffleState } from "hooks/@types/useShuffleText";
import { theme } from "theme/theme";
import { typographyDefaultThemeClasses } from "components/atoms/Typography/styles";
import { IThemeClasses, TPseudoClasses } from "types/theme";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";

const Typography: React.FC<ITypographyProps> = ({
  children,
  ellipsis = false,
  isHoverable = false,
  shouldShuffle = false,
  shouldShuffleOnHover = false,
  shuffleDelay = 0,
  shuffleInterval = parseInt(
    theme.transitionDuration.verySlow.replace("ms", "")
  ),
  themeClasses
}) => {
  const [shuffleText, setShuffleText] = useState<IShuffleState | undefined>();
  const textElementRef = useRef<HTMLDivElement>(null);

  useShuffleText({
    onShuffleReady: setShuffleText,
    ref: textElementRef,
    shouldInitialize: shouldShuffleOnHover || shouldShuffle,
    shuffleDelay,
    shuffleState: shuffleText,
    text: children
  });

  useInterval(() => {
    if (!textElementRef.current || !shouldShuffle) {
      return;
    }
    shuffleText && shuffleText.start();
  }, shuffleInterval);

  const handleMouseOver = () => {
    if (!textElementRef.current || !shouldShuffleOnHover) {
      return;
    }

    shuffleText && shuffleText.start();
  };

  const typographyBaseThemeClasses: IThemeClasses = {
    ...typographyDefaultThemeClasses,
    ...themeClasses
  };

  const typographyThemeClasses: IThemeClasses = {
    ...typographyBaseThemeClasses,
    ...(ellipsis && {
      overflow: "overflow-hidden",
      textOverflow: "text-ellipsis",
      whitespace: "whitespace-nowrap"
    }),
    ...(typographyBaseThemeClasses.color === "text-blue300" && {
      pseudoClasses: [
        "childrenStrong:text-blue300",
        ...(typographyBaseThemeClasses?.pseudoClasses
          ? (typographyBaseThemeClasses.pseudoClasses as TPseudoClasses)
          : [])
      ]
    }),
    ...(isHoverable && {
      hover: "hover:text-white"
    })
  };

  return (
    <div
      className={convertObjectValuesToString(typographyThemeClasses)}
      onMouseOver={handleMouseOver}
      ref={textElementRef}
    >
      {children}
    </div>
  );
};
export { Typography };
