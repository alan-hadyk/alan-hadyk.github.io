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
      justifyContent="center"
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
        ) : <VerticalIconsWithLabels labelColor={labelColor} iconsWithLabels={iconsWithLabels} size={size} />
      }
    </FlexContainer>
  );
}
  
export default IconsWithLabels;