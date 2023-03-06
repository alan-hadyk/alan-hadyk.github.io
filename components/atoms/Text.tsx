import { forwardRef, useState, useRef } from "react";

import { useShuffleText } from "hooks/useShuffleText";
import { useInterval } from "hooks/useInterval";

import { ITextProps } from "components/atoms/@types/Text";
import { IShuffleState } from "hooks/@types/useShuffleText";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

import tailwindConfig from "tailwind.config";
const transitionDuration = tailwindConfig.theme.transitionDuration;

const _Text: React.ForwardRefRenderFunction<HTMLDivElement, ITextProps> = (
  {
    children,
    className,
    color = "text-blue300",
    ellipsis = false,
    fontFamily = "font-anonymousPro",
    fontSize = "text-20",
    fontWeight = "font-normal",
    isHoverable = false,
    lineHeight = "leading-1",
    maxHeight,
    overflow = "overflow-visible",
    paddingBottom = "pb-0",
    paddingLeft = "pl-0",
    paddingRight = "pr-0",
    paddingTop = "pt-0",
    shouldShuffle = false,
    shouldShuffleOnHover = false,
    shuffleDelay = 0,
    shuffleInterval = parseInt(transitionDuration.verySlow.replace("ms", "")),
    textAlign = "text-left",
    textTransform = "normal-case",
    width = "w-auto"
  },
  ref
) => {
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

  return (
    <div
      className={trimTemplateLiteral(`
        ${color} ${fontFamily} ${fontSize} ${fontWeight}
        ${lineHeight}
        ${maxHeight}
        ${overflow}
        ${paddingBottom} ${paddingLeft} ${paddingRight} ${paddingTop}
        ${textAlign} ${textTransform}
        ${width}
        transition-all duration-fast ease-in-out
        
        ${ellipsis && "text-ellipsis overflow-hidden whitespace-nowrap"}
        ${color === "text-blue300" && "childrenStrong:text-blue300"}
        ${isHoverable && "hover:text-white"}
        ${className || ""}
      `)}
      onMouseOver={handleMouseOver}
      ref={ref || textElementRef}
    >
      {children}
    </div>
  );
};

const Text = forwardRef<HTMLDivElement, ITextProps>(_Text);

export { Text };
