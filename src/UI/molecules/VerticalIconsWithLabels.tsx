import React from "react";

import {
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "UI/molecules/IconWithLabel";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

import FlexItem from "UI/layout/FlexItem";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import Icon from "UI/atoms/Icon";
import Text from "UI/atoms/Text";

import { VerticalIconsWithLabelsProps } from "UI/molecules/__typings__/VerticalIconsWithLabels";

import spacing from "styles/variables/spacing";

const VerticalIconsWithLabels = ({
  iconsWithLabels,
  labelColor = "blue100",
  size = "medium"
}: VerticalIconsWithLabelsProps): JSX.Element => (
  <FlexContainer
    alignItems="center"
    dataTestId="VerticalIconsWithLabels"
    flexFlow="row nowrap"
    height="100%"
    justifyContent="center"
  >
    <FlexItem flex={`0 0 ${spacing.spacing72}`}>
      {iconsWithLabels.map(
        ({ iconName }: IconWithLabelProps, index: number): JSX.Element => (
          <SpacingContainer
            dataCy="VerticalIcon"
            dataTestId="IconSpacingContainer"
            key={iconName + index}
            marginBottom="spacing12"
          >
            <Icon
              height={mapSizeToIconHeight[size]}
              iconName={iconName}
              isResponsive
            />
          </SpacingContainer>
        )
      )}
    </FlexItem>
    <FlexItem flex="0 0 auto">
      {iconsWithLabels.map(
        ({ label }: IconWithLabelProps): JSX.Element => (
          <SpacingContainer
            dataCy="VerticalLabel"
            dataTestId="LabelSpacingContainer"
            height="spacing32"
            key={label}
            marginBottom="spacing12"
          >
            <Text
              dataTestId="LabelText"
              color={labelColor}
              ellipsis
              fontSize={mapSizeToTextFontSize[size]}
              key={label}
              lineHeight="spacing32"
            >
              {label}
            </Text>
          </SpacingContainer>
        )
      )}
    </FlexItem>
  </FlexContainer>
);

export default VerticalIconsWithLabels;
