import React, { memo } from "react";

import fontSizes from "<styles>/variables/fontSizes";
import SpacingContainer from "<layout>/SpacingContainer";
import Text from "<atoms>/Text";

export interface ButtonTextProps {
  buttonText: string;
  size: "small" | "medium" | "large";
}

type FontSizesKeys = keyof typeof fontSizes;

interface TextProps {
  fontSize: typeof fontSizes[FontSizesKeys];
}

interface ButtonTextContainerProps {
  theme: typeof fontSizes[FontSizesKeys];
}

function ButtonText({ buttonText, size }: ButtonTextProps): JSX.Element {
  const buttonTextProps = mapSizeToButtonTextProps();

  return (
    <SpacingContainer marginRight={size === "small" ? "spacing8" : "spacing16"}>
      <Text {...buttonTextProps} fontFamily="Exan">
        {buttonText}
      </Text>
    </SpacingContainer>

  );

  function mapSizeToButtonTextProps(): TextProps {
    switch (size) {
    case "small":
      return {
        fontSize: "font20"
      };
    case "medium":
      return {
        fontSize: "font24"
      };
    case "large":
      return {
        fontSize: "font28"
      };
    }
  }
}

export default memo(ButtonText);