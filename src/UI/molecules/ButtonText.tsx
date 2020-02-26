import React, { memo } from "react";

import SpacingContainer from "<layout>/SpacingContainer";
import Text from "<atoms>/Text";

import {
  ButtonTextProps,
  MapSizeToButtonTextProps,
  TextProps
} from "<molecules>/__typings__/ButtonText";

const mapSizeToButtonTextProps: MapSizeToButtonTextProps = {
  large: { fontSize: "font28" },
  medium: { fontSize: "font24" },
  small: { fontSize: "font20" }
};

function ButtonText({ buttonText, size }: ButtonTextProps): JSX.Element {
  const buttonTextProps: TextProps = mapSizeToButtonTextProps[size];

  return (
    <SpacingContainer marginRight={size === "small" ? "spacing8" : "spacing16"}>
      <Text 
        {...buttonTextProps} 
        fontFamily="Exan"
        color="white"
      >
        {buttonText}
      </Text>
    </SpacingContainer>

  );
}

export default memo(ButtonText);