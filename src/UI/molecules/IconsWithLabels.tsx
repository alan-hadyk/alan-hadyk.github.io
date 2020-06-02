import React, { Fragment } from "react";

import IconWithLabel, {
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "<molecules>/IconWithLabel";

import FlexItem from "<layout>/FlexItem";
import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import Icon from "<atoms>/Icon";
import Text from "<atoms>/Text";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

import {
  IconsWithLabelsProps,
  MapSizeToFlexContainerGap
} from "<molecules>/__typings__/IconsWithLabels.d.ts";

const mapSizeToFlexContainerGap: MapSizeToFlexContainerGap = {
  large: "spacing28",
  medium: "spacing12",
  small: "spacing16"
}; 

function IconsWithLabels({
  iconsWithLabels = [],
  labelColor = "blue100",
  position = "vertical",
  size = "medium"
}: IconsWithLabelsProps): JSX.Element {
  return (
    <FlexContainer
      alignItems="flex-start" 
      dataTestId="IconsWithLabels"
      flexFlow="row nowrap"
      gap={mapSizeToFlexContainerGap[size]}
      height="100%"
      justifyContent="flex-start"
      margin="0 auto"
      maxWidth="50%"
    >
      {
        position === "horizontal" ? (
          iconsWithLabels.map(({ iconName, label }: IconWithLabelProps): JSX.Element => (
            <IconWithLabel
              labelColor={labelColor}
              iconName={iconName}
              key={label}
              label={label}
              size={size}
            />
          ))
        ) : renderVerticalIconsWithLabels()
      }
    </FlexContainer>
  );

  function renderVerticalIconsWithLabels(): JSX.Element {
    return (
      <Fragment>
        <FlexItem
          alignSelf="center"
          flex="0 0 25%"
          overflow="hidden"
        >
          {iconsWithLabels.map(({ iconName }: IconWithLabelProps): JSX.Element => (
            <SpacingContainer
              dataTestId="IconSpacingContainer"
              key={iconName}
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
          flex="0 0 75%"
        >
          {iconsWithLabels.map(({ label }: IconWithLabelProps): JSX.Element => (
            <SpacingContainer
              dataTestId="LabelSpacingContainer"
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
      </Fragment>
    );
  }
}
  
export default IconsWithLabels;