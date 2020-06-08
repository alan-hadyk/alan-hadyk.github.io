import React from "react";

import IconWithLabel from "<molecules>/IconWithLabel";

import VerticalIconsWithLabels from "<molecules>/VerticalIconsWithLabels";

import FlexContainer from "<layout>/FlexContainer";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

import {
  IconsWithLabelsProps,
  MapSizeToFlexContainerGap
} from "<molecules>/__typings__/IconsWithLabels.d.ts";

import {	
  FlexContainerProps	
} from "<layout>/__typings__/FlexContainer.d.ts";

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
  const justifyContent: FlexContainerProps["justifyContent"] = position === "horizontal" ? "flex-start" : "center";
  const flexFlow: FlexContainerProps["flexFlow"] = position === "horizontal" ? "row wrap" : "row nowrap";

  return (
    <FlexContainer
      alignItems="flex-start" 
      dataTestId="IconsWithLabels"
      flexFlow={flexFlow}
      gap={mapSizeToFlexContainerGap[size]}
      height="100%"
      justifyContent={justifyContent}
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
        ) : (
          <VerticalIconsWithLabels
            labelColor={labelColor}
            iconsWithLabels={iconsWithLabels}
            size={size}
          />
        )
      }
    </FlexContainer>
  );
}
  
export default IconsWithLabels;