import React from "react";

import Icon from "UI/atoms/Icon";
import Text from "UI/atoms/Text";

import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import {
  IconWithLabelProps,
  MapSizeToIconHeight,
  MapSizeToTextFontSize
} from "UI/molecules/__typings__/IconWithLabel";

import { Spacing } from "styles/variables/__typings__/variables";

export const mapSizeToIconHeight: MapSizeToIconHeight = {
  large: "spacing40",
  medium: "spacing32",
  small: "spacing28"
};

export const mapSizeToTextFontSize: MapSizeToTextFontSize = {
  large: "font24",
  medium: "font20",
  small: "font16"
};

function IconWithLabel({
  iconName,
  label,
  labelColor = "blue100",
  size = "medium"
}: IconWithLabelProps): JSX.Element {
  const iconPadding: Spacing = size === "small" ? "spacing8" : "spacing12";

  return (
    <FlexContainer
      alignItems="center"
      dataCy="IconWithLabel"
      dataTestId="IconWithLabel"
      flexFlow="row nowrap"
      height="100%"
      justifyContent="flex-start"
    >
      <SpacingContainer
        dataTestId="IconWithLabelSpacingContainer"
        paddingRight={iconPadding}
      >
        <Icon
          height={mapSizeToIconHeight[size]}
          iconName={iconName}
          isHeightResponsive
        />
      </SpacingContainer>
      <Text
        dataTestId="LabelText"
        color={labelColor}
        fontSize={mapSizeToTextFontSize[size]}
      >
        {label}
      </Text>
    </FlexContainer>
  );
}

export default IconWithLabel;
