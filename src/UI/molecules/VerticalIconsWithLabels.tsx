import React from "react";

import {
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "<molecules>/IconWithLabel";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

import FlexItem from "<layout>/FlexItem";
import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import Icon from "<atoms>/Icon";
import Text from "<atoms>/Text";

import {
  VerticalIconsWithLabelsProps
} from "<molecules>/__typings__/VerticalIconsWithLabels.d.ts";

import spacing from "<styles>/variables/spacing";

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
    <FlexItem
      flex={`0 0 ${spacing.spacing72}`}
    >
      {iconsWithLabels.map(({ iconName }: IconWithLabelProps, index: number): JSX.Element => (
        <SpacingContainer
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
      ))}
    </FlexItem>
    <FlexItem
      flex="0 1 auto"
    >
      {iconsWithLabels.map(({ label }: IconWithLabelProps): JSX.Element => (
        <SpacingContainer
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
      ))}
    </FlexItem>
  </FlexContainer>
);
  
export default VerticalIconsWithLabels;