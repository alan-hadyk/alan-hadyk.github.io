import React, { memo, useCallback } from "react";

import SpacingContainer from "UI/layout/SpacingContainer";
import Text from "UI/atoms/Text";

import {
  ButtonTextProps,
  MapSizeToButtonTextProps,
  TextProps
} from "UI/molecules/__typings__/ButtonText";

const mapSizeToButtonTextProps: MapSizeToButtonTextProps = {
  large: { fontSize: "font28" },
  medium: { fontSize: "font24" },
  small: { fontSize: "font20" }
};

function ButtonText({
  buttonText,
  dataTestId,
  hasMargin = true,
  size
}: ButtonTextProps): JSX.Element {
  const buttonTextProps: TextProps = mapSizeToButtonTextProps[size];
  const getMarginRight: () => string = useCallback((): string => {
    if (!hasMargin) {
      return "spacing0";
    }

    return size === "small" ? "spacing8" : "spacing16";
  }, [hasMargin, size]);

  return (
    <SpacingContainer
      dataTestId={dataTestId || "ButtonText"}
      marginRight={getMarginRight()}
    >
      <Text {...buttonTextProps} fontFamily="Exan" color="white">
        {buttonText}
      </Text>
    </SpacingContainer>
  );
}

export default memo(ButtonText);
